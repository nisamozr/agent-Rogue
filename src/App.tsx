import Sidebar from "./components/Sidebar";
import TvPanel from "./components/TvPanel";
import { useAppCtx } from "./context/app.contex";
import { cn } from "./lib/utils";

function App() {
  const { hideSidebar } = useAppCtx();
  return (
    <main
      className={cn(
        "grid min-h-[100dvh] -md:grid-cols-1",
        hideSidebar ? "grid-cols-[1fr_50px]" : "grid-cols-[1fr_300px]"
      )}
    >
      <TvPanel />
      <Sidebar />
    </main>
  );
}

export default App;
