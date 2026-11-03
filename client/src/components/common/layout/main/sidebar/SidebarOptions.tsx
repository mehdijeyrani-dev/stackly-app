import Button from "@/components/ui/Button";
import { CircleQuestionMark, Settings } from "lucide-react";

const SidebarOptions = () => {
  return (
    <div className="w-8 md:w-full h-fit bg-surface border border-surface-border rounded-lg flex flex-col items-center md:items-stretch gap-1 p-1 md:p-2">
      <Button
        variant="ghost"
        color="secondary"
        className="md:justify-start rounded-md [&_svg]:size-4 md:[&_svg]:size-5 shrink-0 [&_svg]:shrink-0 size-6 md:size-auto"
      >
        <Settings strokeWidth={1.5} />
        <span className="text-sm/5 hidden md:inline-block font-normal">
          Settings
        </span>
      </Button>
      <Button
        variant="ghost"
        color="secondary"
        className="md:justify-start rounded-md [&_svg]:size-4 md:[&_svg]:size-5 shrink-0 [&_svg]:shrink-0 size-6 md:size-auto"
      >
        <CircleQuestionMark strokeWidth={1.5} />
        <span className="text-sm/5 hidden md:inline-block font-normal">
          Help Center
        </span>
      </Button>
    </div>
  );
};

export default SidebarOptions;
