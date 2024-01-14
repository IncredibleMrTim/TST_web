import { ExperienceCard } from "./components/experienceCard";
import { PageWrapper } from "@/components/pageWrapper/pageWrapper";

import { profile } from "@/assets/svg";
import { useTranslation } from "react-i18next";
import { useApi } from "@/hooks/useApi";

import { useResponsive } from "@/hooks/useResponsive";
import { Accordion } from "@timsmarttechnology/components";
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
        <div className="experience-heading">
          <img src={profile} className="rounded-xl h-40" />
          <p>
            {isMobile
              ? t("pages.experience.summaryMobile")
              : t("pages.experience.summary")}
          </p>
        </div>
      </div>
      <div className="experience-body">
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
                      data.length - 1 > i && "experience-accordion-mobile"
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
