import { useAppCtx } from "@/context/app.contex";
import { cn } from "@/lib/utils";
import { SidebarCloseIcon } from "lucide-react";

const Sidebar = () => {
  const { setHideSidebar, hideSidebar } = useAppCtx();
  return (
    <aside
      className={cn(
        "h-full flex bg-card fixed top-0 right-0 overflow-hidden text-nowrap font-sans text-lg  z-10 flex-col border-r border-l",
        "transition-all duration-300 ease-in-out",
        hideSidebar ? "w-[50px]" : "w-[300px]",
        "-md:hidden"
      )}
    >
      {!hideSidebar && "Sidebar"}
      <SidebarCloseIcon onClick={() => setHideSidebar((prev) => !prev)} />
    </aside>
  );
};

export default Sidebar;
