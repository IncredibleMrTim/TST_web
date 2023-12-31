import { Typography } from '@material-tailwind/react';
import { ReactElement } from 'react';
import { NavButton } from '@/components/atoms/navButton/navButton';
export interface NavItemProps {
  icon?: ReactElement;
  label: string;
  to: string;
}

export const NavItem = ({ icon, label, to }: NavItemProps) => {
  return (
    <NavButton
      to={to}
      className='flex items-center gap-1.5 py-2 px-5 font-normal hover:bg-tst-primary-slate-dark'
    >
      <Typography variant='small' as='li'>
        {icon}
        {label}
      </Typography>
    </NavButton>
  );
};
