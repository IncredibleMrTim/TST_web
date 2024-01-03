import { Navbar } from "@material-tailwind/react";
import { NavItem } from "@/components/header/components/navItem";
import tstLogo from "/tstLogo.svg";

export const Header = () => {
  const navList = () => (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="Home" to="/" />
      <NavItem label="Experience & Qualifications" to="/experience" />
      <NavItem label="Skills & Technology" to="/skills" />
    </ul>
  );

  return (
    <div className="w-full h-1/5 flax flex-row">
      <div className="flex justify-center items-center h-full py-8 bg-gradient-to-b from-tst-primary-slate-lighter to-tst-primary-slate-lighter/15 to-tst-primary-gray-lighter ">
        <img src={tstLogo} className="h-3/4" />
      </div>

      <div className="container mx-auto flex items-center justify-between">
        <Navbar
          fullWidth={true}
          className="flex justify-around text-tst-primary-gray-dark border-[1px] border-tst-primary-gray-dark/10 bg-tst-primary-gray-light/10"
        >
          {navList()}
        </Navbar>
      </div>
    </div>
  );
};
