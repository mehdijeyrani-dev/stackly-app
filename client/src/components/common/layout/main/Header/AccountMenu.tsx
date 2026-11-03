import userImage from "@/assets/users/user.png";
import Button from "@/components/ui/Button";

const AccountMenu = () => {
  return (
    <Button
      variant="outline"
      className="w-6 sm:w-fit h-6 md:h-8 rounded-full p-0 sm:p-1 sm:pr-1.5 md:pr-2"
    >
      <div className="size-6 sm:size-4 md:size-6 rounded-full overflow-hidden shrink-0">
        <img src={userImage} alt="Sara Keshtkar" className="object-cover" />
      </div>
      <span className="text-xs md:text-sm shrink-0 font-normal hidden sm:inline-block">
        Sara Keshtkar
      </span>
    </Button>
  );
};

export default AccountMenu;
