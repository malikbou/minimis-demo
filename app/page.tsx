import { Card, CardContent } from "@/components/ui/card";
import { Navbar1 } from "@/components/ui/navbar1";
import { Blog7 } from "@/components/ui/blog7";
import { ChartDemo } from "@/components/ui/chart-demo";
import { Container } from "@/components/ui/container";
import { aiModels } from "@/data/models";
import { ModelCard } from "@/components/ui/model-card";
import { Hero } from "@/components/ui/hero";
import { ModelsSection } from "@/components/sections/models-section";
import { ModelsCarousel } from "@/components/sections/models-carousel";

const heroContent = {
  heading: "Explore AI Models and Community Creations",
  description: "Discover and experiment with optimized AI models. A curated collection of efficient implementations for various AI tasks.",
  image: {
    src: "/images/hero.jpeg",
    alt: "AI Model Hero Image"
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero {...heroContent} />

      {/* Models Section */}
      <ModelsCarousel
        heading="AI Models"
        demoUrl="https://github.com/malikbou/minimis-demo"
        models={aiModels}
      />

      {/* Community Creations Section */}
      <section className="py-8 md:py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Community Creations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold">AI-Powered Poem</h3>
                <p className="text-gray-500">A beautiful poem created with AI.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold">AI-Generated Music</h3>
                <p className="text-gray-500">Listen to music composed by AI.</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
