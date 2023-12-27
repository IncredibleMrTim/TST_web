import { useApi } from "@/hooks/useApi";
import lodash from "lodash";
import { Accordion } from "@/components/atoms/accordion/accordion";
import { PageWrapper } from "@/components/pageWrapper/pageWrapper";
export const Skills = () => {
  const { data } = useApi<TSkills[]>("http://localhost:9000/db/skills.json");

  // group and sort data by type
  const groupedData = lodash.groupBy(
    data?.sort((a, b) => a.type.localeCompare(b.type)),
    "type",
  );

  const renderTitle = (title: string) => (
    <div className="w-full bg-tst-primary-slate-lighter rounded-t-lg mb-2">
      <h2>{title}</h2>
    </div>
  );

  return (
    <PageWrapper>
      {Object.keys(groupedData).map((groupType, i) => {
        return (
          <div className="mb-5">
            <Accordion title={renderTitle(groupType)} open={i === 0}>
              {groupedData[groupType].map((skill) => {
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
