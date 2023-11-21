import { NavItem, NavItemProps } from '../navItem';
import { render, screen } from '@testing-library/react';

describe('NavItem', () => {
  const defaultProps: NavItemProps = {
    label: 'MENU_ITEM',
  };
  const setup = (props: NavItemProps = defaultProps) =>
    render(<NavItem {...props} />, {});

  it('should display the label with no icon', () => {
    setup();

    const link = screen.getByRole('link');

    expect(screen.getByText('MENU_ITEM')).toBeInTheDocument();
    expect(link.firstChild?.childNodes.length).toBe(1);
  });

  it('should display the icon', () => {
    setup({ icon: <div>icon</div>, label: 'MENU_ITEM' });
    const link = screen.getByRole('link');

    expect(screen.getByText('icon')).toBeInTheDocument();
    expect(link.firstChild?.childNodes.length).toBe(2);
  });
});
