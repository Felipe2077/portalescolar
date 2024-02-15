import React from 'react';
import departaments from '@/mocks/departaments.json';

const Departamentos = () => {
  return (
    <section className="flex flex-col  justify-center ">
      <p className="mb-6  font-mukta text-3xl">Departamento</p>
      {departaments.map((item, index) => {
        return (
          <div key={item.course}>
            <div className="box-border grid sm:grid-cols-[repeat(auto-fill,minmax(364px,492px))] ">
              <ul>
                <li
                  className={`flex items-center justify-between px-6 ${index % 2 ? 'bg-dark-300' : 'bg-white'}`}
                >
                  <div className="py-4 text-sm font-semibold uppercase text-primary-500">
                    {item.course}
                  </div>
                  <div className="lowercase">{item.email}</div>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Departamentos;
