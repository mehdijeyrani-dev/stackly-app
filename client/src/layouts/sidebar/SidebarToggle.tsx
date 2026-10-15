import Button from "@/components/ui/Button";
import { useSidebarStore } from "@/stores";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

const SidebarToggle = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <Button
      variant="ghost"
      color="secondary"
      size="icon"
      onClick={toggleSidebar}
      className={`shrink-0 flex items-center justify-center hover:bg-neutral-700 ${isOpen ? "ml-5 md:-ml-8" : "ml-7 md:ml-8"} transition-default`}
    >
      {isOpen ? (
        <PanelLeftClose size={20} strokeWidth={1.5} />
      ) : (
        <PanelLeftOpen size={20} strokeWidth={1.5} />
      )}
    </Button>
  );
};

export default SidebarToggle;
