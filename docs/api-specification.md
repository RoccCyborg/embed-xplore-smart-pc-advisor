# API Specification — Initial Contract

Base path: `/api`

## Implemented

### GET /health

Returns:

```json
{
  "status": "ok",
  "service": "embed-xplore-api"
}
```

## Planned endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /profiles | Create or update an advisor profile |
| GET | /questionnaire/definition | Retrieve questionnaire sections and options |
| POST | /questionnaire/sessions | Start a guest or account questionnaire |
| PATCH | /questionnaire/sessions/{id} | Save answers and progress |
| POST | /resume/parse | Submit an authorised CV for extraction |
| GET | /software | Search the software catalogue |
| POST | /recommendations | Generate explainable recommendation tiers |
| GET | /products | Search products by market and specification |
| POST | /comparisons | Compare selected products |
| POST | /pc-builds/validate | Validate component compatibility |

## API conventions

- JSON request and response bodies.
- ISO 8601 timestamps in UTC.
- ISO 4217 currency codes.
- Stable machine-readable error codes.
- Request validation at API boundaries.
- Pagination for catalogue endpoints.
- OpenAPI documentation to be generated as endpoints are implemented.

The planned endpoints are not live yet.
