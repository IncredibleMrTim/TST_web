import { Typography } from '@material-tailwind/react';
import { ReactElement } from 'react';
import { NavButton } from '@/components/atoms/linkButton/navButton';
export interface NavItemProps {
  icon?: ReactElement;
  label: string;
  link: string;
}

export const NavItem = ({ icon, label, link }: NavItemProps) => {
  return (
    <NavButton
      to={link}
      className='flex items-center gap-1.5 py-2 px-5 font-normal hover:bg-tst-primary-slate-dark'
    >
      <Typography variant='small' as='li'>
        {icon}
        {label}
      </Typography>
    </NavButton>
  );
};
