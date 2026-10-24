import Image from "next/image";

export default function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={tone === "light" ? "/images/eastway-mark-light.png" : "/images/eastway-mark.png"}
        alt=""
        aria-hidden="true"
        width={320}
        height={284}
        className="h-7 w-auto shrink-0"
      />
      <span
        className={`text-[22px] font-black uppercase leading-none tracking-[0.04em] ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        Eastway
      </span>
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/eastway-mark.png"
      alt="EASTWAY"
      width={320}
      height={284}
      className={className}
    />
  );
}
