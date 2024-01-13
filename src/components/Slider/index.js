import useEmblaCarousel from 'embla-carousel-react';

// 1. Define the props
const Slider = ({ children, options }) => {
  // 2. Initialize EmblaCarousel using the custom hook
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    ...options,
  });

  return (
    // 3. Set ref as emblaRef.
    // Make sure we have overflow-hidden and flex so that it displays properly
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
};

export default Slider;
