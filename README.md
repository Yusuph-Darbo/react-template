# React Full‑Stack Template

A starter template for building full‑stack React applications.  

---

> Folders that are empty might contain `.gitkeep` files so GitHub keeps the structure. You can remove those once real code is added.

---

### Prerequisites

Before you begin, make sure you have:

- Node.js installed (v16+ recommended)
- A package manager (pnpm recommended, or npm/yarn)

---

### Clone & Setup

```bash
# Clone the repo
git clone https://github.com/Yusuph‑Darbo/react‑template.git

# Change directory
cd react‑template

# Copy env example
cp .env.example .env

# Install dependencies
pnpm install
# (Or: npm install / yarn)

```

---

## Development

### Start Frontend

```bash
pnpm --filter client dev
```

### Start Backend

```bash
pnpm --filter server dev
```

### Run Both Together

If you want frontend and backend running in one command:

```bash
pnpm dev
```

---
