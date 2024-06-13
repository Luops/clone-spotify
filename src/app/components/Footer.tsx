// React / Next
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import Logo from "../assets/spotify.svg";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";

type Props = {};

const Footer = (props: Props) => {
  // Redes sociais navigation
  const socials = [
    {
      id: "1",
      src: Facebook,
      alt: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      id: "2",
      src: Instagram,
      alt: "Instagram",
      url: "https://www.instagram.com/",
    },
    {
      id: "3",
      src: Twitter,
      alt: "Twitter",
      url: "https://www.twitter.com/",
    },
  ];
  return (
    <footer className="z-50 flex items-center justify-center w-full bg-[#1F1F1F] py-[5rem] gap-[7rem]">
      {/*Logo*/}
      <picture className="flex">
        <Image src={Logo} alt="Logo" className="w-[150px]" />
      </picture>
      {/*Navigation*/}
      <div className="flex gap-[7rem]">
        {/*Company */}
        <ul className="flex flex-col items-start justify-start text-white text-sm">
          <h4 className="text-md font-semibold">COMPANY</h4>
          <li>
            <Link href={"/about"}>Sobre</Link>
          </li>
          <li>
            <Link href={"/jobs"}>Empregos</Link>
          </li>
          <li>
            <Link href={"/press"}>Imprensa</Link>
          </li>
          <li>
            <Link href={"/news"}>Novidades</Link>
          </li>
        </ul>
        {/*Comunidades*/}
        <ul className="flex flex-col items-start justify-start text-white text-sm">
          <h4 className="text-md font-semibold">COMUNIDADES</h4>
          <li>
            <Link href={"/artists"}>Artistas</Link>
          </li>
          <li>
            <Link href={"/developers"}>Desenvolvedores</Link>
          </li>
          <li>
            <Link href={"/Brands"}>Marcas</Link>
          </li>
        </ul>
        {/*Links uteis*/}
        <ul className="flex flex-col items-start justify-start text-white text-sm">
          <h4 className="text-md font-semibold">LINKS ÚTEIS</h4>
          <li>
            <Link href={"/help"}>Ajuda</Link>
          </li>
          <li>
            <Link href={"/gifts"}>Presentes</Link>
          </li>
          <li>
            <Link href={"/player-web"}>Player na web</Link>
          </li>
        </ul>
      </div>
      {/*Redes sociais*/}
      <div className="flex gap-5 self-start">
        {socials.map((social) => (
          <Link
            href={social.url}
            key={social.id}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <Image
              src={social.src}
              alt={social.alt}
              className="w-[40px] border border-black/30 rounded-full shadow-md"
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
