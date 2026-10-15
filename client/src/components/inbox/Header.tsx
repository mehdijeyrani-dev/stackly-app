import { useSidebarStore } from "@/stores";

const Header = () => {
  const { isOpen } = useSidebarStore();
  
  return (
    <header
      className={`h-10 md:h-12 w-full bg-neutral-800 border border-neutral-700 rounded-md flex items-center justify-between ${isOpen ? "px-2 sm:pl-10 md:pl-2" : "pl-2 sm:pl-10 pr-2 md:pl-10"} transition-default shrink-0`}
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="size-7 bg-neutral-700 rounded"></div>
          <div className="size-7 bg-neutral-700 rounded"></div>
          <div className="size-7 bg-neutral-700 rounded"></div>
        </div>
        <div className="w-px h-7 bg-neutral-700"></div>
        <div className="">
          <div className="w-54 h-7 bg-neutral-700"></div>
        </div>
      </div>
      <div className="w-40 h-7 bg-neutral-700"></div>
    </header>
  );
};

export default Header;
