type IconProps = { className?: string };

const base = "none";

function Svg({
  className = "",
  children,
  strokeWidth = 1.6,
}: {
  className?: string;
  children: React.ReactNode;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill={base}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function TeamIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth={1.8}>
      <circle cx="12" cy="11" r="4.2" />
      <path d="M4.6 25.4c.5-4.3 3.7-6.8 7.4-6.8s6.9 2.5 7.4 6.8" />
      <circle cx="23.2" cy="12.4" r="3.2" />
      <path d="M20.4 18.6c3.2-.4 6.2 1.9 6.7 5.6" />
    </Svg>
  );
}

export function SupportIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth={1.8}>
      <path d="M7 18.4v-3.6a9 9 0 0 1 18 0v3.6" />
      <rect x="4.2" y="17.2" width="5.2" height="8" rx="2.2" />
      <rect x="22.6" y="17.2" width="5.2" height="8" rx="2.2" />
      <path d="M25.2 25.2v.8a3.2 3.2 0 0 1-3.2 3.2H16" />
    </Svg>
  );
}

export function RatesIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth={1.8}>
      <path d="M16.6 4.6 28 15.9a1.6 1.6 0 0 1 0 2.3l-6 6a1.6 1.6 0 0 1-2.3 0L8.4 12.9V6.6a2 2 0 0 1 2-2z" />
      <circle cx="14" cy="12" r="1.9" />
    </Svg>
  );
}

export function ShipIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3.6 20.4h24.8l-3.1 6.2a3 3 0 0 1-2.7 1.6H9.4a3 3 0 0 1-2.7-1.6z" />
      <path d="M7 20.4V13h18v7.4" />
      <path d="M11.4 13V8.4h9.2V13" />
      <path d="M16 8.4V4.4" />
      <path d="M16 20.4v-4" />
    </Svg>
  );
}

export function PlaneIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3.4 17.6 28 7.2l-3.4 19.4-6.6-6.2-4.4 5.2-1-7.4z" />
      <path d="M12.6 18.2 24.6 11" />
    </Svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M2.8 8.6h14.6v13.2H2.8z" />
      <path d="M17.4 13.2h5.4l4 4.4v4.2h-9.4z" />
      <circle cx="8.4" cy="24.6" r="2.6" />
      <circle cx="22.6" cy="24.6" r="2.6" />
      <path d="M11 24.6h9" />
    </Svg>
  );
}

export function HeavyIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M2.6 21.4h20.8l-2.8 5.4H5.6a2.4 2.4 0 0 1-2.2-1.4z" />
      <path d="M6 21.4v-4.6h14.2v4.6" />
      <path d="M10.4 16.8V12h5.6v4.8" />
      <path d="M13.2 12V6.6" />
      <path d="M13.2 6.6 9.8 9.4M13.2 6.6l3.4 2.8" />
      <path d="M23.4 21.4h5.8" />
    </Svg>
  );
}

export function CarIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4.2 19.8 6.6 11a3 3 0 0 1 2.9-2.2h12.8a3 3 0 0 1 2.9 2.2l2.4 8.8" />
      <path d="M2.8 19.8h26.2v5.4H2.8z" />
      <circle cx="9" cy="25.4" r="2.2" />
      <circle cx="23" cy="25.4" r="2.2" />
      <path d="M6.4 19.8h19" />
    </Svg>
  );
}

export function ContainerIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M2.8 20.2h26.4l-2.4 5.2H5.2z" />
      <path d="M7 20.2v-4.8h18v4.8" />
      <path d="M11.2 15.4V8.4h9.6v7" />
      <path d="M16 8.4V4.6" />
    </Svg>
  );
}

export function WarehouseIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3.2 13.6 16 5.2l12.8 8.4V27H3.2z" />
      <path d="M10.4 27v-8.2h11.2V27" />
      <path d="M10.4 22.4h11.2" />
    </Svg>
  );
}

export function RailIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 5.4h16a2.4 2.4 0 0 1 2.4 2.4v12.4H5.6V7.8A2.4 2.4 0 0 1 8 5.4z" />
      <path d="M5.6 15.8h20.8" />
      <path d="M11 5.4v10.4M21 5.4v10.4" />
      <path d="M5.6 20.2 2.8 27.2M26.4 20.2l2.8 7" />
      <path d="M4.4 24.6h23.2" />
    </Svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3 8h9.5M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M8 3.2v9.6M3.2 8h9.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MinusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M3.2 8h9.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
