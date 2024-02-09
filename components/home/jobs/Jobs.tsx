import Link from 'next/link';
import React from 'react';

const Jobs = () => {
  return (
    <section className="flex w-full flex-col justify-center sm:mt-24 sm:h-[600px] sm:flex-row">
      <div className="flex w-full items-center justify-center bg-primary-500">
        <p className="p-12 font-mukta text-5xl font-semibold text-white">
          Estágios e empregos
        </p>
      </div>
      <div className=" flex w-full flex-col justify-center gap-6 bg-dark-300 py-10 sm:gap-[74px] sm:py-0">
        <div className="pl-6 sm:pl-14">
          <h3 className="font-mukta text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <p className="text-lg text-dark-200">Publicado em 00/00/2000</p>
          <Link
            href="/vagas"
            className="text-lg font-medium text-primary-500 underline "
          >
            Mais sobre a vaga
          </Link>
        </div>
        <div className="pl-6 sm:pl-14">
          <h3 className="font-mukta text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <p className="text-lg text-dark-200">Publicado em 00/00/2000</p>
          <Link
            href="/vagas"
            className="text-lg font-medium text-primary-500 underline "
          >
            Mais sobre a vaga
          </Link>
        </div>
        <div className="pl-6 sm:pl-14">
          <h3 className="font-mukta text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <p className="text-lg text-dark-200">Publicado em 00/00/2000</p>
          <Link
            href="/vagas"
            className="text-lg font-medium text-primary-500 underline "
          >
            Mais sobre a vaga
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
