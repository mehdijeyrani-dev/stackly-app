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
    <div className="w-full flex-1 min-h-0 rounded-md flex flex-col">
      <div className="w-full h-12 shrink-0 flex items-center justify-between">
        <div className="flex items-start gap-2">
          <div className="inline-flex items-baseline gap-2">
            <span className="text-xl font-semibold">Inbox</span>
            <span className="min-w-6 h-6 px-1 flex items-center justify-center text-sm text-neutral-800 dark:text-neutral-50 bg-neutral-300 dark:bg-neutral-800 rounded">
              53522
            </span>
          </div>
          <Divider className="bg-neutral-400 dark:bg-neutral-700 h-8" />
          <div className="bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center gap-1 p-1 rounded-md outline outline-neutral-300 dark:outline-neutral-700">
            <button
              onClick={() => setView("list")}
              className={`w-fit h-6 shrink-0 rounded flex items-center gap-1 px-2 text-sm ${view === "list" ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-50" : "bg-transparent text-neutral-400"}`}
            >
              <LayoutList size={16} strokeWidth={1.5} />
              <span>List</span>
            </button>
            <button
              onClick={() => setView("board")}
              className={`w-fit h-6 shrink-0 rounded flex items-center gap-1 px-2 text-sm ${view === "board" ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-50" : "bg-transparent text-neutral-400"}`}
            >
              <LayoutDashboard size={16} strokeWidth={1.5} />
              <span>Board</span>
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`w-fit h-6 shrink-0 rounded flex items-center gap-1 px-2 text-sm ${view === "calendar" ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-50" : "bg-transparent text-neutral-400"}`}
            >
              <CalendarDays size={16} strokeWidth={1.5} />
              <span>Calendar</span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-8 flex items-center gap-2 px-2 rounded-md bg-neutral-300 hover:bg-neutral-400/50 text-neutral-600 hover:text-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-50 transition-default">
            <SlidersHorizontal size={16} />
            <span className="text-sm">Filter & Sort</span>
          </button>
          <button className="h-8 flex items-center gap-2 px-2 rounded-md bg-neutral-300 hover:bg-neutral-400/50 text-neutral-600 hover:text-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-50 transition-default">
            <ArrowUpDown size={16} />
            <span className="text-sm">Export / Import</span>
          </button>
        </div>
      </div>
      <CurrentView />
    </div>
  );
};

export default Inbox;
