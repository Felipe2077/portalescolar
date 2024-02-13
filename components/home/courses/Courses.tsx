'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const grid = [
  {
    src: '/assets/images/enfermagem.png',
    description: 'ENFERMAGEM',
    url: '/cursos',
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
    <section className="inner-container mt-28 flex flex-col p-6">
      <p className="mb-12 text-center text-[32px] font-semibold sm:text-[40px]">
        Cursos técnicos
      </p>
      <div>
        <div className="flex flex-col content-stretch gap-6 sm:grid sm:grid-cols-[repeat(auto-fit,minmax(280px,2fr))] sm:grid-rows-2 sm:gap-8">
          {grid.map((item) => {
            return (
              <div
                key={item.description}
                className="flex h-[250px] w-full flex-col items-center justify-center bg-dark-300 py-4 "
              >
                <Link
                  href="#"
                  className="flex flex-col items-center justify-center "
                >
                  <Image
                    src={item.src}
                    width={125}
                    height={125}
                    alt={item.description}
                  />
                  <p className="mt-8 line-clamp-2 text-center text-xl font-semibold text-dark-100 sm:mt-6">
                    {item.description}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
