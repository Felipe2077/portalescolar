import Intro from '@/components/home/intro/Intro';
import IntroDetails from '@/components/home/introDetails/IntroDetails';

/* eslint-disable tailwindcss/no-custom-classname */
export default function Home() {
  return (
    <section className="mt-6 flex w-full flex-col items-center justify-center">
      <div className=" flex w-full justify-center bg-dark-100">
        <Intro />
      </div>
      <IntroDetails />
    </section>
  );
}
