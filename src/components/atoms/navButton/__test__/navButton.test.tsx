import { NavButton } from '../navButton';
import { render, screen } from '@testing-library/react';

vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));

describe('LinkButton', () => {
  it('should display the label', () => {
    render(<NavButton to='/'>NAV_BUTTON</NavButton>);
    expect(screen.getByText('NAV_BUTTON')).toBeInTheDocument();
  });
});
