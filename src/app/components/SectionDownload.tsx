// React / Next
import React from "react";
import Image from "next/image";

// Images
import Background from "../assets/capa.png";
import Iphone1 from "../assets/iphone1.png";
import Iphone2 from "../assets/iphone2.png";

type Props = {};

function SectionDownload({}: Props) {
  return (
    <section
      id="Baixar"
      className="w-full relative py-[6rem] bg-gradient-to-r from-fuchsia-400 to-purple-400"
    >
      {/*Background*/}
      <Image
        src={Background}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-40"
      />
      {/*Conteudo*/}
      <div className="flex flex-col items-start justify-start pl-[10rem] gap-2 text-white">
        <h3 className="text-5xl font-semibold">Fácil</h3>
        <h4 className="text-3xl text-emerald-300 mt-6">Buscar</h4>
        <div className="flex flex-col  max-w-[300px]">
          <p>Já sabe o que quer escutar?</p>
          <p>É só procurar e apertar o play.</p>
        </div>
        <h4 className="text-3xl text-emerald-300 mt-6">Navegar</h4>
        <p className="max-w-[300px]">
          Veja os novos lançamentos, o que está bombando nas paradas e as
          melhores playlists para o seu momento.
        </p>
        <h4 className="text-3xl text-emerald-300 mt-6">Descobrir</h4>
        <p className="max-w-[300px]">
          Curta músicas novas toda segunda-feira com uma playlist personalizada
          pra você. Ou relaxe e curta uma das rádios.
        </p>
      </div>
      {/* Imagem dos Iphones */}
      <Image
        src={Iphone1}
        alt="Iphone1"
        className="absolute -top-10 left-[40%] w-[300px] rotate-12"
      />
      <Image
        src={Iphone2}
        alt="Iphone2"
        className="absolute top-20 left-[65%] w-[300px] rotate-12"
      />
    </section>
  );
}

export default SectionDownload;
