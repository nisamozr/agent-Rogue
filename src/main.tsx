import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppContextProvider } from "./context/app.contex.tsx";
import { EvmWalletProvider } from "./providers/EvmWalletProvider.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import ConvexServerProvider from "./providers/ConvexProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConvexServerProvider>
      <EvmWalletProvider>
        <AppContextProvider>
          <App />
          <Toaster />
        </AppContextProvider>
      </EvmWalletProvider>
    </ConvexServerProvider>
  </StrictMode>
);
