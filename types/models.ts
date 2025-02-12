export type AIModel = {
  slug: string;
  modelName: string;
  repoLink: string;
  tagline: string;
  description: string;
  type: string;
  difficulty: "Easy" | "Medium" | "Hard";
  useCases: string;
  hardwareRequirements: string;
  instructions: string;
  exampleUsage: string;
  downloadLink: string;
  demoMediaUrl: string;
  ethicalUse: string;
  additionalResources: string;
};
