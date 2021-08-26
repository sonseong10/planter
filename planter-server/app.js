import express from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import "express-async-error"
import messageRoute from "./router/message"

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan("combined"))

app.use("/", messageRoute)

app.use((req, res, next) => {
  res.sendStatus(404)
})

app.use((error, req, res, next) => {
  console.error(error)
  res.sendStatus(500)
})

app.length(8080)
