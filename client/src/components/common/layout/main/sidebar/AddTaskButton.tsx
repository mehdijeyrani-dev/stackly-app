import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

const AddTaskButton = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className={`md:justify-start rounded-md [&_svg]:size-4 md:[&_svg]:size-5 shrink-0 [&_svg]:shrink-0 size-6 md:size-auto md:w-full md:border-transparent md:bg-blue-600 md:hover:bg-blue-700 md:text-white`}
        onClick={() => setShowAddTaskModal(true)}
      >
        <PlusCircle strokeWidth={2} />
        <span className="text-sm/5 hidden md:inline-block font-semibold">
          Add task
        </span>
      </Button>

      <Modal
        isOpen={showAddTaskModal}
        onClose={() => setShowAddTaskModal(false)}
        className="p-4 bg-surface border border-surface-border rounded-lg"
      >
        <h2 className="text-lg font-semibold">Add task</h2>

        <p>Modal content goes here.</p>
      </Modal>
    </>
  );
};

export default AddTaskButton;
