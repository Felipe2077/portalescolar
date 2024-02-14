import React from 'react';
import ArticleContainer from './ArticleContainer';
import Article from './Article';

const NewsArea = ({ newsSection }: { newsSection: string }) => {
  console.log(newsSection);

  return (
    <div>
      <section className="mt-9 flex flex-col justify-center">
        <div className="inner-container flex justify-between gap-24">
          <div className=" flex flex-col">
            {newsSection === 'noticias' ? (
              <>
                <h1 className="mb-20 text-center font-mukta text-[40px]">
                  Notícias
                </h1>
                <ArticleContainer footer={false} />
                <ArticleContainer footer={false} />
                <ArticleContainer footer={false} />
                <ArticleContainer footer={false} />
                <ArticleContainer footer={false} />
              </>
            ) : (
              <>
                <section>
                  <Article />
                </section>
              </>
            )}
          </div>
          <section className="mt-10 hidden max-w-[312px] flex-col gap-6 medium:flex">
            <h2 className="font-mukta text-3xl">Outras notícias</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </section>
        </div>
      </section>
      {newsSection === 'noticia1' && <ArticleContainer footer={true} />}
    </div>
  );
};

export default NewsArea;
