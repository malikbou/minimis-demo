import { Container } from "@/components/ui/container";
import { ModelCard } from "@/components/ui/model-card";
import { aiModels } from "@/data/models";

export function ModelsSection() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-display">
          AI Models
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiModels.map((model) => (
            <ModelCard key={model.slug} model={model} />
          ))}
        </div>
      </Container>
    </section>
  );
}
