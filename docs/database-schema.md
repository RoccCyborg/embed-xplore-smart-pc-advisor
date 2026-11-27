# Database Schema — Initial Plan

This document describes the planned domain model. It is not yet an applied migration.

## Core entities

- `user_accounts`: optional registered identity and authentication metadata.
- `profiles`: profession, designation, industry, experience, education and location/market preferences.
- `profile_skills`: programming languages, technical skills and proficiency.
- `software_catalogue`: application name, category, vendor and supported platforms.
- `profile_software`: software selected by a profile, usage intensity and project context.
- `questionnaire_sessions`: guest or authenticated questionnaire progress and answers.
- `hardware_requirements`: normalized CPU, GPU, RAM, storage, display and portability requirements.
- `products`: laptop and desktop product identities.
- `product_specifications`: normalized hardware specifications.
- `product_prices`: market, currency, seller, observed price, source URL and observation timestamp.
- `recommendation_runs`: profile snapshot, scoring version and creation timestamp.
- `recommendation_items`: product, tier, score, rationale and trade-offs.
- `pc_components`: component catalogue for custom desktop builds.
- `component_compatibility_rules`: socket, chipset, memory, dimensions, power and interface constraints.
- `resume_documents`: minimal processing metadata and retention/deletion state; avoid retaining source files longer than needed.

## Data requirements

- Use UUID primary keys for externally referenced records.
- Store timestamps in UTC using `timestamptz`.
- Store money as integer minor units plus ISO 4217 currency code.
- Preserve source URL, source name and observed timestamp for market data.
- Version recommendation rules so results can be reproduced.
- Keep profile data separate from product catalogue data.
- Support guest sessions without requiring account creation.

## Privacy and security

Resume upload requires explicit consent, file type/size validation, malware scanning before parsing, private storage, access controls and a deletion workflow. Extracted fields must be shown to the user for confirmation. Never store passwords, access tokens or secrets in profile records.
