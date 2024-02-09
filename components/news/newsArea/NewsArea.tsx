import React from 'react';
import ArticleCover from './ArticleCover';

const NewsArea = () => {
  return (
    <section className="mt-9 flex flex-col justify-center">
      <h1 className="mb-20 text-center font-mukta text-[40px]">Notícias</h1>
      <div className="inner-container flex justify-between gap-24">
        <div className=" flex flex-col">
          <ArticleCover />
          <ArticleCover />
          <ArticleCover />
          <ArticleCover />
          <ArticleCover />
        </div>
        <section className="hidden max-w-[312px] flex-col gap-6 medium:flex">
          <h2 className="font-mukta text-3xl">Outras notícias</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
      </div>
    </section>
  );
};

export default NewsArea;
