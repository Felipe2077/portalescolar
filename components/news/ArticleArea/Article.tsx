import Image from 'next/image';
import React from 'react';

const Article = () => {
  return (
    <article className="inner-container mb-24">
      <div className="mb-10">
        <Image
          alt="article cover"
          src="/assets/images/article1.jpg"
          width={800}
          height={350}
        />
      </div>
      <h1 className="mb-6 font-mukta text-3xl font-medium leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita
        nihil commodi odit at.
      </h1>
      <span className="text-lg text-dark-100">Postado em Julho 2, 2000</span>
      <article className="mt-11 text-xl leading-loose">
        <p>
          Hey! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          excepturi nulla dicta quo, provident quaerat quidem modi error nostrum
          a vitae reprehenderit voluptate blanditiis deserunt recusandae alias
          omnis vero. Et!
        </p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <br />
        <p>
          Porro expedita nihil commodi odit at. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sunt excepturi nulla dicta quo,
          provident quaerat quidem modi error nostrum a vitae reprehenderit
          voluptate blanditiis deserunt recusandae alias omnis vero. Et! Thanks!
        </p>
      </article>
    </article>
  );
};

export default Article;
