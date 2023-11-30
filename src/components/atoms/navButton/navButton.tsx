import { Button, type ButtonProps } from "@material-tailwind/react";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
interface NavButtonProps extends ButtonProps {
  to: string;
  children: ReactElement | string;
}

export const NavButton = ({ to, children }: NavButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      className="flex items-center gap-1.5 py-2 px-5 font-normal hover:bg-tst-primary-slate-dark"
      role="button"
      onClick={() => navigate(to)}
    >
      {children}
    </Button>
  );
};
