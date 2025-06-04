import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = (messageService: any) =>
  createBrowserRouter([
    {
      path: "/*",
      element: <App messageService={messageService} />,
      children: [],
    },
  ]);
