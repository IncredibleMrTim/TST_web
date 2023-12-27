import { useApi } from "@/hooks/useApi";
import lodash from "lodash";

export const Skills = () => {
  const { data } = useApi<TSkills[]>("http://localhost:9000/db/skills.json");
  const groupedData = lodash.groupBy(
    data?.sort((a, b) => a.type.localeCompare(b.type)),
    "type",
  );
  const renderGroup = (groupType: string) => {
    return (
      <div>
        <h2>{groupType}</h2>
        {groupedData[groupType].map((skill) => {
          return (
            <div>
              <p>{skill.title}</p>
              <p>{skill.description}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {Object.keys(groupedData).map((groupType) => {
        return renderGroup(groupType);
      })}
    </div>
  );
};
