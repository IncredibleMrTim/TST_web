import { useState } from "react";

import {
  Accordion as TWAccordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

interface AccordionProps {
  title: string | React.ReactNode;
  open?: boolean;
  children: React.ReactNode;
}

export const Accordion = (props: AccordionProps) => {
  const { title, open, children } = props;

  const [accordionOpen, setAccordionOpen] = useState(open ?? false);

  return (
    <div>
      <TWAccordion className="overflow-y-hidden root" open={accordionOpen}>
        <AccordionHeader
          className={`AccordionHeader`}
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          {typeof title === "string" ? <h2>{title}</h2> : title}
        </AccordionHeader>
        <AccordionBody>{children}</AccordionBody>
      </TWAccordion>
    </div>
  );
};
