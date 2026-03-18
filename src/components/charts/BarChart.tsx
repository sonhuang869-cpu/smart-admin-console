'use client';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  data: DataPoint[];
  height?: number;
}

export default function BarChart({ data, height = 200 }: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="w-full" style={{ height }}>
      <div className="flex items-end justify-around h-full gap-2">
        {data.map((d, i) => {
          const barHeight = (d.value / maxValue) * 100;
          return (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className="relative w-full flex justify-center">
                <div
                  className="w-8 md:w-12 rounded-t-lg transition-all duration-500 hover:opacity-80"
                  style={{
                    height: `${barHeight}%`,
                    minHeight: '20px',
                    background: d.color || 'linear-gradient(180deg, #1e40af 0%, #06b6d4 100%)',
                  }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-600">
                    {d.value}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-around mt-2">
        {data.map((d, i) => (
          <span key={i} className="text-xs text-slate-500 text-center flex-1">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}
