import { useApi } from "@/hooks/useApi";
import lodash from "lodash";
import { Accordion } from "@/components/atoms/accordion/accordion";
import { PageWrapper } from "@/components/pageWrapper/pageWrapper";
import { useTranslation } from "react-i18next";
import { skills } from "@/assets/svg";
export const Skills = () => {
  const { data } = useApi<TSkills[]>(
    `${import.meta.env.VITE_BASE_URL}/db/experience.json`,
  );
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
    <div>
      <div className="h-[15em] flex flex-col content-evenly overflow-y-hidden opacity-80 w-full">
        <img src={skills} className="w-full object-cover" />
      </div>
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
                      <div className="flex flex-col">
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
    </div>
  );
};
