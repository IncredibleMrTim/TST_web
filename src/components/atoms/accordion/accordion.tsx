import { useState } from "react";

import {
  Accordion as TWAccordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

interface AccordionProps {
  heading: string | React.ReactNode;
  open?: boolean;
  children: React.ReactNode;
}

export const Accordion = (props: AccordionProps) => {
  const { heading, open, children } = props;
  const [accordionOpen, setAccordionOpen] = useState(open ?? false);

  return (
    <div>
      <TWAccordion className="overflow-y-hidden accordion" open={accordionOpen}>
        <AccordionHeader onClick={() => setAccordionOpen(!accordionOpen)}>
          <div className="w-full bg-tst-primary-slate-lighter rounded-t-md px-8 border-tst-primary-slate-light/5 border-t-2 border-x-2 accordionHeader">
            {typeof heading === "string" ? <h2>{heading}</h2> : heading}
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
