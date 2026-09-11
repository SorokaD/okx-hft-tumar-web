import { Pipeline } from "@/components/architecture/Pipeline";
import { Hero } from "@/components/home/Hero";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ResearchFlow } from "@/components/research/ResearchFlow";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <ResearchFlow />
      <Pipeline />
    </>
  );
}
