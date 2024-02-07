import React from 'react';

const Intro = () => {
  return (
    <section className="flex max-w-[1008px] flex-col items-center justify-center gap-6 px-10 py-24 text-dark-400 tablet:py-40 medium:px-0">
      <h1 className="font-mukta text-3xl font-semibold  tablet:text-5xl ">
        Helcy Moreira Martins Aguiar
      </h1>
      <p className="text-center text-base  tablet:text-2xl tablet:font-medium">
        Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy
        Moreira Martins Aguiar se destaca no ensino médio e técnico, recebendo
        constantemente menções e congratulações em todo o estado de São Paulo.
      </p>
    </section>
  );
};

export default Intro;
