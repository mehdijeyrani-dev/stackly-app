import Button from "@/components/ui/Button";
import { CircleQuestionMark, Settings } from "lucide-react";

const SidebarOptions = () => {
  return (
    <div className="w-10 h-fit md:w-full bg-surface shrink-0 flex flex-col items-center gap-1 px-0.5 py-1 md:p-2 border border-surface-border rounded-md">
      <Button
         variant="ghost" color="secondary" iconSize="md" className="md:w-full md:justify-start md:p-2 rounded-md"
      >
        <Settings strokeWidth={1} />
        <span className="hidden md:inline-block font-normal">
          Settings
        </span>
      </Button>
      <Button
        variant="ghost" color="secondary" iconSize="md" className="md:w-full md:justify-start md:p-2 rounded-md"
      >
        <CircleQuestionMark size={20} strokeWidth={1} />
        <span className="hidden md:inline-block md:text-base font-normal">
          Help Center
        </span>
      </Button>
    </div>
  );
};

export default SidebarOptions;
