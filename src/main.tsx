import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { LoginProvider } from "./Context/LoginContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <LoginProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LoginProvider>
    </BrowserRouter>
  </StrictMode>
);
