'use client';

interface DataPoint {
  label: string;
  value: number;
}

interface AreaChartProps {
  data: DataPoint[];
  height?: number;
  color?: string;
}

export default function AreaChart({ data, height = 200, color = '#1e40af' }: AreaChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const range = maxValue - minValue || 1;

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((d.value - minValue) / range) * 80 - 10;
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `0,100 ${points} 100,100`;

  return (
    <div className="w-full" style={{ height }}>
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="#e2e8f0"
            strokeWidth="0.5"
          />
        ))}

        {/* Area fill */}
        <polygon
          points={areaPoints}
          fill={`url(#gradient-${color.replace('#', '')})`}
          opacity="0.3"
        />

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Dots */}
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * 100;
          const y = 100 - ((d.value - minValue) / range) * 80 - 10;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="2"
              fill="white"
              stroke={color}
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}

        {/* Gradient definition */}
        <defs>
          <linearGradient
            id={`gradient-${color.replace('#', '')}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Labels */}
      <div className="flex justify-between mt-2">
        {data.map((d, i) => (
          <span key={i} className="text-xs text-slate-500">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}
