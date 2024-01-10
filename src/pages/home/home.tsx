import { Carousel } from "@/components/atoms/carousel/carousel";
import { carouselLogos } from "@/components/atoms/carousel/carouselLogos";
import { bannerTst } from "@/assets/svg";
import { useTranslation } from "react-i18next";
import { LinkSection } from "./components/linkSection/linkSection";
import { PageWrapper } from "@/components/pageWrapper/pageWrapper";
export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="logo-carousel">
        <Carousel images={carouselLogos} />
      </div>
      <div className="w-full">
        <img src={bannerTst} className="w-full" />
      </div>
      <PageWrapper>
        <section className="summary">
          <h1>{t("pages.root.summary-title")}</h1>
          <p>{t("pages.root.summary-paragraph-1")}</p>
        </section>
        <section className="link-section">
          <LinkSection />
        </section>
      </PageWrapper>
    </div>
  );
};
