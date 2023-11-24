interface CarouselImageProps {
  images: CarouselImage[];
}

export type CarouselImage = {
  path: string;
  alt: string;
};

export const Carousel = ({ images }: CarouselImageProps) => {
  console.log(images);
  return (
    <div className="px-16">
      <div className="flex flex-row overflow-scroll w-full no-scrollbar scroll-smooth scrolling-auto gap-8">
        {images.map((logo) => (
          <img
            alt={logo.alt}
            key={logo.alt}
            src={logo.path}
            className="transition ease-in-out grayscale opacity-25 h-20 max-w-sm hover:grayscale-0 hover:opacity-100 duration-300 h-14 max-w-sm"
          />
        ))}
      </div>
    </div>
  );
};
