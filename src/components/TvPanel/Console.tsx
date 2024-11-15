import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Power, ChevronUp, ChevronDown } from "lucide-react";

// Channel content mapping
const channels = {
  1: {
    type: "video",
    url: "https://www.youtube.com/embed/o2VA9c8Z7FA?autoplay=1&mute=1&loop=1",
    title: "AGENT NEWS",
  },
  2: {
    type: "video",
    url: "https://www.youtube.com/embed/TQllQlElpz8?autoplay=1&mute=1&loop=1",
    title: "Family Guy",
  },
  3: {
    type: "video",
    url: "https://www.youtube.com/embed/SiW5oTl_inA?autoplay=1&mute=1&loop=1",
    title: "Sports Channel",
  },
  4: {
    type: "video",
    url: "https://www.youtube.com/embed/HWsUOUR6c2c?autoplay=1&mute=1&loop=1",
    title: "Music Channel",
  },
};
const TvConsole = () => {
  const [power, setPower] = useState(false);
  const [channel, setChannel] = useState(1);
  const [staticEffect, setStaticEffect] = useState(false);

  useEffect(() => {
    if (power) {
      setStaticEffect(true);
      const timer = setTimeout(() => setStaticEffect(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [channel, power]);

  const handleChannelChange = (direction: "up" | "down") => {
    if (!power) return;
    setStaticEffect(true);
    if (direction === "up") {
      setChannel((prev) =>
        prev === Object.keys(channels).length ? 1 : prev + 1
      );
    } else {
      setChannel((prev) =>
        prev === 1 ? Object.keys(channels).length : prev - 1
      );
    }
  };

  const renderContent = () => {
    if (!power) return null;
    if (staticEffect) {
      return null;
    }

    //@ts-ignore
    const currentChannel = channels[channel as any];
    console.log("cuurent chan", currentChannel);
    return (
      <div className="relative w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src={currentChannel.url}
          title="YouTube video player"
          allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
        />
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded">
          CH-{channel}: {currentChannel.title}
        </div>
      </div>
    );
  };

  return (
    <div className=" w-10/12 max-w-[900px] h-[80dvh] max-h-[600px] pb-[1.5rem] bg-accent border-4 rounded-lg relative overflow-hidden p-4">
      {/* Screen */}
      <div
        className={`w-full h-[95%] mx-auto  border-8 border-zinc-900 rounded-lg overflow-hidden
          ${!power ? "bg-black" : "bg-zinc-900"}`}
      >
        <div
          className={`w-full h-full flex items-center justify-center rounded-md 
            ${
              staticEffect
                ? "bg-[repeating-radial-gradient(circle,#757575,#383838_2px,#272727_3px,#676767_4px)]"
                : ""
            }`}
        >
          {renderContent()}
        </div>
      </div>

      {/* TV Brand */}
      <div className="absolute bottom-3 left-0 right-0 transform  flex w-[95%] mx-auto">
        <span className="text-zinc-500 font-bold mr-auto">RETRO-AGENT-90</span>
        {/* Power Button */}
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-zinc-500 hover:bg-zinc-400 w-6 h-6 text-white"
            onClick={() => handleChannelChange("up")}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-zinc-500  hover:bg-zinc-400 w-6 h-6 text-white"
            onClick={() => handleChannelChange("down")}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full w-6 h-6 ${
              power
                ? "bg-red-500 hover:bg-red-600 text-white hover:text-white"
                : "bg-zinc-500 hover:bg-zinc-400 text-white"
            }`}
            onClick={() => setPower(!power)}
          >
            <Power className="h-2 w-2 p-[2px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TvConsole;
