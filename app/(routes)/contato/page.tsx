import ContatoForm from '@/components/contato/ContatoForm';
import Departamentos from '@/components/contato/Departamentos';
import React from 'react';

const Contato = () => {
  return (
    <section className="my-6 flex flex-col">
      <div className="bg-primary-500 py-12 text-center font-mukta text-3xl text-white">
        <p>CONTATO</p>
      </div>
      <div className="inner-container mt-32 flex items-start justify-between">
        <ContatoForm />
        <div>
          <Departamentos />
          <div className="mt-24 h-48 w-[492px] bg-primary-500">maps</div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
