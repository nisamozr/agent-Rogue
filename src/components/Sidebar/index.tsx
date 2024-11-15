import { useAppCtx } from "@/context/app.contex";
import { cn } from "@/lib/utils";
import { SidebarCloseIcon, SidebarOpenIcon } from "lucide-react";

import Tabs from "./Tabs";
import GlobelBox from "./GlobelBox";
import TeerminalBox from "./TeerminalBox";
import ConnectWallet from "../WalletConnect";
const Sidebar = () => {
  const { setHideSidebar, hideSidebar, sidebarMenu } = useAppCtx();
  return (
    <aside
      className={cn(
        "h-full px-4 py-2 flex bg-card fixed top-0 right-0 overflow-hidden text-nowrap font-sans text-lg  z-10 flex-col border-r border-l",
        "transition-all duration-300 ease-in-out",
        hideSidebar ? "w-[auto]" : "w-[300px]",
        "-md:hidden"
      )}
    >
      <div className="flex justify-end">
        {hideSidebar ? (
          <SidebarCloseIcon
            onClick={() => setHideSidebar((prev) => !prev)}
            width={40}
            height={40}
          />
        ) : (
          <SidebarOpenIcon
            onClick={() => setHideSidebar((prev) => !prev)}
            width={40}
            height={40}
          />
        )}
      </div>
      {!hideSidebar && (
        <div className="h-full py-4 gap-4">
          <div className="flex flex-col gap-4 h-full">
            <Tabs />
            <div className="flex-1  h-4">
              {sidebarMenu === "globel" ? <GlobelBox /> : <TeerminalBox />}
            </div>
            <div>
            <ConnectWallet/>
          </div>
          </div>
         
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
