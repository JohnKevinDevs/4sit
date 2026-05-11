import { cn } from "@/lib/utils";

interface ConstellationProps {
  className?: string;
}

const points = [
  [20, 34],
  [54, 20],
  [92, 46],
  [130, 30],
  [166, 58],
  [210, 26],
  [246, 64],
  [282, 38],
  [326, 74],
  [362, 42],
  [406, 82],
  [438, 52],
  [474, 92],
  [512, 68],
  [548, 108],
  [584, 84],
] as const;

const lines = [
  [0, 1],
  [1, 2],
  [2, 3],
  [4, 5],
  [5, 6],
  [7, 8],
  [8, 9],
  [10, 11],
  [11, 12],
  [13, 14],
  [14, 15],
] as const;

export function Constellation({ className }: ConstellationProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute text-neon", className)}
      viewBox="0 0 604 132"
      fill="none"
    >
      {lines.map(([from, to]) => (
        <line
          key={`${from}-${to}`}
          x1={points[from][0]}
          y1={points[from][1]}
          x2={points[to][0]}
          y2={points[to][1]}
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
      ))}
      {points.map(([cx, cy], index) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={index % 5 === 0 ? 2.4 : 1.8}
          fill="currentColor"
          fillOpacity={index % 4 === 0 ? 0.42 : 0.28}
        />
      ))}
    </svg>
  );
}
