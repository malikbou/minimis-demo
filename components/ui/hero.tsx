import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface HeroProps {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

export function Hero({
  badge = "🤖 Minimis AI Platform",
  heading = "Explore AI Models and Community Creations",
  description = "Discover and experiment with optimized AI models. A curated collection of efficient implementations for various AI tasks.",
  buttons = {
    primary: {
      text: "Browse Models",
      url: "/models",
    },
    secondary: {
      text: "View on GitHub",
      url: "https://github.com/malikbou/minimis-demo",
    },
  },
  image = {
    src: "/images/hero.jpeg",
    alt: "AI Models visualization",
  },
}: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-indigo-50/50 to-white">
      <Container className="py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline" className="font-mono bg-indigo-50 text-indigo-600 border-indigo-200">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl font-display text-indigo-900">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl text-indigo-600 lg:text-xl font-mono">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto border-indigo-200 hover:bg-indigo-50">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-full rounded-md object-cover object-top shadow-lg"
          />
        </div>
      </Container>
    </section>
  );
}
