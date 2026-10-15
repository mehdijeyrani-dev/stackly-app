import Header from "@/components/inbox/Header";
import { CalendarDays, Columns3, LayoutList } from "lucide-react";
import ListView from "./ListView";
import BoardView from "./BoardView";
import CalendarView from "./CalendarView";
import { useState } from "react";

type ViewMode = "list" | "board" | "calendar";

const views = {
  list: ListView,
  board: BoardView,
  calendar: CalendarView,
};

const Inbox = () => {
  const [view, setView] = useState<ViewMode>("list");

  const CurrentView = views[view];

  return (
    <>
      {/* header */}
      <Header />

      {/* content */}
      <div className="w-full bg-neutral-800 flex-1 rounded-md flex flex-col">
        <div className="w-full h-12 bg-neutral-900 shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">Inbox</span>
              <span className="size-6 flex items-center justify-center text-sm bg-neutral-800 rounded">
                5
              </span>
            </div>
            <div className="w-px h-7 bg-neutral-700"></div>
            <div className="bg-neutral-800 flex items-center justify-center gap-1 p-1 rounded-md outline outline-neutral-700">
              <button
                onClick={() => setView("list")}
                className={`w-fit h-6 shrink-0 rounded flex items-center gap-1 px-2 font-semibold shadow-xl text-sm ${view === "list" ? "bg-neutral-700 text-neutral-50" : "bg-transparent text-neutral-400"}`}
              >
                <LayoutList size={14} />
                <span>List</span>
              </button>
              <button
                onClick={() => setView("board")}
                className={`w-fit h-6 shrink-0 rounded flex items-center gap-1 px-2 font-semibold shadow-xl text-sm ${view === "board" ? "bg-neutral-700 text-neutral-50" : "bg-transparent text-neutral-400"}`}
              >
                <Columns3 size={14} />
                <span>Board</span>
              </button>
              <button
                onClick={() => setView("calendar")}
                className={`w-fit h-6 shrink-0 rounded flex items-center gap-1 px-2 font-semibold shadow-xl text-sm ${view === "calendar" ? "bg-neutral-700 text-neutral-50" : "bg-transparent text-neutral-400"}`}
              >
                <CalendarDays size={14} />
                <span>Calendar</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-24 h-7 bg-neutral-800"></button>
            <button className="w-24 h-7 bg-neutral-800"></button>
          </div>
        </div>
        <div className="w-full bg-neutral-900 flex-1">
          <CurrentView />
        </div>
      </div>
    </>
  );
};

export default Inbox;
