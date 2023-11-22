import {
  Button as TailwindButton,
  type ButtonProps as TailwindButtonProps,
} from '@material-tailwind/react';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
interface ButtonProps extends TailwindButtonProps {
  to: string;
  children: ReactElement | string;
}

export const Button = ({ to, children }: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <TailwindButton
      className='flex items-center gap-1.5 py-2 px-5 font-normal hover:bg-tst-primary-slate-dark'
      role='button'
      onClick={() => navigate(to)}
    >
      {children}
    </TailwindButton>
  );
};
