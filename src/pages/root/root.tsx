import { Carousel } from "@/components/carousel/carousel";
import { carouselLogos } from "@/components/carousel/carouselLogos";
import banner from "/tst-banner.svg";
import { useTranslation } from "react-i18next";

export const Root = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="py-5">
        <Carousel images={carouselLogos} />
      </div>
      <div className="w-full">
        <img src={banner} className="w-full" />
      </div>
      <div className="w-full px-48 mt-10 text-left">
        <h1>{t("root.summary-title")}</h1>
        <p>{t("root.summary-paragraph-1")}</p>
      </div>
    </div>
  );
};
