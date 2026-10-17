import axios, { AxiosError } from 'axios';

export const TOKEN_KEY = 'eka_token';
export const USER_KEY = 'eka_user';
export const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '',
  timeout: 60_000, // local Ollama can be slow; SRS target is 5s, but don't abort early
});

// Attach JWT to every request (SRS 3.1)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Expired / invalid token -> back to login
api.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const isLogin = error.config?.url?.includes('/api/auth/login');
    if (error.response?.status === 401 && !isLogin) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      window.location.assign('/login');
    }
    return Promise.reject(error);
  },
);

export const delay = (ms = 500) => new Promise((r) => setTimeout(r, ms));

export function getErrorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    if (!err.response) return 'Cannot reach the server. Please try again.';
    const data = err.response.data as { message?: string } | undefined;
    if (data?.message && typeof data.message === 'string' && data.message.trim()) {
      return data.message;
    }
    const status = err.response.status;
    if (status === 403) return "You don't have permission to do this";
    if (status === 404) return 'The requested resource was not found';
    if (status === 413) return 'File is too large for the server';
    if (status >= 500 && status < 600) return 'Server error. Please try again';
    return `Request failed (${status})`;
  }
  return err instanceof Error ? err.message : 'Something went wrong';
}
