import * as HIcons from "@heroicons/react/24/outline";
import { ReactElement } from "react";

interface IconProps {
  icon: string;
  className?: string;
}

export const Icon = (props: IconProps): ReactElement => {
  const { icon, className } = props;
  const { ...icons } = HIcons;
  const DynamicIcon = icons[icon];

  return <DynamicIcon className={className} />;
};