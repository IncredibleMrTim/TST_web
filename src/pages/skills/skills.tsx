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

  return (
    <PageWrapper>
      {Object.keys(groupedData).map((groupType, i) => {
        return (
          <div className="mb-5">
            <Accordion
              title={t(`pages.skills.type.${groupType}`)}
              open={i === 0}
            >
              {groupedData[groupType]
                .sort((a, b) => a.type.localeCompare(b.type))
                .map((skill) => {
                  return (
                    <div>
                      <p>{skill.title}</p>
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
