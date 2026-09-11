import type { LiveStatusCard } from "@/types";

type SystemStatusCardProps = {
  card: LiveStatusCard;
};

export function SystemStatusCard({ card }: SystemStatusCardProps) {
  return (
    <article className="border border-border bg-surface px-4 py-4">
      <h3 className="text-xs uppercase tracking-[0.14em] text-muted">{card.title}</h3>
      <p
        className={`mt-3 font-mono text-lg tabular-nums ${
          card.accent ? "text-accent" : "text-foreground"
        }`}
      >
        {card.primary.display}
      </p>
      <p className="mt-1 text-xs text-muted">{card.primary.label}</p>
      {card.secondary ? (
        <p className="mt-3 flex justify-between gap-3 text-xs">
          <span className="text-muted">{card.secondary.label}</span>
          <span className="font-mono text-foreground">{card.secondary.display}</span>
        </p>
      ) : null}
    </article>
  );
}
