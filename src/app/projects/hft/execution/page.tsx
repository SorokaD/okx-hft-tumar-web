import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Execution",
};

export default function HftExecutionPage() {
  return (
    <ComingSoon
      title="Execution"
      description="Execution experiments and friction analysis are not published yet."
    />
  );
}
