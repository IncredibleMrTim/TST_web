import { Typography } from '@material-tailwind/react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export interface NavItemProps {
  icon?: ReactElement;
  label: string;
  link: string;
}

export const NavItem = ({ icon, label, link }: NavItemProps) => {
  return (
    <Link to={link}>
      <Typography
        variant='small'
        as='li'
        className='flex items-center gap-1.5 py-2 px-5 font-normal  hover:bg-tst-primary-slate-dark'
      >
        {icon}
        {label}
      </Typography>
    </Link>
  );
};
