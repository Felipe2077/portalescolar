import React from 'react';
import courses from '@/mocks/courses.json';
import Image from 'next/image';

const Cursos = ({ params }: { params: any }) => {
  return (
    <div>
      {courses.map((course) => {
        if (course.courseId === params.cursos) {
          return (
            <section key={course.courseId} className=" flex flex-col">
              <h1 className="mt-6 bg-primary-500 py-8 text-center font-mukta text-2xl text-white sm:text-3xl">
                {course.title}
              </h1>
              <div className="inner-container mt-12 flex flex-col   items-center justify-center gap-14 sm:mt-24 medium:flex-row">
                <Image
                  alt="course image"
                  src={course.urlCover}
                  quality={60}
                  width={488}
                  height={488}
                />
                <div>
                  <p className="text-base  sm:text-lg">{course.description}</p>
                  <ul className="mt-8 flex flex-col gap-8">
                    <li className="flex items-center gap-4">
                      <Image
                        width={48}
                        height={48}
                        src={course.shift.icon}
                        alt="icon"
                      />
                      <div className="flex flex-col text-lg">
                        <span className="font-mukta font-semibold text-primary-500">
                          Período:
                        </span>
                        <span className="text-lg font-medium">
                          {course.shift.time}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <Image
                        width={48}
                        height={48}
                        src={course.coordination.icon}
                        alt="icon"
                      />
                      <div className="flex flex-col text-lg">
                        <span className="font-mukta font-semibold text-primary-500">
                          Período:
                        </span>
                        <span className="text-lg font-medium">
                          {course.coordination.name}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <Image
                        width={48}
                        height={48}
                        src={course.coursetime.icon}
                        alt="icon"
                      />
                      <div className="flex flex-col text-lg">
                        <span className="font-mukta font-semibold text-primary-500">
                          Período:
                        </span>
                        <span className="text-lg font-medium">
                          {course.coursetime.time}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <section className=" mt-24 bg-dark-300 py-12">
                <div className="inner-container flex flex-col gap-4">
                  <h2 className="font-mukta text-3xl font-medium">
                    Objetivos gerais
                  </h2>
                  <p className="text-lg leading-relaxed">
                    {course.generalObjectives}
                  </p>
                </div>
              </section>
              <section className=" mt-10 py-12  sm:mt-20">
                <div className="inner-container flex flex-col gap-4">
                  <h2 className="font-mukta text-3xl font-medium">
                    Objetivos específicos
                  </h2>
                  <p className="text-lg leading-relaxed">
                    {course.specificObjectives}
                  </p>
                </div>
              </section>
            </section>
          );
        }
      })}
    </div>
  );
};

export default Cursos;
