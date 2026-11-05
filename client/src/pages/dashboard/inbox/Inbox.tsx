import { useState } from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import InboxHeader from "./InboxHeader";
import ListView from "./ListView";
import BoardView from "./BoardView";
import CalendarView from "./CalendarView";

export type ViewMode = "list" | "board" | "calendar";

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
    <div className="flex-1 flex flex-col gap-1 min-h-0">
      <InboxHeader view={view} setView={setView} />
      <div className="w-full flex-1 flex flex-col gap-2 bg-blue-600 min-h-0 overflow-y-auto">
        <CurrentView />
      </div>
    </div>
  );
};

export default Inbox;
