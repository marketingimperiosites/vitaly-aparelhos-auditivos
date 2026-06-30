import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuizContainer } from "@/components/quiz/QuizContainer";

export function TesteAudicao() {
  return (
    <section id="teste-audicao" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Teste rápido de audição"
          title="Como anda a sua audição no dia a dia?"
          subtitle="Responda algumas perguntas rápidas sobre situações comuns do cotidiano e receba uma orientação inicial."
        />
        <div className="w-full max-w-xl">
          <QuizContainer />
        </div>
      </Container>
    </section>
  );
}
