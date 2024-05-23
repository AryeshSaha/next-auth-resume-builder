import Image from "next/image";
import { Logo } from "../../../public/assets";
const Header = () => {
  return (
    <>
      <header className="sticky top-0 w-full p-4 text-center bg-zinc-50 text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Expressume Logo" width={50} height={50} />
          <span className="text-lg font-bold">Expressume</span>
        </div>
      </header>
    </>
  );
};

export default Header;
