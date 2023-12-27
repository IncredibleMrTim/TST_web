import { useApi } from "@/hooks/useApi";
import lodash from "lodash";
import { Accordion } from "@/components/accordion/accordion";
export const Skills = () => {
  const { data } = useApi<TSkills[]>("http://localhost:9000/db/skills.json");
  const groupedData = lodash.groupBy(
    data?.sort((a, b) => a.type.localeCompare(b.type)),
    "type",
  );

  return (
    <div>
      {Object.keys(groupedData).map((groupType) => {
        return (
          <Accordion groupType={groupType} groupData={groupedData[groupType]} />
        );
      })}
    </div>
  );
};
