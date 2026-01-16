import PortfolioDetailClient from "./PortfolioDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}


const portfolioData: Record<string, { title: string; image: string }> = {
  "studio-portrait": {
    title: "Studio Portrait",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=3200&q=90",
  },
  "behind-the-scenes": {
    title: "Behind The Scenes",
    image:
      "https://images.unsplash.com/photo-1574684214713-edc86c5eddc1?auto=format&fit=crop&w=3200&q=90",
  },
  "studio-atmosphere": {
    title: "Studio Atmosphere",
    image:
      "https://images.unsplash.com/photo-1622842182823-28bfbfba47e3?auto=format&fit=crop&w=3200&q=90",
  },
  "natural-light": {
    title: "Natural Light",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=3200&q=90",
  },
  "creative-session": {
    title: "Creative Session",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=3200&q=90",
  },
  "black-white-story": {
    title: "Black & White Story",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=3200&q=90",
  },
  "quiet-moment": {
    title: "Quiet Moment",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=3200&q=90",
  },
};


export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = portfolioData[slug];

  
  if (!project) {
    return null; 
  }

  return (
    <PortfolioDetailClient
      title={project.title}
      image={project.image}
    />
  );
}
