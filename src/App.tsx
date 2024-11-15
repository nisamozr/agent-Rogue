import Sidebar from "./components/Sidebar";
import TvPanel from "./components/TvPanel";

function App() {
  return (
    <main className="grid min-h-[100dvh] grid-cols-[1fr_350px] -md:grid-cols-1">
      <TvPanel />
      <Sidebar />
    </main>
  );
}

export default App;
