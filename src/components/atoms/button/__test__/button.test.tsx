import { Button } from '../button';
import { render, screen } from '@testing-library/react';

vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));

describe('LinkButton', () => {
  it('should display the label', () => {
    render(<Button to='/'>BUTTON</Button>);
    expect(screen.getByText('BUTTON')).toBeInTheDocument();
  });
});
