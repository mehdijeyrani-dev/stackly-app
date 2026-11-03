const CalendarView = () => {
  return (
    <div className="w-full flex-1 flex flex-col gap-2 overflow-y-auto min-h-0">
      {/* <div className="w-full h-10 bg-amber-400"></div> */}
      <div className="flex-1 w-full bg-amber-700 grid grid-cols-7 grid-rows-[40px_repeat(5,minmax(0,1fr))] gap-2">
        {Array.from({ length: 42 }).map((_, i) => (
          <div key={i} className="bg-blue-600"></div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
