import Button from "@/components/ui/Button";
import { CircleQuestionMark, Settings } from "lucide-react";

const SidebarOptions = () => {
  return (
    <div className="w-10 h-fit md:w-full bg-neutral-800 shrink-0 flex flex-col items-center gap-1 p-1 md:p-2 border border-neutral-700 rounded-md">
      <Button
        variant="ghost"
        color="secondary"
        size="icon"
        radius="sm"
        className="md:w-full md:h-fit md:justify-start md:px-2 md:py-1 shrink-0 aspect-square md:aspect-auto"
      >
        <Settings size={20} strokeWidth={1} />
        <span className="hidden md:inline-block md:text-base font-normal">
          Settings
        </span>
      </Button>
      <Button
        variant="ghost"
        color="secondary"
        size="icon"
        radius="sm"
        className="md:w-full md:h-fit md:justify-start md:px-2 md:py-1 shrink-0 aspect-square md:aspect-auto"
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
