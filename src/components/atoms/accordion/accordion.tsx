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
  children: React.ReactNode;
}

export const Accordion = (props: AccordionProps) => {
  const { open, children, title } = props;
  const [accordionOpen, setAccordionOpen] = useState(open ?? false);

  const renderHeading = () => {
    return (
      <div className="flex justify-between mx-auto ">
        <h3 className="text-tst-primary-black/80">{title}</h3>
        <Icon
          className="text-tst-primary-gray-dark w-6 h-70"
          icon={`${accordionOpen ? `ChevronDownIcon` : `ChevronUpIcon`}`}
        />
      </div>
    );
  };

  return (
    <div>
      <TWAccordion className="overflow-y-hidden accordion" open={accordionOpen}>
        <AccordionHeader onClick={() => setAccordionOpen(!accordionOpen)}>
          <div className="w-full bg-tst-primary-slate-lighter rounded-t-md px-8 border-tst-primary-slate-light/5 border-t-2 border-x-2 accordionHeader">
            {renderHeading()}
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="bg-tst-primary-slate-lighter/10 p-8 rounded-b-sm accordionBody">
            {children}
          </div>
        </AccordionBody>
      </TWAccordion>
    </div>
  );
};
