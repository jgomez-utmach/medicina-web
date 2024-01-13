import carouselImages from './carousel';
import services from './services';
import testimonials from './testimonials';

class Database {
  constructor() {}

  async getAllCarouselImages() {
    const asArray = Object.values(carouselImages);
    await randomDelay();
    return asArray;
  }

  async getAllServices() {
    const asArray = Object.values(services);
    await randomDelay();
    return asArray;
  }

  async getAllTestimonials() {
    const asArray = Object.values(testimonials);
    await randomDelay();
    return asArray;
  }
}

// Agreguemos también un retraso para que sea un poco más realista
const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350;
    const min = 100;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(resolve, delay);
  });

module.exports = Database;
