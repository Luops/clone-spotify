'use client'

// React / Next
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import Header from './components/Header';
import SectionPremium from './components/SectionPremium';
import SectionHelp from "./components/SectionHelp";
import SectionDownload from "./components/SectionDownload";
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center font-roboto">
      <Header />
      <SectionPremium />
      <SectionHelp />
      <SectionDownload />
      <Footer />
    </main>
  );
}
