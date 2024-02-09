import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 flex h-full flex-col items-center justify-center bg-primary-500 text-white sm:mt-24">
      <div className="inner-container flex w-full flex-col items-center justify-between gap-10 pb-24 pt-20 sm:flex-row">
        <div>
          <Link href="/">
            <Image
              //* footer logo
              src="/assets/images/logofooter.png"
              width={180}
              height={52}
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li className="flex cursor-pointer items-center gap-4">
              <Image
                src="/assets/icons/world.png"
                alt="adress icon"
                width={48}
                height={48}
              />
              <div>
                <p className="text-xs">Rua Codelândia, 1367</p>
                <p className="font-mukta font-medium">Cafelândia, SP</p>
              </div>
            </li>
            <li className="flex cursor-pointer items-center gap-4">
              <Image
                src="/assets/icons/Phone.png"
                alt="adress icon"
                width={48}
                height={48}
              />
              <div>
                <p className="font-mukta text-lg font-medium">
                  +55 14 9999-9999
                </p>
              </div>
            </li>
            <li className="flex cursor-pointer items-center gap-4">
              <Image
                src="/assets/icons/Envelope.png"
                alt="adress icon"
                width={48}
                height={48}
              />
              <div>
                <p className="font-mukta text-lg font-medium">
                  centropaulasouza@etec.sp.gov.br
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-12 flex flex-col gap-6 sm:mt-0">
          <div className="flex max-w-[312px] flex-col items-center justify-center gap-2 text-center">
            <h3 className="font-mukta text-2xl font-semibold sm:text-lg">
              Sobre a Etec Cafelândia
            </h3>
            <p className="text-sm  leading-[160%]">
              Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy
              Moreira Martins Aguiar se destaca no ensino médio e técnico,
              recebendo constantemente menções e congratulações em todo o estado
              de São Paulo.
            </p>
          </div>
          <div>
            <ul className="mt-10 flex items-center justify-center gap-5 sm:mt-6">
              <li>
                <Link href="#">
                  <Image
                    src="/assets/icons/InstagramLogo.png"
                    width={48}
                    height={48}
                    alt="Instagram logo"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src="/assets/icons/FacebookLogo.png"
                    width={48}
                    height={48}
                    alt="Facebook logo"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src="/assets/icons/LinkedinLogo.png"
                    width={48}
                    height={48}
                    alt="Instagram logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-[#AA1818] py-6 text-center">
        <p className="sm:text-lg sm:font-medium">
          Etec Professora Helcy Moreira Martins Aguiar - 2022 © Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
