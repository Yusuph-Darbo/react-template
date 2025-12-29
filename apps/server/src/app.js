import express from "express"
import cors from "cors"

const app = express()

// Enables cross-origin requests (frontend to backend)
app.use(cors())
app.use(express.json())


export default app