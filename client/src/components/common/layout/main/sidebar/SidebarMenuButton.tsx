import Button from "@/components/ui/Button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

interface SidebarMenuButtonProps {
  portalContainer: HTMLDivElement | null;
}

const SidebarMenuButton = ({ portalContainer }: SidebarMenuButtonProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        color="secondary"
        iconSize="md"
        className="rounded-md hidden xs:inline-block sm:hidden"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <Menu strokeWidth={1} />
      </Button>

      {portalContainer &&
        createPortal(
          <div
            className={`
              fixed inset-0 top-12 z-50
              bg-black/40 backdrop-blur-sm
              transition-opacity duration-200 ease-in-out
              ${showMenu ? "opacity-100" : "opacity-0 pointer-events-none"}
              md:hidden
            `}
            onClick={() => setShowMenu(false)}
          >
            <div
              className={`
                absolute top-0 bottom-0 left-0
                w-full max-w-64 m-1 mt-0 rounded-lg
                bg-surface border border-surface-border p-1
                flex flex-col gap-1 overflow-y-auto
                transition-transform duration-200 ease-in-out 
                ${showMenu ? "translate-x-0" : "-translate-x-full"}
              `}
              onClick={(event) => event.stopPropagation()}
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  className="h-20 w-full shrink-0 bg-neutral-700/5 last:bg-green-500"
                  key={i}
                />
              ))}
            </div>
          </div>,
          portalContainer,
        )}
    </>
  );
};

export default SidebarMenuButton;