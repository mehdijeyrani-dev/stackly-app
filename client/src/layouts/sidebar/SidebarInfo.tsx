import userImage from "@/assets/users/user.png";
import Button from "@/components/ui/Button";
import { DoorOpen } from "lucide-react";

const SidebarInfo = () => {
  return (
    <div className="w-8 md:w-full h-fit bg-surface border border-surface-border rounded-lg flex items-center gap-2 p-1 md:p-2">
      <div className="w-6 md:w-9 aspect-square bg-neutral-800 rounded-md overflow-hidden">
        <img src={userImage} alt="" className="object-cover" />
      </div>
      <div className="hidden md:flex md:flex-col">
        <h3 className="text-sm/5">Sara Keshtkar</h3>
        <p className="text-xs/4 font-light italic text-neutral-500">
          mehdijeyrani@gmail.com
        </p>
      </div>
      <Button variant="outline" color="danger" className="rounded-md ml-auto hidden md:inline-flex h-full px-1.5">
        <DoorOpen size={20} strokeWidth={1.5}/>
      </Button>
    </div>
  );
};

export default SidebarInfo;
