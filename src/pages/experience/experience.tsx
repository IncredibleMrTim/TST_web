import { ExperienceCard } from "./components/experienceCard";
import { PageWrapper } from "@/components/pageWrapper/pageWrapper";

import { profile } from "@/assets/svg";
import { useTranslation } from "react-i18next";
import { useApi } from "@/hooks/useApi";
import { Accordion } from "@/components/atoms/accordion/accordion";
import { useResponsive } from "@/hooks/useResponsive";

export const Experience = () => {
  const { t } = useTranslation();
  const { data } = useApi<TExperience[]>(
    `${import.meta.env.VITE_BASE_URL}/db/experience.json`,
  );

  const { isMobile } = useResponsive();

  const renderExperienceCard = (experience: TExperience) => (
    <ExperienceCard
      company={experience.company}
      jobType={experience.jobType}
      title={experience.title}
      fromDate={experience.fromDate}
      toDate={experience.toDate}
      description={experience.description}
      techStack={experience.techStack}
    />
  );

  return (
    <PageWrapper>
      <h1>Experience</h1>
      <div>
        <div className="bg-tst-primary-red-dark/80 h-36 mb-14 rounded-t-xl px-6 pt-6 flex col">
          <img src={profile} className="rounded-xl h-40" />
          <p className="w-full text-justify px-10 h-full flex italic  text-tst-primary-white/90 !text-2sm">
            {isMobile
              ? t("pages.experience.summaryMobile")
              : t("pages.experience.summary")}
          </p>
        </div>
      </div>
      <div className="xsm:px-5 md:px-24">
        {data?.map((experience: TExperience, i) => {
          return (
            <>
              {isMobile ? (
                <Accordion
                  title={`${experience.title} (${experience.company})`}
                  open={i === 0}
                >
                  <div
                    key={experience.title}
                    className={`${
                      data.length - 1 > i &&
                      "border-b-2 border-tst-primary-gray-dark/10 pb-5"
                    }`}
                  >
                    {renderExperienceCard(experience)}
                  </div>
                </Accordion>
              ) : (
                renderExperienceCard(experience)
              )}
            </>
          );
        })}
      </div>
    </PageWrapper>
  );
};
