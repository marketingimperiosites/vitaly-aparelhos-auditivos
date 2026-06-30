import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Sobre />
    </main>
  );
}
