# Embed Xplore — Smart PC Advisor

**Find the right computer for your work, skills and future.**

A multilingual computer-selection platform that translates a person's profession, workload, software, budget and upgrade plans into explainable laptop, desktop and custom-PC recommendations.

## Product scope

- Adaptive questionnaire for profession, designation, industry, software and workload
- Optional CV/resume-assisted profile extraction (with user review before use)
- Three recommendation tiers: Budget-Optimized, Balanced and Professional
- Real product catalogue, pricing and purchase links
- Side-by-side laptop and desktop comparisons
- Custom desktop PC builder with compatibility and upgrade guidance
- English, Hindi and Punjabi interface foundations
- Guest-first experience with optional accounts and saved recommendations

## Technology

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Rust, Axum, Tokio
- Database: PostgreSQL, SQLx
- API: REST + JSON; OpenAPI documentation planned
- Tests: Vitest and Rust tests
- Source control: GitHub

## Repository layout

```text
frontend/   React application
backend/    Axum API and domain services
docs/       Architecture, schema and API documentation
scripts/    Developer utilities
tests/      Cross-component tests
```

## Development status

Milestone 1–3 foundation is being established. Product catalogue ingestion, recommendation logic, CV parsing, authentication and PC-part compatibility are planned follow-on milestones.

## Run locally

### Frontend

Requirements: Node.js 20+ and npm.

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

### Backend

Requirements: Rust stable and PostgreSQL.

```bash
cd backend
cp .env.example .env
cargo run
```

The API health endpoint is `GET /api/health`.

## Configuration

Never commit credentials. Configure local values in ignored `.env` files. See each application's `.env.example`.

## Brand

**Embed Xplore — Smart PC Advisor**  
*Find the Right Computer for Your Work, Skills & Future.*
