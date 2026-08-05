import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> =
  {
    primary:
      "bg-naranja-senal text-grafito hover:bg-ambar-taller focus-visible:outline-naranja-senal",
    secondary:
      "border border-hueso/30 bg-transparent text-hueso hover:border-naranja-senal hover:text-naranja-senal focus-visible:outline-naranja-senal",
    ghost:
      "bg-transparent text-hueso hover:text-naranja-senal focus-visible:outline-naranja-senal",
  };

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 font-sans text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <ButtonLink
      href={`tel:${SITE.phoneTel}`}
      variant="secondary"
      className={className}
    >
      Llamar {SITE.phoneDisplay}
    </ButtonLink>
  );
}

export function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <ButtonLink
      href={SITE.whatsappUrl}
      variant="primary"
      external
      className={className}
    >
      WhatsApp
    </ButtonLink>
  );
}
