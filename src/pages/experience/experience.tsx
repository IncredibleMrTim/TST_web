import { ExperienceCard } from "./components/experienceCard";
import { PageWrapper } from "@/components/pageWrapper/pageWrapper";

import { profile } from "@/assets/svg";
import { useTranslation } from "react-i18next";
import { useApi } from "@/hooks/useApi";

export const Experience = () => {
  const { t } = useTranslation();
  const { data } = useApi<TExperience[]>(
    "http://localhost:9000/db/experience.json",
  );

  return (
    <PageWrapper>
      <div>
        <div className="bg-tst-primary-slate-lighter h-36 mb-14 rounded-t-xl px-6 pt-6 flex col">
          <img src={profile} className="rounded-xl h-40 " />
          <div className="w-full text-justify px-10 h-full flex italic">
            {t("pages.experience.summary")}
          </div>
        </div>
      </div>
      <div className="px-24">
        {data?.map((experience: TExperience, i) => {
          return (
            <div
              key={experience.title}
              className={`${
                data.length - 1 > i &&
                "border-b-2 border-tst-primary-gray-dark/10 pb-5"
              }`}
            >
              <ExperienceCard
                company={experience.company}
                jobType={experience.jobType}
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
    </PageWrapper>
  );
};
