import { TrendingUpIcon, TrendingDownIcon } from '../icons';

interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  iconBgColor?: string;
}

export default function StatCard({
  title,
  value,
  change,
  icon,
  iconBgColor = 'bg-primary-100',
}: StatCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-slate-800">{value}</p>
          <div className="flex items-center gap-1 mt-2">
            {isPositive ? (
              <TrendingUpIcon className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDownIcon className="w-4 h-4 text-red-500" />
            )}
            <span
              className={`text-sm font-medium ${
                isPositive ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {isPositive ? '+' : ''}{change}%
            </span>
            <span className="text-xs text-slate-400">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-xl ${iconBgColor}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
