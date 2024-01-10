import type { CarouselImage } from "./carousel";
import {
  logoCoyote,
  logoLn,
  logoMdrx,
  logoOns,
  logoProagrica,
  logoSantander,
  logoWebree,
} from "@/assets/svg";

export const carouselLogos: CarouselImage[] = [
  {
    alt: "Santander Auto Logo",
    path: logoSantander,
  },
  {
    alt: "Coyote Software Logo",
    path: logoCoyote,
  },
  {
    alt: "MDRX Tech Logo",
    path: logoMdrx,
  },
  {
    alt: "Office of National Statistics Logo",
    path: logoOns,
  },
  {
    alt: "LexisNexis Risk Solutions Logo",
    path: logoLn,
  },
  {
    alt: "Proagrica Logo",
    path: logoProagrica,
  },
  {
    alt: "Webree Logo",
    path: logoWebree,
  },
];
