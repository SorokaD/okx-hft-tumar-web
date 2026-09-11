import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <ComingSoon
      title="Projects"
      description="A catalog of data, machine learning and engineering projects will appear here."
    />
  );
}
