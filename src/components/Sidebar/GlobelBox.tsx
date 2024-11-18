import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAppKitAccount } from "@reown/appkit/react";
import { trimAddress } from "@/lib/utils";

const GlobelBox = () => {
  const { address } = useAppKitAccount();

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
          <div className="flex gap-2 ">
            <p className="text-sm">{trimAddress(message?.name)}:</p>
            <p className="text-sm text-wrap font-medium">{message?.message}</p>
          </div>
        ))}
      </div>
      {/* <TippingCard/> */}
      <div className="flex gap-2">
        <Input
          value={message}
          type="text"
          placeholder="message"
          onChange={(e) => setChatMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={() => handleSend()}>tip</Button>
      </div>
    </div>
  );
};

export default GlobelBox;
