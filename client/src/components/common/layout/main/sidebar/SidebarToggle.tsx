import Button from "@/components/ui/Button";
import { useSidebarStore } from "@/stores";
import { PanelLeftOpen } from "lucide-react";

const SidebarToggle = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <Button
      variant="outline"
      color="secondary"
      className={`size-6 md:size-8 p-0 [&_svg]:size-4 md:[&_svg]:size-5 absolute top-2 md:top-4 z-999 hidden xs:inline-flex rounded-md group ${isOpen ? "left-11 md:left-52" : "left-2 md:left-4"}`}
      onClick={toggleSidebar}
    >
      <PanelLeftOpen
        strokeWidth={1}
        className={`${isOpen ? "rotate-180" : "rotate-0"} transition-default`}
      />
    </Button>
  );
};

export default SidebarToggle;
