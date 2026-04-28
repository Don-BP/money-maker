# ANTIGRAVITY - Project Integration Map

**Edit this file to describe your project structure and capabilities.**

## Project Overview
Replace this section with your project's purpose:
- What does this project do?
- What problems does it solve?
- Who are the main users/stakeholders?

Example:
> This project is for simple tools / websites that make passive money.

## Governance Files

Before reading the directory structure, understand your project's governance:

- **Global_Manifest.md** - Single source of truth for all active files, tasks, and integrations
- **project_context.md** - Project identity, tech stack, coding standards, critical rules
- **.agent-rules/lessons_learned.md** - Collective wisdom: gotchas, environment specifics, resolved bugs

*Read these three files first to understand the project's operating constraints.*

## Directory Structure

Document your project's key directories:

```
.
├── .agent-rules/           # Agent orchestration rules
│   ├── 00-orchestrator.md
│   ├── GEMINI.md
│   ├── 02-research.md
│   ├── 03-blast-protocol.md
│   ├── 04-cli-tools.md
│   ├── 05-llm-wiki-system.md # 3-Layer Context Injection Architecture
│   ├── project_context.md
│   └── lessons_learned.md
├── .agent-skills/          # Reusable capabilities
│   └── [skill-name]/
│       └── SKILL.md
├── .agent-workflows/       # Multi-step processes
│   ├── [workflow-name].md
│   └── wiki-extractor.md   # Extracts data/raw -> data/wiki
├── .claude/
│   ├── cli/                # CLI tools (6 production tools)
│   │   ├── tools/
│   │   │   ├── http-client.sh
│   │   │   ├── json-processor.sh
│   │   │   ├── git-ops.sh
│   │   │   ├── file-processor.sh
│   │   │   ├── benchmark.sh
│   │   │   └── market-research.sh
│   │   └── SETUP.md
│   └── hooks/              # Validation hooks
├── data/                   # 3-Layer LLM Wiki Architecture
│   ├── raw/                # Unstructured source data (ingestion)
│   └── wiki/               # Extracted structured data (JSON/YAML)
├── execution/              # Build outputs
├── research/               # Research findings
├── GEMINI.md               # Master agent configuration
├── ANTIGRAVITY.md          # Project integration map
├── Global_Manifest.md      # Active files & tasks source of truth
└── README.md               # Project documentation
```

## Core Capabilities

List your project's main features and how they're implemented:

### Example:
- **Data Aggregation**: Uses `http-client` CLI tool for API requests
- **Analysis**: Uses `json-processor` for data transformation
- **Reporting**: Uses `file-processor` to generate reports
- **Orchestration**: Managed by Architect, Builder, and Inspector roles

## Integration Points

Document how your project integrates with:
- **External APIs**: What services does it talk to?
- **CLI Tools**: Located in `.claude/cli/tools/` - includes http-client, json-processor, git-ops, file-processor, market-research, benchmark
- **Skills**: What specialized capabilities does it use?

## Team Workflow

Describe how your team uses this project:
- **Architect**: Responsible for...
- **Builder**: Responsible for...
- **Inspector**: Responsible for...

## Dependencies

List critical dependencies:
- `jq` (installed via `SETUP.md`)
- Bash 4.0+
- Any external APIs or services

## Getting Started

### Quick Setup
1. Copy `.template/` to new project directory
2. Run `bash TEMPLATE-INIT.sh`
3. Install jq (see README.md for platform-specific instructions)
4. Customize this file with project-specific details
5. Read `.agent-rules/00-orchestrator.md` for agent configuration

### For Complex Projects

If building multi-service integrations or automation workflows, use the **B.L.A.S.T. Protocol** (see `.agent-rules/03-blast-protocol.md`):

1. Create project tracking files:
   - `task_plan.md` — Phases and checklists
   - `findings.md` — Research and discoveries
   - `progress.md` — Execution log

2. Follow the 5 phases:
   - **Blueprint** → Define goals and data schema
   - **Link** → Verify API connections
   - **Architect** → Build SOPs and tools
   - **Stylize** → Format outputs
   - **Trigger** → Deploy automation

**Use B.L.A.S.T. for:**
- ✅ Multi-service integrations
- ✅ Business-critical workflows
- ✅ Long-term maintenance projects
- ✅ Complex automation

**Skip B.L.A.S.T. for:**
- Simple CLI tools
- One-off scripts
- Quick utilities

---

**This file is customized per project. Update it to match your specific needs.**
