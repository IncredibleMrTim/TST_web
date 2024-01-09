import { useState } from "react";
import { Navbar, Drawer } from "@material-tailwind/react";
import { NavItem } from "./components/navItem";
import tstLogo from "/tstLogo.svg";
import { useResponsive } from "@/hooks/useResponsive";
import { Icon } from "@/components/atoms/icon/icon";
export const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const { isMobile } = useResponsive();

  const navList = () => {
    return (
      <ul
        className={`mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8`}
      >
        <NavItem label="Home" to="/" />
        <NavItem label="Experience & Qualifications" to="/experience" />
        <NavItem label="Skills & Technology" to="/skills" />
      </ul>
    );
  };

  return (
    <>
      {isMobile && (
        <div>
          <div onClick={() => setShowDrawer(!showDrawer)}>
            <Icon
              icon="Bars4Icon"
              className="w-14 h-14 absolute top-0 right-0 px-4 py-4 z-30"
            />
          </div>

          <Drawer
            open={showDrawer}
            className="absolute bg-tst-primary-red z-20  h-full"
          >
            <div className="max-w-xl">
              <h2>Menu</h2>
              Test
            </div>
          </Drawer>
        </div>
      )}
      <div className="w-full h-1/5 flex-row">
        <div className="flex justify-center items-center h-full py-8 bg-gradient-to-b from-tst-primary-slate-lighter to-tst-primary-slate-lighter/15 to-tst-primary-gray-lighter sm: pt-12 ">
          <img src={tstLogo} className="h-3/4" />
        </div>
        {!isMobile && (
          <>
            <div className="container mx-auto flex items-center justify-between">
              <Navbar
                fullWidth={true}
                className="flex justify-around text-tst-primary-gray-dark border-[1px] border-tst-primary-gray-dark/10 bg-tst-primary-gray-light/10"
              >
                {navList()}
              </Navbar>
            </div>
          </>
        )}
      </div>
    </>
  );
};
