import { Button, type ButtonProps } from "@material-tailwind/react";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
interface NavButtonProps extends ButtonProps {
  to: string;
  children: ReactElement | string;
  className?: string;
}

export const NavButton: React.FC<NavButtonProps> = ({
  to,
  children,
  className,
}) => {
  const navigate = useNavigate();

  return (
    <Button
      className={`flex items-center gap-1.5 py-2 px-5 !my-0 font-normal transition: hover:bg-tst-primary-gray-light/20 duration-300 rounded-sm border-tst-primary-white ${className}`}
      role="button"
      onClick={() => navigate(to)}
    >
      {children}
    </Button>
  );
};
