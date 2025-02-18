export interface HeroContent {
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  badge?: string;
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
}
