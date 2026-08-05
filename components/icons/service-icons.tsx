type IconProps = {
  className?: string;
};

function baseProps(className: string | undefined) {
  return {
    className: className ?? "h-7 w-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
}

export function IconDiagnostico({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <rect x="3" y="4" width="18" height="14" rx="1.5" />
      <path d="M8 20h8" />
      <path d="M7 9h4M7 12h6M7 15h3" />
      <circle cx="16.5" cy="11.5" r="1.5" />
    </svg>
  );
}

export function IconFrenos({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
    </svg>
  );
}

export function IconMotor({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path d="M4 10h3l2-3h4l2 3h3v7H4v-7Z" />
      <path d="M9 14h6" />
      <path d="M18 12h2v3h-2" />
    </svg>
  );
}

export function IconElectrico({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path d="M13 2 6 13h5l-1 9 8-12h-5l0-8Z" />
    </svg>
  );
}

export function IconAfinacion({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path d="M14.7 6.3a4.5 4.5 0 0 0-6.4 6.4L4 17v3h3l4.3-4.3a4.5 4.5 0 0 0 6.4-6.4l-2.1 2.1-1.9-1.9 2-2.1Z" />
    </svg>
  );
}

export function IconClima({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path d="M12 3v18M5.5 6.5l13 11M5.5 17.5l13-11" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export const SERVICE_ICONS = {
  diagnostico: IconDiagnostico,
  frenos: IconFrenos,
  motor: IconMotor,
  electrico: IconElectrico,
  afinacion: IconAfinacion,
  clima: IconClima,
} as const;
