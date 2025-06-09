import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MessageService from "./service/message";
import Login from "./page/login/login";

export const router = (messageService: MessageService) =>
  createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: [],
    },
    {
      path: "/home",
      element: <App messageService={messageService} />,
      children: [],
    },
  ]);
