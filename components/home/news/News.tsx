import Image from 'next/image';
import React from 'react';

const News = () => {
  return (
    <section className="mt-24 flex  flex-col items-center  px-6">
      <p className="mb-11 font-mukta text-4xl font-semibold">Notícias</p>
      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
        <div className="max-w-[384px] bg-dark-300">
          <Image
            src="/assets/images/article1.jpg"
            width={384}
            height={200}
            alt="article cover"
          />
          <div className="py-6 pl-6">
            <h4 className="mb-4 font-mukta text-2xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h4>
            <span className="font-medium">Postado em 00/00/00</span>
          </div>
        </div>
        <div className="max-w-[384px] bg-dark-300">
          <Image
            src="/assets/images/article1.jpg"
            width={384}
            height={200}
            alt="article cover"
          />
          <div className="py-6 pl-6">
            <h4 className="mb-4 font-mukta text-2xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h4>
            <span className="font-medium">Postado em 00/00/00</span>
          </div>
        </div>
        <div className=" max-w-[384px] bg-dark-300 ">
          <Image
            src="/assets/images/article1.jpg"
            width={384}
            height={200}
            alt="article cover"
          />
          <div className="py-6 pl-6">
            <h4 className="mb-4 font-mukta text-2xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h4>
            <span className="font-medium">Postado em 00/00/00</span>
          </div>
        </div>
      </div>
      <button className="mt-20 w-full rounded bg-primary-500 px-12 py-4 text-2xl font-medium text-white sm:w-max">
        Ver mais notícias
      </button>
    </section>
  );
};

export default News;
