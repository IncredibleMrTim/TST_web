import { useState } from "react";
import { Icon } from "@/components/atoms/icon/icon";

import {
  Accordion as TWAccordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

interface AccordionProps {
  open?: boolean;
  title: string;
  icon?: string;
  children: React.ReactNode;
}

export const Accordion = (props: AccordionProps) => {
  const { open, children, title, icon } = props;
  const [accordionOpen, setAccordionOpen] = useState(open ?? false);

  const renderHeading = () => {
    return (
      <div className="flex justify-between mx-auto ">
        <h3 className="text-tst-primary-black/80 flex w-full gap-5">
          {icon && (
            <Icon
              icon={icon}
              className={`w-7 h-70 ${
                accordionOpen
                  ? `xsm:text-tst-primary-gray-dark/90 md:text-tst-primary-white/90`
                  : `xsm:text-tst-primary-gray-dark/50 md:text-tst-primary-white/60`
              }`}
            />
          )}
          <div
            className={`${
              accordionOpen
                ? `xsm:text-tst-primary-gray-dark/90 md:md:text-tst-primary-white/90`
                : `xsm:text-tst-primary-gray-dark/50 md:md:text-tst-primary-white/60`
            } duration-30`}
          >
            {title}
          </div>
        </h3>
        <Icon
          className="text-tst-primary-white/60 w-6 h-70"
          icon={`${accordionOpen ? `ChevronUpIcon` : `ChevronDownIcon`}`}
        />
      </div>
    );
  };

  return (
    <div>
      <TWAccordion className="overflow-y-hidden accordion" open={accordionOpen}>
        <AccordionHeader
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="py-2"
        >
          <div
            className={`${
              accordionOpen
                ? `transition: rounded-b-none xsm:bg-tst-primary-slate-lighter md:bg-tst-primary-red-dark/80 !text-tst-primary-gray duration-300`
                : `transition: rounded-b-md xsm:bg-tst-primary-slate-lighter md:bg-tst-primary-red-dark/60 !text-tst-primary-gray duration-300`
            } w-full  rounded-t-md px-8 border-tst-primary-red/10 border-t-[1px] border-x-[1px] accordionHeader`}
          >
            {renderHeading()}
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="bg-tst-primary-slate-lighter/10 px-8 rounded-b-sm accordionBody">
            {children}
          </div>
        </AccordionBody>
      </TWAccordion>
    </div>
  );
};
