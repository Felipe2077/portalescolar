import React from 'react';

const IntroDetails = () => {
  return (
    <div className=" hidden h-[300px] text-base font-medium text-dark-400 medium:flex desktop:text-xl">
      <div className="flex items-center justify-center bg-dark-200  px-14 text-center leading-relaxed">
        <p>
          Mantida pelo governo do Estado de São Paulo, os cursos oferecidos –
          além de qualidade ímpar – são totalmente gratuitos, levando para toda
          a população um ensino de qualidade e a oportunidade de aprender uma
          profissão.
        </p>
      </div>
      <div className="flex items-center justify-center bg-primary-500 px-14 text-center leading-relaxed">
        <p>
          Contando com um corpo docente extremamente qualificado e estrutura
          física moderna, os cursos oferecidos nesta unidade se destacam pela
          qualidade de ensino, onde o aluno realmente aprende conteúdos
          relevantes, de maneira fácil e didática.
        </p>
      </div>
      <div className="flex items-center justify-center bg-[#481A8F] px-14 text-center leading-relaxed">
        <p>
          Baseado em uma didática prática, os alunos são envolvidos em conteúdos
          que abordam as diversas realidades do mercado, formando assim mão de
          obra qualificada e proporcionando uma experiência diferenciada para o
          aluno.
        </p>
      </div>
    </div>
  );
};

export default IntroDetails;
