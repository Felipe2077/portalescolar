import Link from 'next/link';
import React from 'react';

const News = () => {
  return (
    <section className="mt-24 flex  flex-col items-center  px-6">
      <p className="mb-11 font-mukta text-4xl font-semibold">Notícias</p>
      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row"></div>
      <Link
        href="/noticias"
        className="mt-20 w-full rounded bg-primary-500 px-12 py-4 text-2xl font-medium text-white sm:w-max"
      >
        Ver mais notícias
      </Link>
    </section>
  );
};

export default News;
