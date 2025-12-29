# React Full‑Stack Template

A starter template for building full‑stack React applications with a clear folder structure and future-proof architecture.  

---

## Why This Template?

This template aims to:

- Provide a **consistent and scalable folder structure**
- Separate **frontend and backend** cleanly
- Include basics for environment config and tooling
- Be **easy to clone and reuse** for future projects
- Be adaptable to newer versions of React, Vite, Express, etc.

> It works as a **template repo** for your full stack apps — frontend (React + Vite), backend (Node + Express + Postgres).

---

## Project Structure

```txt
.
├── apps/
│   ├── client/            # React frontend (Vite)
│   └── server/            # Backend (Express)         
├── .env.example
├── .gitignore
├── package.json           # Root workspace scripts
├── pnpm‑workspace.yaml    # Workspace config (pnpm)
└── README.md
````

> Folders that are empty might contain `.gitkeep` files so GitHub keeps the structure. You can remove those once real code is added.

---

## Getting Started

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

## Included Features

- Vite React app (fast dev + build)
- Express backend with modular routes
- Shared package for types & utils
- Workspace setup (pnpm / npm / yarn)
