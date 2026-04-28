---
trigger: always_on
version: 1.0
---

# 05 - LLM Wiki System (Controlled Context Injection)

## The 3-Layer Pattern
To prevent context window bloat when working with large volumes of business or project data, we use the Karpathy/Adam Goodyer LLM Wiki System. This consists of three layers:

### 1. Ingestion Layer (`data/raw/`)
- Contains unstructured raw data: raw emails, meeting transcripts, full text dumps.
- **RULE**: NEVER read directly from `data/raw/` when searching for business logic, client info, or system states unless explicitly asked to do a new extraction. The data here is too noisy and will pollute your context window.

### 2. Wiki Layer (`data/wiki/`)
- Contains deterministic, structured data (JSON or YAML) that summarizes the raw data.
- Examples: `audit.json`, `storyboard.json`, `client_summary.yaml`.
- **RULE**: ALWAYS read from `data/wiki/` when you need context about a client, a process, a feature, or an audit. This data is structured specifically for LLM consumption.

### 3. Schema Layer (Agent Rules)
- The files in `.agent-rules/` and `.agent-skills/` serve as the schema. They tell you exactly *where* to look in the Wiki Layer.
- By looking up the schema and directly reading the targeted JSON in the Wiki layer, we achieve "Controlled Context Injection".

## Instructions for Agents
When working on tasks requiring client history, project scope, or business operations:
1. Identify the relevant file in `data/wiki/`.
2. Read the specific JSON/YAML file.
3. If the data is missing from the wiki layer, ask the user to provide the raw data into `data/raw/` and trigger the `wiki-extractor` workflow.
