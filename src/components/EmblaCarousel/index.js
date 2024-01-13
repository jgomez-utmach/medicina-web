import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, PrevButton, NextButton } from '@components/CarouselArrowsButton';
import imageByIndex from '@components/ImageByIndex';
import Style from '@components/EmblaCarousel/style.module.css';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className={Style.embla}>
        <div className={Style.embla__viewport} ref={emblaRef}>
          <div className={Style.embla__container}>
            {slides.map((index) => (
              <div className={Style.embla__slide} key={index}>
                <Image src={imageByIndex(index)} alt="Your alt text" width={500} height={500} className={Style.embla__slide__img} />
              </div>
            ))}
          </div>
        </div>

        <div className={Style.embla__buttons}>
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className={Style.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton key={index} onClick={() => scrollTo(index)} className={`${Style.embla__dot}${index === selectedIndex ? ` ${Style.embla__dot__selected}` : ''}`} />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
