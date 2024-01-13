import Slider from '@components/Slider';
import TestimonialCard from '@components/TestimonialCard';
import ServiceCard from '@components/ServiceCard';
import EmblaCarousel from '@components/EmblaCarousel/index.js';
import AboutUs from '@components/AboutUs/index.js';
import testimonialsData from '../data/testimonials.js';
import servicesData from '../data/services.js';

/*export async function getStaticProps() {
  const carouselImages = await fetch('http://localhost:3000/api/getCarouselImages');
  const { data: carousel } = await carouselImages.json();
  const servicesInfo = await fetch('http://localhost:3000/api/getServices');
  const { data: services } = await servicesInfo.json();
  return {
    props: { carousel, services },
  };
}*/

export default function Home() {
  const OPTIONS = {};
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="w-screen h-full bg-gray-100 overflow-hidden flex flex-col items-center">
      <div className="relative opacity-70">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="w-10/12 h-[500px] absolute grid grid-rows-[110px,50px,60px] gap-8 content-center font-oswald">
        <div className="text-5xl font-medium">
          <div>
            <span className="text-primary">MULTIDISCIPLINARY</span>
            <span className="text-secondary"> MEDICAL</span>
          </div>
          <div>
            <span className="text-secondary">CENTER</span>
            <span className="text-primary"> IN NEW YORK</span>
          </div>
        </div>
        <div className="text-3xl">
          <p className="text-gris">30% de descuento en todos los exàmenes</p>
        </div>
        <div>
          <button className="bg-primary text-blanco rounded-md text-base p-4 tracking-widest hover:bg-blue-950">LIBRO DE CONSULTAS</button>
        </div>
      </div>
      <div className="w-10/12 mt-[-100px] z-[1] flex justify-around">
        {servicesData.map((service, i) => (
          <div key={i} className="h-60 w-56 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
      <div className="w-10/12 mt-24 relative">
        <AboutUs />
        <div className="absolute bottom-[-80px] w-64 h-52 rounded-md">
          <ServiceCard img="/images/objetivo.png" service="Nuestra mision" description="Cuidado responsable y servicio de calidad" />
        </div>
      </div>
      <main className="flex h-[500px] flex-col items-center justify-between py-24">
        <div className="w-screen">
          <Slider options={{ align: 'center' }}>
            {testimonialsData.map((testimonial, i) => (
              <div key={i} className="flex-[0_0_90%] md:flex-[0_0_35%]">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
}
