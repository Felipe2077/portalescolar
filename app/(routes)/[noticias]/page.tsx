import NewsArea from '@/components/news/ArticleArea/NewsArea';
import SocialHeader from '@/components/news/socialheader/SocialHeader';
import React from 'react';

const Noticias = ({ params }: { params: any }) => {
  return (
    <main>
      <SocialHeader />
      <NewsArea newsSection={params.noticias} />
    </main>
  );
};

export default Noticias;
