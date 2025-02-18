"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { AIModel } from "@/types/models";

interface ModelsCarouselProps {
  heading?: string;
  demoUrl?: string;
  models: AIModel[];
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "bg-green-100 text-green-800";
    case "Medium": return "bg-yellow-100 text-yellow-800";
    case "Hard": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export function ModelsCarousel({
  heading = "AI Models",
  demoUrl = "https://github.com/malikbou/minimis-demo",
  models,
}: ModelsCarouselProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="w-full bg-white">
        <Container>
          <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
            <div>
              <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 font-display text-indigo-900">
                {heading}
              </h2>
              <a
                href={demoUrl}
                className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg font-mono text-indigo-600"
              >
                View Repository
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="disabled:pointer-events-auto"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="disabled:pointer-events-auto"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </Container>
        <div className="w-full">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
            className="relative left-[-1rem]"
          >
            <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
              {models.map((model) => (
                <CarouselItem key={model.slug} className="pl-4 md:max-w-[452px]">
                  <a
                    href={model.repoLink}
                    className="group flex flex-col justify-between bg-gradient-to-br from-indigo-50/50 to-white rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    <div>
                      <div className="flex aspect-[3/2] overflow-clip bg-gradient-to-br from-indigo-100/50 to-white border-b border-indigo-100">
                        <div className="flex-1 p-6">
                          <div className="flex justify-between items-start">
                            <Badge className={`${getDifficultyColor(model.difficulty)} font-mono mb-2`}>
                              {model.difficulty}
                            </Badge>
                            <Badge variant="outline" className="font-mono">
                              {model.type}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold font-display text-indigo-900 mt-2">
                            {model.modelName}
                          </h3>
                          <p className="text-sm text-indigo-600 font-mono mt-2">
                            {model.tagline}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-2 text-lg font-medium md:text-xl font-display text-indigo-900">
                        Use Cases
                      </div>
                      <div className="mb-8 line-clamp-2 text-sm text-indigo-600 font-mono md:text-base">
                        {model.useCases}
                      </div>
                      <div className="flex items-center text-sm font-mono text-indigo-600 group-hover:text-indigo-700">
                        View Details
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
