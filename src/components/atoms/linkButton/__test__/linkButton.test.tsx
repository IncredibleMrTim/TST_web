import { LinkButton } from '../navButton';
import { render, screen } from '@testing-library/react';

vi.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('LinkButton', () => {
  it('should display the label', () => {
    render(<LinkButton to='/'>LINK_BUTTON</LinkButton>);
    expect(screen.getByText('LINK_BUTTON')).toBeInTheDocument();
  });
});
