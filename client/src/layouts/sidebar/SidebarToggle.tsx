import Button from "@/components/ui/Button";
import { useSidebarStore } from "@/stores";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

const SidebarToggle = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <Button
      variant="outline"
      color="secondary"
      iconSize="md"
      onClick={toggleSidebar}
      className={`rounded-md ${isOpen ? "ml-3.5 md:-ml-8" : "ml-6.5 md:ml-5.5"}`}
    >
      {isOpen ? (
        <PanelLeftClose size={20} strokeWidth={1} />
      ) : (
        <PanelLeftOpen size={20} strokeWidth={1} />
      )}
    </Button>
  );
};

export default SidebarToggle;
