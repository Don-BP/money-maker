# Wiki Extractor Workflow

**Trigger**: When a user drops a new file into `data/raw/` and asks to extract it, or when explicitly commanded to run the Wiki Extractor.

**Purpose**: To take unstructured, noisy raw data (transcripts, emails, raw docs) and distill it into a deterministic, queryable JSON format inside the `data/wiki/` directory.

## Execution Plan

### Step 1: Read Raw Input
1. Identify the target file in `data/raw/`.
2. Read the entire content of the file.

### Step 2: Information Extraction
Analyze the raw text and extract the core business/project entities. Unless specified otherwise by the user, look for:
- **People/Actors**: Who is involved?
- **Processes**: What tasks are being performed?
- **Tools**: What software/systems are used?
- **Time/Frequency**: How long do things take? How often do they happen?
- **Pain Points**: What is broken, inefficient, or difficult?
- **Summary**: A brief 2-3 sentence overview.

### Step 3: Format as JSON
Structure the extracted information into a clean JSON object. 
Example Schema:
```json
{
  "entity_name": "Name of the client/project",
  "summary": "...",
  "actors": ["Name 1", "Name 2"],
  "processes": [
    {
      "name": "Process Name",
      "tools_used": ["Tool A"],
      "frequency": "Weekly",
      "pain_points": ["Takes too long"]
    }
  ]
}
```

### Step 4: Write to Wiki Layer
1. Determine an appropriate filename (e.g., `clientname_audit.json`).
2. Write the JSON file to the `data/wiki/` directory.
3. Validate that the JSON is well-formed.

### Step 5: Clean Up
Do NOT delete the raw data unless explicitly asked by the user, but confirm to the user that the Wiki Extraction is complete and the agent system is now ready to use the structured data.
