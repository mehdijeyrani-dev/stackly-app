import userImage from "@/assets/users/user.png";
import Button from "@/components/ui/Button";
import { mockUser } from "@/mocks/user";
import { DoorOpen, LogIn, UserRoundPlus } from "lucide-react";
import { useState } from "react";

const SidebarInfo = () => {
  const [login, setLogin] = useState(mockUser.isAuthenticated);

  return login ? (
    <div className="w-8 md:w-full h-fit bg-surface border border-surface-border rounded-lg flex items-center gap-2 p-1 md:p-2">
      <div className="w-6 md:w-9 aspect-square bg-neutral-800 rounded-md overflow-hidden">
        <img
          src={mockUser.avatar ?? userImage}
          alt={mockUser.name}
          className="object-cover"
        />
      </div>
      <div className="hidden md:flex md:flex-col">
        <h3 className="text-sm/5">{mockUser.name}</h3>
        <p className="text-xs/4 font-light italic text-neutral-500">
          {mockUser.email}
        </p>
      </div>
      <Button
        variant="outline"
        color="danger"
        className="rounded-md ml-auto hidden md:inline-flex h-full px-1.5"
        onClick={() => setLogin(false)}
      >
        <DoorOpen size={20} strokeWidth={1.5} />
      </Button>
    </div>
  ) : (
    <div className="w-full hidden md:flex flex-col gap-2 p-2 bg-surface border border-surface-border rounded-lg">
      <p className="text-xs text-neutral-500 text-center">
        Sign in to sync your tasks
      </p>
      <div className="flex gap-1">
        <Button
          variant="flat"
          color="primary"
          onClick={() => setLogin(true)}
          className="flex-1 rounded-full py-1.5 gap-2 font-light text-xs/4"
          size="sm"
        >
          <LogIn size={16} strokeWidth={1.5} />
          Sign in
        </Button>
        <Button
          variant="outline"
          color="secondary"
          className="flex-1 rounded-full py-1.5 gap-2 font-light text-xs/4"
          size="sm"
        >
          <UserRoundPlus size={16} strokeWidth={1.5} />
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default SidebarInfo;
