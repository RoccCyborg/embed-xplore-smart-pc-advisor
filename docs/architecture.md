# System Architecture

## Overview

The product uses a React single-page application, a Rust/Axum JSON API and PostgreSQL persistence.

```text
Browser
  |
  v
React + TypeScript + Vite
  |
  | HTTPS / REST / JSON
  v
Rust + Axum API
  |-- Profile and questionnaire domain
  |-- Software and workload catalogue
  |-- Recommendation engine
  |-- Product catalogue and comparison
  |-- Resume parsing pipeline
  |-- PC component compatibility
  |
  v
PostgreSQL
```

## Design principles

1. Workload-first recommendations: map actual applications and tasks to hardware requirements.
2. Explainability: each recommendation should state suitability, limitations and trade-offs.
3. Data provenance: product price, availability and specification records should carry source and update timestamps.
4. User control: CV-derived data must be reviewable and editable before it influences recommendations.
5. Progressive disclosure: ask relevant questions adaptively rather than presenting one oversized form.
6. Internationalisation: user-facing text must be translation-ready from the beginning.

## Initial implementation

The frontend establishes the brand, responsive design language and product entry points. The API currently exposes a health endpoint. Database migrations, domain endpoints and questionnaire flows are subsequent implementation tasks.
