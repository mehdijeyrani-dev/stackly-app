import { Link } from "react-router";
import logoImage from "../../../public/logo.png";

const SidebarLogo = () => {
  return (
    <Link to="/" className="w-full h-full flex items-center gap-2 shrink-0">
      <div className="w-full h-full md:w-8 md:h-8">
        <img src={logoImage} alt="" className="object-cover" />
      </div>
      <span className="hidden md:inline-block text-xl">Stackly.</span>
    </Link>
  );
};

export default SidebarLogo;
