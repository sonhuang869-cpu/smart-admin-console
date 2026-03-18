'use client';

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: DataPoint[];
  size?: number;
}

export default function DonutChart({ data, size = 200 }: DonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  let currentOffset = 0;

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox="0 0 100 100">
        {data.map((d, i) => {
          const percentage = d.value / total;
          const strokeLength = circumference * percentage;
          const strokeOffset = circumference * currentOffset;
          currentOffset += percentage;

          return (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth="12"
              strokeDasharray={`${strokeLength} ${circumference - strokeLength}`}
              strokeDashoffset={-strokeOffset}
              transform="rotate(-90 50 50)"
              className="transition-all duration-500"
            />
          );
        })}
        {/* Center text */}
        <text
          x="50"
          y="47"
          textAnchor="middle"
          className="text-2xl font-bold fill-slate-800"
        >
          {total}
        </text>
        <text
          x="50"
          y="58"
          textAnchor="middle"
          className="text-xs fill-slate-500"
        >
          Total
        </text>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            <span className="text-sm text-slate-600">
              {d.label} ({d.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
