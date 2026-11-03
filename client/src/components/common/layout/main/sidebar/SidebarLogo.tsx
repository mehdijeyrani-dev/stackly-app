import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-dark.svg";
import { useThemeStore } from "@/stores/themeStore";

const SidebarLogo = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <img
        src={theme === "dark" ? logoDark : logoLight}
        alt="Stackly App"
        className="w-6 h-6 md:w-8 md:h-8 object-cover rounded-md"
      />
      <h2 className="hidden md:block font-semibold text-base/6">Stackly</h2>
    </>
  );
};

export default SidebarLogo;
