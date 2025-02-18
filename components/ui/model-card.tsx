import { AIModel } from "@/types/models";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function ModelCard({ model }: { model: AIModel }) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-background to-primary/5">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold font-display">
            {model.modelName}
          </CardTitle>
          <Badge className={`${getDifficultyColor(model.difficulty)} font-mono`}>
            {model.difficulty}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground font-mono">{model.tagline}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Type</h4>
            <Badge variant="outline">{model.type}</Badge>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Description</h4>
            <p className="text-sm text-muted-foreground">{model.description}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Hardware Requirements</h4>
            <p className="text-sm">{model.hardwareRequirements}</p>
          </div>
          <div className="pt-4 flex gap-2">
            <Link
              href={model.repoLink}
              className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              target="_blank"
            >
              View Repository
            </Link>
            <Link
              href={model.downloadLink}
              className="text-sm px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
              target="_blank"
            >
              Download
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
