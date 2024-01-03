import { Carousel } from "@/components/carousel/carousel";
import { carouselLogos } from "@/components/carousel/carouselLogos";
import { bannerTst } from "@/assets/svg";
import { useTranslation } from "react-i18next";
import { LinkSection } from "./components/linkSection/linkSection";

export const Root = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-scroll h-screen">
      <div className="py-5">
        <Carousel images={carouselLogos} />
      </div>
      <div className="w-full">
        <img src={bannerTst} className="w-full" />
      </div>

      <section className="w-full px-52 mt-10 text-left">
        <h1>{t("pages.root.summary-title")}</h1>
        <p>{t("pages.root.summary-paragraph-1")}</p>
      </section>

      <LinkSection />
    </div>
  );
};
