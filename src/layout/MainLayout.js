import React from 'react';
import Image from 'next/image';
import email from '@images/icons/email.svg';
import map from '@images/icons/map.svg';
import phone from '@images/icons/phone.svg';

function MainLayout({ children }) {
  return (
    <>
      <div className="bg-primary w-full p-1 flex justify-center">
        <div className="w-10/12 flex flex-wrap">
          <div className="h-12 flex-auto w-36">
            <div className="grid grid-cols-1 place-content-around content-center justify-items-start h-full">
              <h1 className="text-2xl text-white font-bold">My-Medical</h1>
            </div>
          </div>
          <div className="h-12 flex-auto w-[600px]">
            <div className="grid grid-cols-[repeat(3,200px)] place-content-end content-center justify-items-end h-full">
              <div className="flex gap-x-2">
                <Image src={phone} alt="phone" width={30} height={35} />
                <div className="text-white text-sm leading-tight">
                  <p>Consulta tus dudas al:</p>
                  <p>0988888888</p>
                </div>
              </div>
              <div className="flex gap-x-2">
                <Image src={map} alt="map" width={30} height={35} />
                <div className="text-white text-sm leading-tight">
                  <p>Nos encontramos en:</p>
                  <p>Av. Quito Cll. San Luis</p>
                </div>
              </div>
              <div className="flex gap-x-2">
                <Image src={email} alt="email" width={30} height={35} />
                <div className="text-white text-sm leading-tight">
                  <p>Escribenos al correo:</p>
                  <p>mymedical@mail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}

export default MainLayout;
