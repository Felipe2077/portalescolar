import Image from 'next/image';

import React from 'react';

const ArticleCover = () => {
  return (
    <div className="mb-20 flex max-w-[800px] gap-6 bg-dark-300">
      <Image
        src="/assets/images/article1.jpg"
        width={300}
        height={200}
        alt="article cover"
      />
      <div className="p-6">
        <p className="mb-4 font-mukta text-2xl font-semibold leading-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <span className="font-medium text-dark-200">Postado em 00/00/00</span>
      </div>
    </div>
  );
};

export default ArticleCover;
