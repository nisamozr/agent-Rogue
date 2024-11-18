import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAppKitAccount } from "@reown/appkit/react";
import { trimAddress } from "@/lib/utils";
import { SendHorizontalIcon } from "lucide-react";
import { ICONS } from "@/assets";
import TippingCard from "./TippingCard";

const GlobelBox = () => {
  const { address, isConnected } = useAppKitAccount();
  const [showTipAgent, setsTipAgent] = useState(false);

  const [globalMessages, setGlobalMessages] = useState<any>([]);
  const [message, setChatMessage] = useState("");

  const handleSend = () => {
    console.log("dfdf");
    if (message.trim()) {
      setGlobalMessages([
        ...globalMessages,
        { name: address, message: message },
      ]);
      setChatMessage(""); // Clear the input after sending
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };
  return (
    <div className="   flex flex-col gap-4  h-full justify-between overflow-auto ">
      <div className="flex flex-col   gap-2 overflow-auto h-full bg-muted p-4 ">
        {globalMessages.map((message: any) => (
          <div className="flex gap-2 items-center">
            <p className="text-[14px] font-semibold">
              {trimAddress(message?.name)}:
            </p>
            <p
              className="text-sm 
            text-wrap "
            >
              {message?.message}
            </p>
          </div>
        ))}
      </div>
      {
        showTipAgent?
        <TippingCard close={setsTipAgent} />
:null
      }
      {isConnected ? (
        <div className="flex gap-2">
          <div className="relative w-full">
            <Input
            className="pr-[40px "
              value={message}
              type="text"
              placeholder="Start typing…"
              onChange={(e) => setChatMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={handleSend} variant={"ghost"} className="absolute right-0 top-0">
              <SendHorizontalIcon />
            </Button>
          </div>
          {
            showTipAgent ?null :
          <Button
            onClick={() => setsTipAgent(true)}
            className="bg-[#0842A0] border-[2px] border-[#B5B6B7] hover:bg-[#0842A0] "
          >
            <img src={ICONS.icon_tip__btn} alt="" />
          </Button>
          }

        </div>
      ) : null}
    </div>
  );
};

export default GlobelBox;