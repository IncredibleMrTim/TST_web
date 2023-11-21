import { Button, type ButtonProps } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
interface LinkButtonProps extends ButtonProps {
  to: string;
  children: string;
}

export const LinkButton = ({ to, children }: LinkButtonProps) => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(to)}>{children}</Button>;
};
