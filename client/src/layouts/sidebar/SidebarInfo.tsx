import userImage from "@/assets/users/user.png";

const SidebarInfo = () => {
  return (
    <div className="w-10 h-10 md:h-fit md:w-full bg-surface shrink-0 p-1 md:p-2 flex items-center justify-center md:justify-start gap-2 border border-surface-border rounded-md group">
      <div className="w-8 aspect-square bg-neutral-700 shrink-0 rounded overflow-hidden grayscale-75 brightness-125 group-hover:grayscale-0 group-hover:brightness-100 transition-default">
        <img src={userImage} alt="" className="object-cover" />
      </div>
      <div className="flex-1 h-8 hidden md:flex flex-col gap-0.5 justify-center">
        <h3 className="leading-4 font-medium text-neutral-800 dark:text-neutral-50">Sara Lotfi</h3>
        <p className="text-xs leading-3 text-neutral-500 dark:text-neutral-400">
          sara.lotfi@gmail.com
        </p>
      </div>
    </div>
  );
};

export default SidebarInfo;
