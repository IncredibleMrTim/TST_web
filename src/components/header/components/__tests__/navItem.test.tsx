import { NavItem, NavItemProps } from '../navItem';
import { screen } from '@testing-library/react';

import { renderWithRouter } from '@/test/utils';

describe('NavItem', () => {
  const defaultProps: NavItemProps = {
    label: 'MENU_ITEM',
    link: '/',
  };
  const setup = (props: NavItemProps = defaultProps) =>
    renderWithRouter(<NavItem {...props} />, {});

  it('should display the label with no icon', () => {
    setup();

    const link = screen.getByRole('button');

    expect(screen.getByText('MENU_ITEM')).toBeInTheDocument();
    expect(link.firstChild?.childNodes.length).toBe(1);
  });

  it('should display the icon', () => {
    setup({ ...defaultProps, icon: <div>icon</div>, label: 'MENU_ITEM' });
    const link = screen.getByRole('button');

    expect(screen.getByText('icon')).toBeInTheDocument();
    expect(link.firstChild?.childNodes.length).toBe(2);
  });
});
