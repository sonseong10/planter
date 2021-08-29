import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import MessageService from "./service/message"
import { BrowserRouter } from "react-router-dom"

const baseURL = process.env.REACT_APP_BASE_URL! as string
const messageService = new MessageService(baseURL)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App messageService={messageService} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
