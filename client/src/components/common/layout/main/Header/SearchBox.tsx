import Button from "@/components/ui/Button";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <>
      <div className="hidden lg:block w-full md:max-w-xs h-8 relative">
        <input
          type="text"
          className="focus:ring-0 focus:ring-offset-0 w-full h-full rounded-md  bg-surface-secondary border border-surface-border px-4 pl-8 text-neutral-500 focus:text-neutral-50 font-light text-sm/relaxed placeholder:text-neutral-500 focus:placeholder:text-neutral-50 peer"
          placeholder="Search"
        />
        <Search
          size={18}
          strokeWidth={1.5}
          className="text-neutral-500 peer-focus:text-neutral-50 absolute top-1/2 left-2 -translate-y-1/2"
        />
        <span className="font-mono text-[10px] bg-surface-border px-1 py-0.5 rounded-sm absolute top-1/2 -translate-y-1/2 right-1.5 opacity-0 peer-hover:opacity-100 transition-default">Shift + S</span>
      </div>
      <Button
        variant="outline"
        color="secondary"
        className="hidden xs:inline-flex lg:hidden p-0 [&_svg]:size-4 md:[&_svg]:size-5 size-6 md:size-8 rounded-md"
      >
        <Search strokeWidth={1} />
      </Button>
    </>
  );
};

export default SearchBox;
