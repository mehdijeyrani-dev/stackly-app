import { useSidebarStore } from "@/stores";

const SidebarToggle = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <button
      className={`absolute top-2 md:top-3 z-999 w-6 h-6 md:w-8 md:h-8 shrink-0 hidden xs:flex items-center justify-center bg-transparent border border-surface-border hover:bg-surface-secondary text-neutral-500 hover:text-neutral-50 rounded-md ${isOpen ? "left-11 md:left-54" : "left-2 md:left-3"} transition-default [&_svg]:size-4 md:[&_svg]:size-5`}
      onClick={toggleSidebar}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-200`}
      >
        <path
          d="M12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5Z"
          strokeWidth="1"
          strokeLinejoin="round"
          stroke="currentColor"
        />
        <path
          d="M10 8L13.3322 11.0203C14.2226 11.8273 14.2226 12.1727 13.3322 12.9797L10 16"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
      </svg>
    </button>
  );
};

export default SidebarToggle;
