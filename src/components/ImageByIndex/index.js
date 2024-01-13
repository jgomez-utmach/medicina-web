import carouselData from '@data/carousel.js';

export const images = carouselData;

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
