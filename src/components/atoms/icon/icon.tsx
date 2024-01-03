import * as HIconsOutline from "@heroicons/react/24/outline";
import * as HIconsSolid from "@heroicons/react/24/solid";
import { ReactElement } from "react";

interface IconProps {
  icon: string;
  variant?: "outline" | "solid";
  className?: string;
}

export const Icon = (props: IconProps): ReactElement => {
  const { icon, className, variant } = props;
  let { ...icons } = {};
  icons = variant === "outline" ? HIconsOutline : HIconsSolid;

  const DynamicIcon = icons[icon];

  // left in for reference
  // console.log(icons);

  return <DynamicIcon className={className} />;
};
