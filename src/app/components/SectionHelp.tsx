// React / Next
import React from "react";
import Image from "next/image";

// Images
import MusicOne from "../assets/img1.jpg";
import MusicTwo from "../assets/img2.jpg";
import MusicThree from "../assets/img3.jpg";
import MusicFour from "../assets/img4.jpg";
import MusicFive from "../assets/1.jpeg";
import MusicSix from "../assets/2.jpeg";
import MusicSeven from "../assets/3.jpeg";
import MusicEight from "../assets/4.jpeg";

type Props = {};

function SectionHelp({}: Props) {
  // Options das musicas
  const musicOptions = [
    {
      id: "1",
      name: "MusicOne",
      image: MusicOne,
      description:
        "<h3 class='font-bold text-4xl text-purple-700'>O que é o Lorem Ipsum?</h3><h4 class='font-bold text-2xl text-purple-700 mt-3'>Porque é que o usamos?</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p><h4 class='font-bold text-2xl text-purple-700 mt-3'>De onde é que ele vem?</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><h4 class='font-bold text-2xl text-purple-700 mt-3'>Onde posso arranjar algum?</h4><p>Em documentos utilizados para testes, este tipo de texto é utilizado para evitar que as pessoas foquem a atenção no texto e se concentrem nos aspectos visuais.</p>",
    },
    {
      id: "2",
      name: "MusicTwo",
      image: MusicTwo,
      description:
        "<h3 class='font-bold text-4xl text-purple-700'>O que é o Lorem Ipsum?</h3><h4 class='font-bold text-2xl text-purple-700 mt-3'>Porque é que o usamos?</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>",
    },
    {
      id: "3",
      name: "MusicThree",
      image: MusicThree,
      description:
        "<h3 class='font-bold text-4xl text-purple-700 animate-slideIn'>O que é o Lorem Ipsum?</h3><h4 class='font-bold text-2xl text-purple-700 mt-3'>Porque é que o usamos?</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p><h4 class='font-bold text-2xl text-purple-700 mt-3 animate-slideIn'>De onde é que ele vem?</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><h4 class='font-bold text-2xl text-purple-700 mt-3'>Onde posso arranjar algum?</h4><p>Em documentos utilizados para testes, este tipo de texto é utilizado para evitar que as pessoas foquem a atenção no texto e se concentrem nos aspectos visuais.</p>",
    },
    { id: "4", name: "MusicFour", image: MusicFour },
    { id: "5", name: "MusicFive", image: MusicFive },
    { id: "6", name: "MusicSix", image: MusicSix },
    { id: "7", name: "MusicSeven", image: MusicSeven },
    { id: "8", name: "MusicEight", image: MusicEight },
  ];

  // State para mostrar os textos/imagens da música selecionada
  const [option, setOption] = React.useState<string>("");

  return (
    <section id="Ajuda" className="w-full flex gap-[2rem] px-10 py-[5rem]">
      {/*Opções de músicas*/}
      <div className="w-1/2 grid grid-cols-2 grid-rows-2 grid-flow-row gap-5">
        {musicOptions.slice(0, 4).map((option) => (
          <button
            key={option.id}
            onClick={() => setOption(option.name)}
            className={`w-[200px] p-0 m-0`}
          >
            <Image
              src={option.image}
              alt={option.name}
              layout="responsive"
              className={`${
                musicOptions.filter((o) => o.name === option.name)[0]?.name ===
                  "MusicOne" ||
                musicOptions.filter((o) => o.name === option.name)[0]?.name ===
                  "MusicThree"
                  ? "ml-[6rem]"
                  : ""
              }`}
            />
          </button>
        ))}
      </div>
      {/*Conteudo selecionado*/}
      <div className="w-1/2 flex items-start justify-start overflow-x-hidden">
        {option && !option.includes("MusicFour") ? (
          <div
            className={`w-full h-full flex flex-col break-normal ${
              option.includes("MusicTwo")
                ? "text-center items-center justify-center"
                : ""
            }`}
            dangerouslySetInnerHTML={{
              __html:
                musicOptions.filter((o) => o.name === option)[0]?.description ||
                "",
            }}
          ></div>
        ) : (
          <div className="w-full flex items-start justify-start flex-wrap gap-5">
            {musicOptions.slice(4, 8).map((option) => (
              <div key={option.id}>
                <Image
                  src={option.image}
                  alt={option.name}
                  className="w-[200px]"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SectionHelp;
