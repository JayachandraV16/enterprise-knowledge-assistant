# AI Powered Enterprise Knowledge Assistant

> An AI-powered Enterprise Knowledge Assistant that enables employees to retrieve information from enterprise documents using Retrieval-Augmented Generation (RAG) while ensuring every response is grounded with source references.

---

## Project Overview

The AI Powered Enterprise Knowledge Assistant is a microservice-based web application that allows users to upload enterprise documents (PDF, DOCX, CSV) and interact with them using natural language.

Instead of manually searching hundreds of pages, users can ask questions, and the system retrieves relevant document chunks using semantic search before generating accurate responses using a local Large Language Model (LLM).

### Key Objectives

- Reduce document searching time
- Improve employee productivity
- Ensure data privacy with offline AI
- Provide accurate answers with document references
- Support enterprise knowledge management

---

## Architecture

```
                        +----------------------+
                        |     React (Vite)     |
                        | TypeScript, Tailwind |
                        +----------+-----------+
                                   |
                                   |
                         REST APIs (HTTP / JSON)
                                   |
                  +----------------+----------------+
                  |         FastAPI AI Service      |
                  | Document Ingestion & Parsing    |
                  | Chunking & Text Splitting       |
                  | Sentence-Transformer Embedding  |
                  | Semantic Vector Retrieval       |
                  | Local LLM Answer Generation     |
                  +---------+-----------+-----------+
                            |           |
                            |           |
                     ChromaDB       Ollama
                     Vector DB      Llama 3.2
```

---

## Features

### Authentication

- JWT Authentication
- Role-based Access
- Secure Password Hashing (BCrypt)

### Document Management

- Upload PDF
- Upload DOCX
- Upload CSV
- Store document metadata
- Delete documents

### AI Knowledge Assistant

- Retrieval-Augmented Generation (RAG)
- Semantic Search
- Context-aware Responses
- Source Referencing
- Procedural Checklist Generation

### Chat

- Ask questions
- View AI responses
- Source citations
- Chat history

### Deployment

- Docker Compose
- Offline AI
- Local LLM using Ollama

---

## Tech Stack

| Layer                | Technology                                 |
| -------------------- | ------------------------------------------ |
| Frontend             | React + Vite (TypeScript, Tailwind CSS)    |
| Backend & AI Service | FastAPI (Python)                           |
| AI Framework         | LangChain                                  |
| Embeddings           | Sentence Transformers (`all-MiniLM-L6-v2`) |
| Vector Database      | ChromaDB                                   |
| LLM Engine           | Ollama (Llama 3.2)                         |
| Testing              | Vitest (Frontend), Pytest (AI Service)     |
| Deployment           | Docker Compose                             |
| Version Control      | Git + GitHub                               |

---

## Folder Structure

```
enterprise-knowledge-assistant/

├── frontend/
├── backend/
├── ai-service/
├── database/
├── docker/
├── docs/
├── scripts/
│
├── .github/
│   ├── workflows/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
│
├── docker-compose.yml
├── README.md
├── CHANGELOG.md
└── LICENSE
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/<organization>/enterprise-knowledge-assistant.git
```

```bash
cd enterprise-knowledge-assistant
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

> **Configuration (`frontend/.env`)**:
>
> - `VITE_USE_MOCK=true` : Standalone demo mode with persistent local storage (no backend needed).
> - `VITE_USE_MOCK=false` : Connects directly to the FastAPI AI Service (`http://localhost:8000`).
>
> **Demo Credentials**:
>
> - Admin: `admin@enterprise.com` / `admin123`
> - Employee: `employee@enterprise.com` / `employee123`

---

### AI Service

```bash
cd ai-service

pip install -r requirements.txt

uvicorn main:app --reload --port 8000
```

---

### Database

Install PostgreSQL and create the required database.

---

### Ollama

Install Ollama.

Download your preferred model.

Example:

```bash
ollama pull llama3.2
```

---

## Running Locally

Start each service individually or use Docker Compose.

Example:

```
Frontend   : http://localhost:5173
AI Service : http://localhost:8000
API Docs   : http://localhost:8000/docs
```

---

## Docker Setup

Run the complete project

```bash
docker compose up --build
```

Services

- React Frontend
- FastAPI AI Service
- ChromaDB
- Ollama

---

## API Documentation

FastAPI Interactive Docs (Swagger)

```
http://localhost:8000/docs
```

FastAPI ReDoc

```
http://localhost:8000/redoc
```

---

## Testing

### Frontend

- Vitest (`npm test`, 79 automated unit & integration tests)

### Backend / AI Service

- Pytest

### API

- Postman

---

## Development Workflow

```
GitHub Issue
      ↓
Feature Branch
      ↓
Development
      ↓
Unit Testing
      ↓
Pull Request
      ↓
Code Review
      ↓
Merge into develop
      ↓
Sprint Testing
      ↓
Release
```

---

## Team Members

| Name        | Responsibility                                                                           |
| ----------- | ---------------------------------------------------------------------------------------- |
| Jayachandra | Docker, DevOps, Deployment, CI/CD Pipeline                                               |
| Omraj       | AI Service (FastAPI, LangChain, Ollama, ChromaDB Vector Pipeline, RAG Answering)         |
| Sejal       | React Architecture, Role-Based Dashboards, Client API Integration , UI/UX Design (Figma) |
| Harshal     | Database, Testing, Documentation, Project Reports                                        |

---

## Documentation

Project documentation is available in the `/docs` directory.

- Architecture
- API Documentation
- Database Design
- Deployment Guide
- Sprint Reports
- Developer Guide

---

## Contributing

1. Create a feature branch

```
feature/<feature-name>
```

2. Commit using Conventional Commits

Example

```
feat(auth): implement JWT authentication
```

3. Open a Pull Request to `develop`

4. Get at least one review approval

5. Merge after successful review

---

## License

This project is developed for academic purposes as a Third Year Engineering Project.
