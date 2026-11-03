import Button from "@/components/ui/Button";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <Button
      variant="outline"
      color="secondary"
      className="size-6 md:size-8 hover:bg-surface-secondary rounded-md border-surface-border"
    >
      <Search
        size={20}
        strokeWidth={1}
        className="shrink-0 size-fit xs:size-4 md:size-auto"
      />
    </Button>
  );
};

export default SearchBox;
