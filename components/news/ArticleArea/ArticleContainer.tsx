import Link from 'next/link';
import React from 'react';
import ArticleCard from './NewsCard/ArticleCard';

const ArticleContainer = ({ footer }: { footer: boolean }) => {
  if (footer) {
    return (
      <article className="mt-24 flex  flex-col items-center  px-6">
        <p className="mb-11 font-mukta text-4xl font-semibold">Notícias</p>
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          <ArticleCard footer={true} />
          <ArticleCard footer={true} />
          <ArticleCard footer={true} />
        </div>
        <Link
          href="/noticias"
          className="mt-20 w-full rounded bg-primary-500 px-12 py-4 text-2xl font-medium text-white sm:w-max"
        >
          Ver mais notícias
        </Link>
      </article>
    );
  } else {
    return (
      <article>
        <ArticleCard footer={false} />
      </article>
    );
  }
};

export default ArticleContainer;
