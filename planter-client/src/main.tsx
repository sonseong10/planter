import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import MessageService from "./service/message";

const baseURL = import.meta.env.VITE_BASE_URL as string;
const message = new MessageService(baseURL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider
      router={router(message)}
      future={{ v7_startTransition: true }}
    />
  </StrictMode>
);
