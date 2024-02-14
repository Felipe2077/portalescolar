'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import courses from '@/mocks/courses.json';

const Courses = () => {
  return (
    <section className="inner-container mt-28 flex flex-col p-6">
      <p className="mb-12 text-center text-[32px] font-semibold sm:text-[40px]">
        Cursos técnicos
      </p>
      <div>
        <div className="flex flex-col content-stretch gap-6 sm:grid sm:grid-cols-[repeat(auto-fit,minmax(280px,2fr))] sm:grid-rows-2 sm:gap-8">
          {courses.map((item) => {
            return (
              <div
                key={item.title}
                className="flex h-[250px] w-full flex-col items-center justify-center bg-dark-300 py-4 "
              >
                <Link
                  href={`cursos/${item.courseId}`}
                  className="flex flex-col items-center justify-center "
                >
                  <Image
                    src={item.src}
                    width={125}
                    height={125}
                    alt={item.title}
                  />
                  <p className="mt-8 line-clamp-2 text-center text-xl font-semibold uppercase text-dark-100 sm:mt-6">
                    {item.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
