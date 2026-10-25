import Button from "@/components/ui/Button";
import { GripVertical } from "lucide-react";

const ListView = () => {
  return (
    <div className="w-full max-w-5xl outline outline-surface-border mx-auto">
      <div className="status w-full h-20 bg-neutral-800/30 inline-flex">
        <div className="title w-full inline-flex">
          <div className="border shrink-0 w-10 h-full">
            <Button variant="ghost" color="secondary" iconSize="md">
              <GripVertical />
            </Button>
          </div>
          <div className="bg-red-600 h-10 flex-1 mr-10"></div>
        </div>
      </div>
      <div className="status w-full h-20"></div>
      <div className="status w-full h-20"></div>
      <div className="status w-full h-20"></div>
      <div className="status w-full h-20"></div>
    </div>
  );
};

export default ListView;
