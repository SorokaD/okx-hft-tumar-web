import type { Metadata } from "next";
import { ExecutionMetrics } from "@/components/hft/live/ExecutionMetrics";
import { LiveChart } from "@/components/hft/live/LiveChart";
import { LiveModelTable } from "@/components/hft/live/LiveModelTable";
import { LiveStatusBar } from "@/components/hft/live/LiveStatusBar";
import { ResearchMetrics } from "@/components/hft/live/ResearchMetrics";
import { SystemStatusCard } from "@/components/hft/live/SystemStatusCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getLiveHftDashboard } from "@/lib/api/hft";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Live HFT Research",
  description:
    "Realtime monitoring of market data, model predictions and execution experiments.",
};

export default function HftLivePage() {
  const dashboard = getLiveHftDashboard();
  const supersetUrl = siteConfig.supersetPublicUrl;

  return (
    <div className="pb-16">
      <section className="pt-10 pb-8 md:pt-12">
        <Container wide>
          <LiveStatusBar status={dashboard.status} />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {dashboard.statusCards.map((card) => (
              <SystemStatusCard key={card.title} card={card} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-10 md:py-12">
        <Container wide>
          <h2 className="mb-6 text-xl tracking-tight text-foreground">
            Live model outputs
          </h2>
          <LiveModelTable rows={dashboard.models} />
          <p className="mt-3 text-xs text-muted">
            Signal columns are current model outputs, not trade recommendations.
          </p>
        </Container>
      </section>

      <section className="border-t border-border py-10 md:py-12">
        <Container wide>
          <h2 className="mb-6 text-xl tracking-tight text-foreground">
            Realtime telemetry
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {dashboard.charts.map((chart) => (
              <LiveChart key={chart.id} chart={chart} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-10 md:py-12">
        <Container wide>
          <div className="grid gap-4 lg:grid-cols-2">
            <ResearchMetrics metrics={dashboard.research} />
            <ExecutionMetrics metrics={dashboard.execution} />
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-10 md:py-12">
        <Container wide>
          <h2 className="text-xl tracking-tight text-foreground">
            Deep Research Dashboard
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted">
            Explore detailed realtime analytics and historical experiments.
          </p>
          {supersetUrl ? (
            <div className="mt-6">
              <ButtonLink href={supersetUrl} external>
                Open Full Dashboard
              </ButtonLink>
            </div>
          ) : (
            <p className="mt-6 text-sm text-muted">
              Full dashboard is not published yet.
            </p>
          )}
        </Container>
      </section>

      <Container wide>
        <p className="border-t border-border pt-6 text-xs leading-5 text-muted">
          This page shows experimental research metrics and system telemetry. It
          is not financial advice.
        </p>
      </Container>
    </div>
  );
}
