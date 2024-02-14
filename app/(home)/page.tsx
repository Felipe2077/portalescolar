import Courses from '@/components/home/courses/Courses';
import Intro from '@/components/home/intro/Intro';
import IntroDetails from '@/components/home/introDetails/IntroDetails';
import Jobs from '@/components/home/jobs/Jobs';
import ArticleContainer from '@/components/news/ArticleArea/ArticleContainer';

/* eslint-disable tailwindcss/no-custom-classname */
export default function Home() {
  return (
    <section className="mt-6 flex w-full flex-col items-center justify-center">
      <div className=" flex w-full justify-center bg-dark-100">
        <Intro />
      </div>
      <IntroDetails />
      <Courses />
      <Jobs />
      <ArticleContainer footer={true} />
    </section>
  );
}
