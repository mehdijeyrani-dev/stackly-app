import Button from "@/components/ui/Button";
import { CircleQuestionMark, Settings } from "lucide-react";

const SidebarOptions = () => {
  return (
    <div className="w-10 md:w-full bg-surface border border-surface-border rounded-md flex flex-col gap-1 p-1 md:p-2">
      <Button
        variant="ghost"
        color="secondary"
        className="w-full aspect-square md:aspect-auto rounded-sm p-0 md:px-2.25 md:py-1.5 md:justify-start"
      >
        <Settings size={20} strokeWidth={1} className="shrink-0" />
        <span className="hidden md:inline-block font-normal leading-5">
          Settings
        </span>
      </Button>
      <Button
        variant="ghost"
        color="secondary"
        className="w-full aspect-square md:aspect-auto rounded-sm p-0 md:px-2.25 md:py-1.5 md:justify-start"
      >
        <CircleQuestionMark size={20} strokeWidth={1} className="shrink-0" />
        <span className="hidden md:inline-block font-normal leading-5">
          Help Center
        </span>
      </Button>
    </div>
  );
};

export default SidebarOptions;
