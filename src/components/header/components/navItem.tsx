import { Typography } from "@material-tailwind/react";
import { ReactElement } from "react";
import { NavButton } from "@/components/atoms/navButton/navButton";
export interface NavItemProps extends React.HTMLAttributes<HTMLLIElement> {
  icon?: ReactElement;
  label: string;
  to: string;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  to,
  className,
}) => {
  return (
    <NavButton to={to} className={className}>
      <Typography variant="small" as="li">
        {icon}
        {label}
      </Typography>
    </NavButton>
  );
};
