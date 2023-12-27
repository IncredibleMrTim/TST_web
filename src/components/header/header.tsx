import { Navbar } from "@material-tailwind/react";
import { NavItem } from "@/components/header/components/navItem";
import tstLogo from "/tstLogo.svg";

export const Header = () => {
  const navList = () => (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="Home" to="/" />
      <NavItem label="Experience" to="/experience" />
      <NavItem label="Qualifications" to="/qualifications" />
      <NavItem label="Skills" to="/skills" />
    </ul>
  );

  return (
    <div className="w-full h-1/5 flax flex-row">
      <div className="flex justify-center items-center h-full py-5">
        <img src={tstLogo} className="h-3/4" />
      </div>
      <div className="container mx-auto flex items-center justify-between">
        <Navbar
          fullWidth={true}
          className="flex justify-center bg-tst-primary-slate text-tst-primary-white"
        >
          {navList()}
        </Navbar>
      </div>
    </div>
  );
};
