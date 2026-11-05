import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { PlusCircle, UsersRound } from "lucide-react";
import { useState } from "react";

const AddTeamButton = () => {
  const [showAddTeamModal, setShowAddTeamModal] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        color="secondary"
        className={`md:justify-start rounded-md [&_svg]:size-4 md:[&_svg]:size-5 shrink-0 [&_svg]:shrink-0 size-6 md:size-auto md:w-full ${showAddTeamModal && "md:bg-surface-secondary"}`}
        onClick={() => setShowAddTeamModal(true)}
      >
        <UsersRound strokeWidth={1.5} />
        <span className="text-sm/5 hidden md:inline-block font-normal">
          Add team
        </span>
      </Button>

      <Modal
        isOpen={showAddTeamModal}
        onClose={() => setShowAddTeamModal(false)}
        className="p-4 bg-surface border border-surface-border rounded-lg"
      >
        <h2 className="text-lg font-semibold">Add team</h2>

        <p>Modal content goes here.</p>
      </Modal>
    </div>
  );
};

export default AddTeamButton;
