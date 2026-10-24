import { Link } from "react-router";
import logoLightImage from "@/assets/logo-light.svg";
import logoDarkImage from "@/assets/logo-dark.svg";
import { useThemeStore } from "@/stores/themeStore";

const SidebarLogo = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <Link to="/" className="w-full h-full flex items-center gap-2 shrink-0">
      <div className="w-full h-full md:size-8 rounded-sm overflow-hidden">
        <img
          src={theme === "dark" ? logoDarkImage : logoLightImage}
          alt="Stackly App"
          className="w-full h-full object-cover"
        />
      </div>
      <span tabIndex={10} className="hidden md:inline-block text-lg text-neutral-800 dark:text-neutral-50">
        Stackly
      </span>
    </Link>
  );
};

export default SidebarLogo;
