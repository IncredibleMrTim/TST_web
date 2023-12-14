import { ExperienceCard } from "./components/experienceCard";
import experienceData from "./data/experience.json";

export const Experience = () => {
  return (
    <div className="px-52 mt-10">
      {experienceData.map((experience: TExperience) => {
        return (
          <div key={experience.title}>
            <ExperienceCard
              title={experience.title}
              fromDate={experience.fromDate}
              toDate={experience.toDate}
              description={experience.description}
              techStack={experience.techStack}
            />
          </div>
        );
      })}
    </div>
  );
};
