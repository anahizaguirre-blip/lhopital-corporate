import { WATS_PATHS } from "@/lib/wats-paths";

const GOLD = "#C9A84C";
const BG = "#111111";
const TEXT = "#F5F5F5";
const MUTED = "#8A8A8A";

type Props = {
  // "full": tarjeta completa con lema y LHOPITAL. "mark": solo el emblema octagonal.
  variant?: "full" | "mark";
  animated?: boolean;
  className?: string;
  title?: string;
};

// Sello WATS reconstruido: geometría original, letras como trazos (sin <text>, sin máscara).
// Las letras llevan un halo del color de fondo que corta las líneas finas detrás de ellas.
export default function WatsSeal({ variant = "full", animated = false, className, title }: Props) {
  const viewBox = variant === "mark" ? "140 40 400 390" : "0 0 680 560";
  const geo = animated ? "wats-fade wats-fade--geometry" : undefined;
  const letters = animated ? "wats-fade wats-fade--letters" : undefined;
  const halo = { stroke: BG, strokeWidth: 7, strokeLinejoin: "round" as const, paintOrder: "stroke" };

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {variant === "full" && (
        <g className={geo}>
          <rect x="30" y="20" width="620" height="2" fill={GOLD} opacity=".9" />
          <rect x="30" y="538" width="620" height="2" fill={GOLD} opacity=".9" />
          <g fill="none" stroke={GOLD} strokeWidth=".8" opacity=".6">
            <polyline points="68,48 48,48 48,68" />
            <polyline points="612,48 632,48 632,68" />
            <polyline points="68,512 48,512 48,492" />
            <polyline points="612,512 632,512 632,492" />
          </g>
        </g>
      )}

      <g fill="none" stroke={GOLD} className={geo}>
        <polygon points="340,50 480,95 530,235 480,375 340,420 200,375 150,235 200,95" strokeWidth=".8" />
        <polygon
          points="340,68 462,106 508,228 462,350 340,388 218,350 172,228 218,106"
          strokeWidth=".4"
          opacity=".5"
        />
        <circle cx="340" cy="235" r="148" strokeWidth=".5" opacity=".4" />
      </g>

      <polygon points="340,78 480,235 340,392 200,235" fill={BG} />
      <polygon
        points="340,78 480,235 340,392 200,235"
        fill="none"
        stroke={GOLD}
        strokeWidth="1.2"
        pathLength={1}
        className={animated ? "wats-draw" : undefined}
      />

      <g fill="none" stroke={GOLD} className={geo}>
        <polygon points="340,98 460,235 340,372 220,235" strokeWidth=".4" opacity=".4" />
        <line x1="340" y1="78" x2="340" y2="392" strokeWidth=".4" opacity=".3" />
        <line x1="200" y1="235" x2="480" y2="235" strokeWidth=".4" opacity=".3" />
        <line x1="255" y1="152" x2="425" y2="318" strokeWidth=".3" opacity=".2" />
        <line x1="425" y1="152" x2="255" y2="318" strokeWidth=".3" opacity=".2" />
        <line x1="228" y1="235" x2="452" y2="235" strokeWidth=".8" />
        <line x1="340" y1="118" x2="340" y2="352" strokeWidth=".8" opacity=".7" />
      </g>

      <g className={letters}>
        <path d={WATS_PATHS.W} fill={TEXT} {...halo} />
        <path d={WATS_PATHS.A} fill={GOLD} {...halo} />
        <path d={WATS_PATHS.T} fill={GOLD} {...halo} />
        <path d={WATS_PATHS.S} fill={TEXT} {...halo} />
      </g>

      <g fill={GOLD} className={geo}>
        <polygon points="340,78 346,85 340,92 334,85" />
        <polygon points="340,378 346,385 340,392 334,385" />
        <polygon points="200,235 207,228 214,235 207,242" />
        <polygon points="466,235 473,228 480,235 473,242" />
        <g opacity=".6">
          <polygon points="270,156 273,160 270,164 267,160" />
          <polygon points="410,156 413,160 410,164 407,160" />
          <polygon points="270,306 273,310 270,314 267,310" />
          <polygon points="410,306 413,310 410,314 407,310" />
        </g>
      </g>

      {variant === "full" && (
        <g className={letters}>
          <g fill={GOLD}>
            <path d={WATS_PATHS.tagline} />
            <circle cx="148" cy="441" r="1.8" opacity=".7" />
            <circle cx="532" cy="441" r="1.8" opacity=".7" />
          </g>
          <g stroke={GOLD} strokeWidth=".4" opacity=".4">
            <line x1="70" y1="478" x2="230" y2="478" />
            <line x1="450" y1="478" x2="610" y2="478" />
          </g>
          <path d={WATS_PATHS.brand} fill={MUTED} />
        </g>
      )}
    </svg>
  );
}
