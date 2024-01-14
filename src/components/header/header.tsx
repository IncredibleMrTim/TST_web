import { useState } from "react";
import { Navbar, Drawer } from "@material-tailwind/react";
import { NavItem } from "./components/navItem";
import tstLogo from "/tstLogo.svg";
import { useResponsive } from "@/hooks/useResponsive";
import { Icon } from "@timsmarttechnology/components";
import { useTranslation } from "react-i18next";
export const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const { isMobile } = useResponsive();
  const { t } = useTranslation();
  const navItems = [
    {
      label: t("nav.home"),
      to: "/",
    },
    {
      label: t("nav.experience"),
      to: "/experience",
    },
    {
      label: t("nav.technology"),
      to: "/technology",
    },
  ];

  const navList = () => {
    return (
      <ul
        className={`w-full mb-4 mt-2 flex flex-col lg:mb-0 md:mt-0 md:flex-row md:justify-center`}
        onClick={() => isMobile && setShowDrawer(false)}
      >
        {navItems.map((nav) => (
          <div key={nav.label}>
            <NavItem
              className="h-full flex items-center font-normal hover:bg-tst-primary-slate-lighter/40"
              label={nav.label}
              to={nav.to}
            />
          </div>
        ))}
      </ul>
    );
  };

  const renderDesktopNav = () => (
    <div className="container mx-auto flex items-center justify-between">
      <Navbar
        placeholder={undefined}
        fullWidth={true}
        className="flex py-0 leading-10 justify-around text-tst-primary-gray-dark border-[1px] border-tst-primary-gray-dark/10 bg-tst-primary-gray-light/10"
      >
        {navList()}
      </Navbar>
    </div>
  );

  const renderMobileNav = () => (
    <Drawer
      placeholder={undefined}
      open={showDrawer}
      onClose={() => setShowDrawer(false)}
      className={`absolute bg-gradient-to-t from-tst-primary-slate-lighter to-tst-primary-white z-20 drop-shadow-2xl`}
    >
      <div className="max-w-xl">
        <img src={tstLogo} className="xsm: px-10 pt-10 md:h-3/4" />
        <div className="container mx-auto flex justify-between">
          <Navbar
            placeholder={undefined}
            fullWidth={true}
            className="px-0 text-left flex justify-around text-tst-primary-gray-dark  border-tst-primary-gray-dark/10 bg-tst-primary-gray-light/10"
          >
            {navList()}
          </Navbar>
          <div className="fixed bottom-6 w-full border-t-[1px] border-tst-primary-gray">
            <div className="flex flex-col content-center p-4">
              <Icon
                icon="PhoneIcon"
                className="w-6 h-6 text-tst-primary-black mx-auto mb-2"
              />
              <p className="text-center text-tst-primary-black font-bold">
                (+44) 07824 153 228
              </p>
            </div>
            <div className="flex flex-col content-center">
              <a
                href="mailto:tim.smart@timsmarttechnology.co.uk"
                className="text-center text-1sm text-tst-primary-black font-bold"
              >
                <Icon
                  icon="EnvelopeIcon"
                  className="w-6 h-6 text-tst-primary-black mx-auto mb-2"
                />
                tim.smart@timsmarttechnology.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );

  return (
    <>
      {isMobile && (
        <div onClick={() => setShowDrawer(true)}>
          <Icon
            icon="Bars4Icon"
            className="w-16 h-16 absolute top-0 right-0 px-4 py-4 z-30"
          />
        </div>
      )}
      <div className="w-full h-1/5 flex-row">
        <div className="flex justify-center items-center h-full py-8 bg-gradient-to-b from-tst-primary-slate-lighter to-tst-primary-slate-lighter/15 to-tst-primary-gray-light/5 sm: pt-12 ">
          <img src={tstLogo} className="xsm: px-10 md:h-3/4" />
        </div>
        {!isMobile ? renderDesktopNav() : renderMobileNav()}
      </div>
    </>
  );
};
