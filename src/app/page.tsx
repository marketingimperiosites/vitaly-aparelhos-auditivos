import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { SinaisDeAlerta } from "@/components/sections/SinaisDeAlerta";
import { Servicos } from "@/components/sections/Servicos";
import { TesteAudicao } from "@/components/sections/TesteAudicao";
import { MarcasParceiras } from "@/components/sections/MarcasParceiras";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Sobre />
      <SinaisDeAlerta />
      <Servicos />
      <TesteAudicao />
      <MarcasParceiras />
      <Faq />
    </main>
  );
}
