import { useState } from "react";

import {
  Accordion as TWAccordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

interface AccordionProps {
  groupType: string;
  groupData: TSkills[];
}

export const Accordion = (props: AccordionProps) => {
  const { groupType, groupData } = props;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <TWAccordion open={open} className="overflow-y-hidden">
        <AccordionHeader onClick={() => setOpen(!open)}>
          <h2>{groupType}</h2>
        </AccordionHeader>
        <AccordionBody>
          {groupData.map((skill) => {
            return (
              <div>
                <p>{skill.title}</p>
                <p>{skill.description}</p>
              </div>
            );
          })}
        </AccordionBody>
      </TWAccordion>
    </div>
  );
};
