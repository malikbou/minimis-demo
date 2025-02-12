import { Card, CardContent } from "@/components/ui/card";
import { Navbar1 } from "@/components/ui/navbar1";
import { Blog7 } from "@/components/ui/blog7";
import { ChartDemo } from "@/components/ui/chart-demo";
import { Container } from "@/components/ui/container";
import { aiModels } from "@/data/models";
import { ModelCard } from "@/components/ui/model-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-8 md:py-12 lg:py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Welcome to Minimis AI</h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">Explore AI models and community creations.</p>
          </div>
        </Container>
      </section>

      {/* AI Models Section */}
      <section className="py-8 md:py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">AI Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiModels.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
        </Container>
      </section>

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

            {/* Chart Section */}
            <section className="py-8 md:py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Analytics</h2>
          <ChartDemo />
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-8 md:py-12">
        <Container>
          <Blog7
            tagline="Blog"
            heading="Latest Updates"
            description="Check out our latest news and articles"
            buttonText="Read More"
            image="/blog-image.jpg"
            link="/blog"
          />
        </Container>
      </section>
    </div>
  );
}
