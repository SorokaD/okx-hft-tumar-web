import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
};

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background hover:bg-neutral-800",
  secondary:
    "border border-neutral-300 text-foreground hover:border-accent",
};

const baseClassName =
  "inline-flex items-center justify-center px-5 py-2.5 text-sm tracking-wide transition-colors";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonLinkProps) {
  const className = `${baseClassName} ${variantClassName[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
