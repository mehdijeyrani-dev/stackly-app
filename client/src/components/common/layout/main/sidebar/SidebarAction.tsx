import AddTaskButton from "./AddTaskButton";

const SidebarAction = () => {
  return (
    <div className="w-8 md:w-full h-fit bg-surface border border-surface-border rounded-lg flex flex-col items-center md:items-stretch gap-1 p-1 md:p-2">
      <AddTaskButton />
    </div>
  );
};

export default SidebarAction;
