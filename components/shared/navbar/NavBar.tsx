import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="inner-container mt-6 flex items-center justify-between">
      <Link href="/" className="flex medium:hidden">
        <Image
          src="/assets/images/logo.png"
          width={152}
          height={45}
          alt="logo"
        />
      </Link>
      <Link href="/" className="hidden medium:flex">
        <Image
          src="/assets/images/logo.png"
          width={180}
          height={52}
          alt="logo"
        />
      </Link>
      <ul className="hidden items-center gap-10 text-lg font-medium medium:flex ">
        <li>
          <Link href="/" className="px-2 py-3 text-primary-500">
            Início
          </Link>
        </li>
        <li>
          <Link href="/cursos" className="px-2 py-3">
            Cursos
          </Link>
        </li>
        <li>
          <Link href="/vagas" className="px-2 py-3">
            Vagas
          </Link>
        </li>
        <li>
          <Link href="/noticias/noticias" className="px-2 py-3">
            Notícias
          </Link>
        </li>
        <li>
          <Link href="/contato" className="px-2 py-3">
            Contato
          </Link>
        </li>
      </ul>

      <ul className="hidden gap-8 medium:flex">
        <li>
          <Link href="#">
            <Image
              src="/assets/icons/InstagramLogoHeader.png"
              width={32}
              height={32}
              alt="Instagram logo"
            />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/assets/icons/FacebookLogoHeader.png"
              width={32}
              height={32}
              alt="Facebook logo"
            />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/assets/icons/LinkedinLogoHeader.png"
              width={32}
              height={32}
              alt="Instagram logo"
            />
          </Link>
        </li>
      </ul>
      <Link href="/" className="flex medium:hidden">
        <Image
          src="/assets/icons/List.png"
          width={32}
          height={32}
          alt="logo"
          priority
        />
      </Link>
    </nav>
  );
};

export default NavBar;
