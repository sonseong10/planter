import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import MessageService from "./service/message";
import { globalStyles } from "./styles/global";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import "jotai-devtools/styles.css";
import { DevTools } from "jotai-devtools";

const baseURL = import.meta.env.VITE_BASE_URL as string;
const message = new MessageService(baseURL);

const JotaiDevTools = () =>
  process.env.NODE_ENV !== "production" ? (
    <>
      <DevTools />
    </>
  ) : null;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JotaiDevTools />

    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <RouterProvider
        router={router(message)}
        future={{ v7_startTransition: true }}
      />
    </ThemeProvider>
  </StrictMode>
);
