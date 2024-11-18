import { useAppCtx } from "@/context/app.contex";
import { Button } from "../ui/button";

const Tabs = () => {
  const types = ["globel", "terminal"];
  const { setSidebarMenu ,sidebarMenu} = useAppCtx();

  return (
    <div className="gap-2 flex">
      {types.map((tab) => (
        <Button className="uppercase w-full rounded-none" variant={sidebarMenu === tab ? "active":"outline" } onClick={()=>setSidebarMenu(tab)}>
          {tab}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;