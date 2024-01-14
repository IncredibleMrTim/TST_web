import { Typography, Button } from "@material-tailwind/react";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
export interface NavItemProps extends React.HTMLAttributes<HTMLLIElement> {
  icon?: ReactElement;
  label: string;
  to: string;
}

export const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  const navigate = useNavigate();

  return (
    <Button
      placeholder={undefined}
      className={
        "flex items-center gap-1.5 py-2 px-5 !my-0 font-normal transition: hover:bg-tst-primary-gray-light/20 duration-300 rounded-sm border-tst-primary-white"
      }
      onClick={() => navigate(to)}
    >
      <Typography variant="small" as="li" placeholder={undefined}>
        {icon}
        {label}
      </Typography>
    </Button>
  );
};
