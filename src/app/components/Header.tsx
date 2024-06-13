// React / Next
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import Logo from "../assets/spotify.svg";

type Props = {};

function Header({}: Props) {
  // State para verificar se foi utilizado o scroll
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Verificar se foi utilizado o scroll e mudar o state
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 15) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Acompanhar o scroll
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation Options
  const navOptions = ["Premium", "Ajuda", "Baixar", "Entrar"];

  // State para ver se foi clicado em alguma opção do header
  const [clicked, setClicked] = React.useState<string>("");

  const handleNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setClicked(sectionId);
  };

  return (
    <header
      className={`fixed flex justify-between top-0 z-50 w-full ${
        isScrolled ? "bg-[#1F1F1F]" : "bg-black/50"
      } transition-all ease-in-out duration-300 py-6 shadow-md`}
    >
      {/*Logo*/}
      <picture className="flex items-center justify-center mx-auto w-1/2">
        <Image src={Logo} alt="Logo" className="w-[150px]" />
      </picture>
      {/*Navigation*/}
      <ul
        className={`flex items-center justify-center mx-auto w-1/2 font-roboto gap-2`}
      >
        {navOptions.map((option) => (
          <>
            {option === "Entrar" ? (
              <Link
                href="/login"
                className={`mx-2 text-white text-sm font-semibold tracking-wide hover:text-white/80 transition-all ease-in-out duration-300 border-l-2 border-white pl-5`}
              >
                {option}
              </Link>
            ) : (
              <li
                className={`mx-2 text-white text-sm font-semibold tracking-wide hover:text-white/80 transition-all ease-in-out duration-300`}
                key={option}
              >
                <button onClick={() => handleNavigation(option)}>
                  {option}
                </button>
              </li>
            )}
          </>
        ))}
      </ul>
    </header>
  );
}

export default Header;
