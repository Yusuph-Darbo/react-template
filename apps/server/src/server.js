import dotenv from "dotenv"
import { createServer } from "http"

dotenv.config()

import app from "./app.js"

const PORT = process.env.PORT || 3000

const server = createServer(app)

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})