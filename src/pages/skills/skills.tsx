import { useApi } from "@/hooks/useApi";
import lodash from "lodash";
import { Accordion } from "@/components/atoms/accordion/accordion";
import { PageWrapper } from "@/components/pageWrapper/pageWrapper";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { data } = useApi<TSkills[]>("http://localhost:9000/db/skills.json");
  const { t } = useTranslation();

  // group data by type
  const groupedData = lodash.groupBy(data, "type");

  const groupIcons = [
    {
      type: "dev",
      icon: "CogIcon",
    },
    {
      type: "soft",
      icon: "UserGroupIcon",
    },
    {
      type: "design",
      icon: "LightBulbIcon",
    },
    {
      type: "planning",
      icon: "CloudIcon",
    },
  ];

  return (
    <PageWrapper>
      {Object.keys(groupedData).map((groupType, i) => {
        return (
          <div className="mb-5">
            <Accordion
              title={t(`pages.skills.type.${groupType}`)}
              icon={groupIcons.find((icon) => icon.type === groupType)?.icon}
              open={i === 0}
            >
              {groupedData[groupType]
                .sort((a, b) => a.type.localeCompare(b.type))
                .map((skill) => {
                  return (
                    <div className="flex flex-col !left">
                      <h4>{skill.title}</h4>
                      <p>{skill.description}</p>
                    </div>
                  );
                })}
            </Accordion>
          </div>
        );
      })}
    </PageWrapper>
  );
};
