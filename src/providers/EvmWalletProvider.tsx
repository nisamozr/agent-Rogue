import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { base, baseSepolia, mainnet } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

// 0. Setup queryClient
export const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

// 2. Create wagmiConfig
const metadata = {
  name: "Web3 Copilot",
  description: "Web3 Copilot",
  url: "", // origin must match your domain & subdomain
  icons: [],
  // enableOnramp: true, // Optional - false as default
};
const networks = [mainnet, base, baseSepolia];

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false,
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  //@ts-ignore
  networks,
  projectId,
  defaultNetwork: baseSepolia,
  allowUnsupportedChain: false,
  metadata,
  themeVariables: {
    // "--w3m-font-family": "Petrov_Sans",
    "--w3m-color-mix": "hsl(var(--background))",
    "--w3m-accent": "hsl(var(--primary))",
    "--w3m-color-mix-strength": 30,
    "--w3m-border-radius-master": "1px",
    "--w3m-z-index": 999999999,
  },
  themeMode: "light",
  features: {
    email: false, // default to true
    socials: false,
    emailShowWallets: false, // default to true
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

export const evm_config = wagmiAdapter.wagmiConfig;

export function EvmWalletProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={evm_config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}