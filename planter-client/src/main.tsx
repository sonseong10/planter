import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import MessageService from "./service/message";
import { globalStyles } from "./styles/global";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

const baseURL = import.meta.env.VITE_BASE_URL as string;
const message = new MessageService(baseURL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <RouterProvider
        router={router(message)}
        future={{ v7_startTransition: true }}
      />
    </ThemeProvider>
  </StrictMode>
);
