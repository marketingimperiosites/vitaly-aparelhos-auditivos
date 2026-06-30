"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { FAQ_ITEMS } from "@/data/faq";

export function Faq() {
  const [itemAbertoId, setItemAbertoId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas Frequentes" />
        <div className="w-full max-w-2xl">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              {...item}
              isOpen={itemAbertoId === item.id}
              onToggle={() =>
                setItemAbertoId((atual) => (atual === item.id ? null : item.id))
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
