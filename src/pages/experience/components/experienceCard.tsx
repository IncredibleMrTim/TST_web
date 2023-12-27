import { useTranslation } from "react-i18next";
import moment from "moment";

export const ExperienceCard = ({ ...props }: TExperience) => {
  const { t } = useTranslation();

  const { title, description, fromDate, toDate, techStack, company, jobType } =
    props;

  return (
    <div>
      <h2 className="text-left pb-0">
        {title} - {company}
      </h2>

      <p className="italic mb-8 !text-sm">
        {t("pages.experience.dateFromTo", {
          from: moment(fromDate).isValid()
            ? moment(fromDate).format("MMM YY")
            : t("common.unknown"),
          to: moment(toDate).isValid()
            ? moment(toDate).format("MMM YY")
            : t("common.present"),
        })}
        {jobType && <span> ({jobType})</span>}
      </p>
      <p className="mb-8">{description}</p>
      <h3 className="text-left pb-0">{t("pages.experience.techStack")}</h3>
      <p className="!text-sm">
        {Array.isArray(techStack) && techStack.toString().replace(/,/g, ", ")}
      </p>
    </div>
  );
};
