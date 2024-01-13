import Image from 'next/image';
import Link from 'next/link';

function AboutUs() {
  return (
    <div className="grid grid-cols-[4fr,5fr] h-96 ml-12">
      <div className="">
        <Image src="/images/about_us.jpg" alt="About Us" width={500} height={500} className="h-full w-full object-cover object-right" />
      </div>
      <div className="grid grid-rows-6 items-center text-gris px-5">
        <p className="font-oswald font-semibold tracking-widest text-sm">QUINES SOMOS</p>
        <div className="font-oswald font-semibold tracking-widest leading-tight">
          <p className="text-secondary text-3xl">CENTRO MEDICO</p>
          <p className="text-primary text-3xl">EN NEW YORK</p>
        </div>
        <p className="font-semibold">Ofrecemos un cuidado responsable a nuestros pacientes y un servicio de calidad</p>
        <p>Todos los exámenes son realizados por nuestros profesionales de medicina y dentista certificados por la IPS de Nueva York y el Ministerio de Salud de Nueva York (MSSNY).</p>
        <div className="justify-self-start text-primary font-semibold">
          <Link href="/about-us">
            <p className="tracking-widest justify-self-start">LEER MÁS</p>
          </Link>
        </div>
        <div>
          <p className="font-semibold">Ricardo Pardo</p>
          <p className="text-sm">Director General</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
