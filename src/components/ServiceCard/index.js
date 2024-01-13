import Image from 'next/image';

const ServiceCard = ({ img, service, description }) => {
  return (
    <div className="h-full w-full grid grid-rows-[2fr,3fr] place-items-center bg-primary p-5 rounded-lg">
      <Image src={img} width={70} height={70} alt={service} />
      <div className="text-white text-center flex flex-col self-start">
        <h3 className="text-2xl my-1 font-semibold font-oswald">{service}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
