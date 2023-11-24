import { type CarouselImage, Carousel } from '../carousel';
import { render, screen } from '@testing-library/react';

describe('Carousel', () => {
  it('logos are added to the image', () => {
    const mockCarouselImages: CarouselImage[] = [
      { alt: 'mock-alt-text', path: 'mock-path' },
    ];

    render(<Carousel images={mockCarouselImages} />);

    const imageElement = screen.getByAltText(mockCarouselImages[0].alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      'src',
      expect.stringContaining(mockCarouselImages[0].path)
    );
  });
});
