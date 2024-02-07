'use client';
import Image from 'next/image';
import React from 'react';

const grid = [
  {
    src: '/assets/images/enfermagem.png',
    description: 'ENFERMAGEM',
  },
  {
    src: '/assets/images/ads.png',
    description: 'DESENVOLVIMENTO DE SISTEMAS',
  },
  {
    src: '/assets/images/rh.png',
    description: 'RECURSOS HUMANOS',
  },
  {
    src: '/assets/images/adm.png',
    description: 'ADMINISTRAÇÃO',
  },
  {
    src: '/assets/images/acucar.png',
    description: 'AÇÚCAR E ÁLCOOL',
  },
  {
    src: '/assets/images/agropecuaria.png',
    description: 'AGROPECUÁRIA',
  },
  {
    src: '/assets/images/zootec.png',
    description: 'ZOOTECNIA',
  },
  {
    src: '/assets/images/agronegocio.png',
    description: 'AGRONEGOCIO',
  },
];

const Courses = () => {
  return (
    <section className="inner-container">
      <p></p>
      <div className="grid grid-flow-col grid-rows-2 gap-4 ">
        {grid.map((item) => {
          return (
            <div key={item.description}>
              <Image
                src={item.src}
                width={125}
                height={125}
                alt={item.description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Courses;
