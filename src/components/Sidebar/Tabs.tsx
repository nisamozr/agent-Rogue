import { useAppCtx } from "@/context/app.contex";
import { Button } from "../ui/button";

const Tabs = () => {
  const types = ["globel", "terminal"];
  const { setSidebarMenu } = useAppCtx();

  return (
    <div className="gap-4 flex">
      {types.map((tab) => (
        <Button className="uppercase" variant="outline" onClick={()=>setSidebarMenu(tab)}>
          {tab}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
