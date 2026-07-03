import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandLogoPlaceholder } from "@/components/ui/BrandLogoPlaceholder";
import { MARCAS_PARCEIRAS } from "@/data/marcas-parceiras";

export function MarcasParceiras() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Parceiros"
          title="Trabalhamos com as melhores marcas do mercado"
        />
        <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
          {MARCAS_PARCEIRAS.map((marca) => (
            <BrandLogoPlaceholder key={marca.id} {...marca} />
          ))}
        </div>
      </Container>
    </section>
  );
}
