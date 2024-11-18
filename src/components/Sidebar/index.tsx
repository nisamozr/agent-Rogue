import { useAppCtx } from "@/context/app.contex";
import { cn } from "@/lib/utils";

import Tabs from "./Tabs";
import GlobelBox from "./GlobelBox";
import TeerminalBox from "./TeerminalBox";
import ConnectWallet from "../WalletConnect";
import { Button } from "../ui/button";
import useGetTokenBalance from "@/hooks/token/useGetTokenBalance";
import { ICONS } from "@/assets";
import Avatar, { genConfig } from "react-nice-avatar";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { X } from "lucide-react";

const Sidebar = () => {
  const { tokenBalance } = useGetTokenBalance();
  const { address, isConnected } = useAppKitAccount();

  const config = genConfig(address);
  const { open } = useAppKit();

  const { setHideSidebar, hideSidebar, sidebarMenu } = useAppCtx();
  return (
    <aside
      className={cn(
        "h-full px-4 py-2 flex bg-card fixed top-0 right-0 overflow-hidden text-nowrap font-sans text-lg  z-10 flex-col ",
        "transition-all duration-300 ease-in-out",
        hideSidebar ? "w-[auto]" : "w-[400px]",
        "-md:hidden"
      )}
    >
      <div
        className={`flex ${
          isConnected ? " justify-between" : "justify-end"
        }  py-4`}
      >
        {!hideSidebar && isConnected ? (
          <div onClick={() => open()}>
            <Avatar
              className="cursor-pointer"
              style={{ width: "40px", height: "40px" }}
              {...config}
            />
          </div>
        ) : null}

        {hideSidebar ? (
          <img
            className="cursor-pointer"
            onClick={() => setHideSidebar((prev) => !prev)}
            src={ICONS.icon_sidebarView__btn}
            alt=""
          />
        ) : (
          <X
            className="cursor-pointer"
            onClick={() => setHideSidebar((prev) => !prev)}
            width={25}
            height={25}
          />
        )}
      </div>
      {!hideSidebar && (
        <>
          <div className="h-full py-4 gap-4">
            <div className="flex flex-col gap-4 h-full">
              <Tabs />
              <div className="flex-1  h-4">
                {sidebarMenu === "globel" ? <GlobelBox /> : <TeerminalBox />}
              </div>
              {isConnected ? null : (
                <div>
                  <ConnectWallet />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[14px] ">$host: {tokenBalance ?? 0}</p>

            <Button variant={"ghost"}>Learn more</Button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
