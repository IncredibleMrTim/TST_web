import { experience, skills } from "@/assets/svg";
import { LinkCard } from "./linkCard";
import { useTranslation } from "react-i18next";

export const LinkSection = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="xsm:px-4 xsm:flex-col md:flex-row md:px-24 w-full mt-10 flex justify-between gap-8">
        <LinkCard
          title={t("linkSection.experience-title")}
          description={t("linkSection.experience-description")}
          link="/experience"
          image={experience}
        />
        <LinkCard
          title={t("linkSection.skills-title")}
          description={t("linkSection.skills-description")}
          link="/technology"
          image={skills}
        />
      </div>
    </div>
  );
};
