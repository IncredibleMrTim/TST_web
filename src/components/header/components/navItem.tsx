import { Typography } from '@material-tailwind/react';
import { ReactElement } from 'react';

interface NavItemProps {
  icon?: ReactElement;
  label: string;
}

export const NavItem = ({ icon, label }: NavItemProps) => {
  return (
    <a href='#'>
      <Typography
        variant='small'
        as='li'
        className='flex items-center gap-1.5 py-2 px-5 font-normal  hover:bg-tst-primary-slate-dark'
      >
        {icon && icon}
        {label}
      </Typography>
    </a>
  );
};
