import express from "express"
import http from "http"
import { setupLightningDB } from "@lightningdb/server"

const app = express()

app.use(express.json())

const server = http.createServer(app)

setupLightningDB(server)

// Add a test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the LightningDB demo server" })
})

server.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`),
)
