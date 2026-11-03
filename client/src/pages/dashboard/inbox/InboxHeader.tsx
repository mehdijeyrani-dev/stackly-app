import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import {
  ArrowUpDown,
  CalendarDays,
  LayoutDashboard,
  LayoutList,
  SlidersHorizontal,
} from "lucide-react";
import type { ViewMode } from "./Inbox";
import type { SetStateAction } from "react";
import { SubTitle } from "@/components/common/layout/main";

interface IndexHeaderProps {
  view: ViewMode;
  setView: React.Dispatch<SetStateAction<ViewMode>>;
}

const InboxHeader = ({ view, setView }: IndexHeaderProps) => {
  return (
    <div className="w-full h-10 shrink-0 flex items-center justify-between pl-2">
      <div className="flex items-center gap-2">
        <SubTitle />
        <Divider className="h-6" />
        <div className="bg-surface flex items-center justify-center p-1 rounded-full outline outline-surface-border/60">
          <Button
            variant="ghost"
            color="secondary"
            onClick={() => setView("list")}
            className={`rounded-l-full px-2 border-none ${view === "list" ? "bg-neutral-700/40 text-neutral-50" : "bg-transparent text-neutral-500"}`}
          >
            <LayoutList size={14} strokeWidth={1} />
            <span className="text-sm/3.5 font-light">List</span>
          </Button>
          <Button
            variant="ghost"
            color="secondary"
            onClick={() => setView("board")}
            className={`rounded-none px-2 border-none ${view === "board" ? "bg-neutral-700/40 text-neutral-50" : "bg-transparent text-neutral-500"}`}
          >
            <LayoutDashboard size={14} strokeWidth={1} />
            <span className="text-sm/3.5 font-light">Board</span>
          </Button>
          <Button
            variant="ghost"
            color="secondary"
            onClick={() => setView("calendar")}
            className={`rounded-none rounded-r-full px-2 border-none ${view === "calendar" ? "bg-neutral-700/40 text-neutral-50" : "bg-transparent text-neutral-500"}`}
          >
            <CalendarDays size={14} strokeWidth={1} />
            <span className="text-sm/3.5 font-light">Calendar</span>
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="outline" color="secondary" className="py-2">
          <SlidersHorizontal size={14} />
          <span className="text-sm/3.5">Filter & Sort</span>
        </Button>
        <Button variant="outline" color="secondary" className="py-2">
          <ArrowUpDown size={14} />
          <span className="text-sm/3.5">Export / Import</span>
        </Button>
      </div>
    </div>
  );
};

export default InboxHeader;
