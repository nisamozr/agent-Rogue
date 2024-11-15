import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppContextProvider } from "./context/app.contex.tsx";
import { EvmWalletProvider } from "./providers/EvmWalletProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EvmWalletProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </EvmWalletProvider>
  </StrictMode>
);
