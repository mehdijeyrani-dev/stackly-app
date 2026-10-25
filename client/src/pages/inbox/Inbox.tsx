import {
  ArrowUpDown,
  CalendarDays,
  LayoutDashboard,
  LayoutList,
  SlidersHorizontal,
} from "lucide-react";
import ListView from "./ListView";
import BoardView from "./BoardView";
import CalendarView from "./CalendarView";
import { useState } from "react";
import Divider from "@/components/ui/Divider";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import Button from "@/components/ui/Button";

type ViewMode = "list" | "board" | "calendar";

const views = {
  list: ListView,
  board: BoardView,
  calendar: CalendarView,
};

const Inbox = () => {
  const [view, setView] = useState<ViewMode>("list");
  useDocumentTitle("Inbox");

  const CurrentView = views[view];

  return (
    <div className="w-full flex-1 min-h-0 rounded-md flex flex-col p-1">
      <div className="w-full h-12 shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2">
            <span className="text-xl font-semibold">Inbox</span>
            <span className="min-w-6 h-6 px-1 flex items-center justify-center text-sm text-neutral-400 bg-neutral-800/50 rounded">
              53
            </span>
          </div>
          <Divider className="bg-neutral-800 h-8" />
          <div className="bg-surface flex items-center justify-center gap-0.5 p-0.5 rounded-lg outline outline-surface-border/60">
            <Button
              variant="ghost"
              color="secondary"
              size="sm"
              onClick={() => setView("list")}
              className={`${view === "list" ? "bg-neutral-700/20 text-neutral-50" : "bg-transparent text-neutral-700"}`}
            >
              <LayoutList size={16} strokeWidth={1.5} />
              <span>List</span>
            </Button>
            <Button
              variant="ghost"
              color="secondary"
              size="sm"
              onClick={() => setView("board")}
              className={`${view === "board" ? "bg-neutral-700/20 text-neutral-50" : "bg-transparent text-neutral-700"}`}
            >
              <LayoutDashboard size={16} strokeWidth={1.5} />
              <span>Board</span>
            </Button>
            <Button
              variant="ghost"
              color="secondary"
              size="sm"
              onClick={() => setView("calendar")}
              className={`${view === "calendar" ? "bg-neutral-700/20 text-neutral-50" : "bg-transparent text-neutral-700"}`}
            >
              <CalendarDays size={16} strokeWidth={1.5} />
              <span>Calendar</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" color="secondary">
            <SlidersHorizontal size={16} />
            <span className="text-sm">Filter & Sort</span>
          </Button>
          <Button variant="outline" color="secondary">
            <ArrowUpDown size={16} />
            <span className="text-sm">Export / Import</span>
          </Button>
        </div>
      </div>
      <CurrentView />
    </div>
  );
};

export default Inbox;
