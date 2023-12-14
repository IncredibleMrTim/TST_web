import { ExperienceCard } from "./components/experienceCard";
import experienceData from "./data/experience.json";
import { profile } from "@/assets/svg";
import { useTranslation } from "react-i18next";
export const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-32 mt-10">
      <div>
        <div className="bg-tst-primary-slate-lighter h-36 mb-14 rounded-t-xl px-6 pt-6 flex col">
          <img src={profile} className="rounded-xl h-40 " />
          <div className="w-full text-justify px-10 h-full flex italic">
            {t("pages.experience.summary")}
          </div>
        </div>
      </div>
      <div className="px-24">
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
    </div>
  );
};
