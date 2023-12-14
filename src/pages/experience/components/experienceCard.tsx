import { useTranslation } from "react-i18next";
import moment from "moment";

export const ExperienceCard = ({ ...props }: TExperience) => {
  const { t } = useTranslation();

  const { title, description, fromDate, toDate, techStack } = props;

  return (
    <div>
      <h2 className="text">{title}</h2>
      <p className="italic mb-8">
        {t("pages.experience.dateFromTo", {
          from: moment(fromDate).isValid()
            ? moment(fromDate).format("MMM YY")
            : t("common.unknown"),
          to: moment(toDate).isValid()
            ? moment(toDate).format("MMM YY")
            : t("common.present"),
        })}
      </p>
      <p className="mb-8">{description}</p>
      <h3 className="text-left font-bold">{t("pages.experience.techStack")}</h3>
      <p>
        {Array.isArray(techStack) && techStack.toString().replace(/,/g, ", ")}
      </p>
    </div>
  );
};
