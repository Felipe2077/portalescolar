import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleFooterCard = ({ footer }: { footer: boolean }) => {
  return (
    <Link
      href="/noticia1"
      className={` bg-dark-300 ${footer ? 'max-w-[384px]' : 'mb-20 flex max-w-[800px] gap-6'}`}
    >
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
    </Link>
  );
};

export default ArticleFooterCard;
