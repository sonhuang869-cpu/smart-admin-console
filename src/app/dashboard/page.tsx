'use client';

import Image from 'next/image';
import AdminLayout from '@/components/layout/AdminLayout';
import StatCard from '@/components/ui/StatCard';
import AreaChart from '@/components/charts/AreaChart';
import DonutChart from '@/components/charts/DonutChart';
import {
  UsersIcon,
  DevicesIcon,
  SurveyIcon,
  AlertCircleIcon,
  CheckCircleIcon,
} from '@/components/icons';
import { analyticsData, monthlyData, deviceTypeData, recentActivities } from '@/data/mockData';

export default function DashboardPage() {
  const chartData = monthlyData.map((d) => ({
    label: d.month,
    value: d.users,
  }));

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-slate-500">Welcome back! Here&apos;s what&apos;s happening.</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-outline text-sm">Download Report</button>
            <button className="btn-gradient text-sm">Add Device</button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Users"
            value={analyticsData.totalUsers.toLocaleString()}
            change={analyticsData.userGrowth}
            icon={<UsersIcon className="w-6 h-6 text-primary-600" />}
            iconBgColor="bg-primary-100"
          />
          <StatCard
            title="Active Devices"
            value={analyticsData.activeDevices.toLocaleString()}
            change={analyticsData.deviceUptime}
            icon={<DevicesIcon className="w-6 h-6 text-secondary-600" />}
            iconBgColor="bg-secondary-100"
          />
          <StatCard
            title="Survey Responses"
            value={analyticsData.surveyResponses.toLocaleString()}
            change={analyticsData.responseRate}
            icon={<SurveyIcon className="w-6 h-6 text-green-600" />}
            iconBgColor="bg-green-100"
          />
          <StatCard
            title="Alerts Today"
            value={analyticsData.alertsToday}
            change={analyticsData.alertReduction}
            icon={<AlertCircleIcon className="w-6 h-6 text-orange-600" />}
            iconBgColor="bg-orange-100"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Growth Chart */}
          <div className="lg:col-span-2 card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-800">User Growth</h2>
              <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-primary-500">
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>All time</option>
              </select>
            </div>
            <AreaChart data={chartData} height={250} color="#1e40af" />
          </div>

          {/* Device Types Chart */}
          <div className="card">
            <h2 className="text-lg font-semibold text-slate-800 mb-6">Device Types</h2>
            <DonutChart
              data={deviceTypeData.map((d) => ({
                label: d.type,
                value: d.count,
                color: d.color,
              }))}
              size={180}
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="card">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div
                    className={`p-2 rounded-full ${
                      activity.status === 'success'
                        ? 'bg-green-100'
                        : activity.status === 'warning'
                        ? 'bg-yellow-100'
                        : 'bg-red-100'
                    }`}
                  >
                    {activity.status === 'success' ? (
                      <CheckCircleIcon
                        className={`w-4 h-4 ${
                          activity.status === 'success'
                            ? 'text-green-600'
                            : activity.status === 'warning'
                            ? 'text-yellow-600'
                            : 'text-red-600'
                        }`}
                      />
                    ) : (
                      <AlertCircleIcon
                        className={`w-4 h-4 ${
                          activity.status === 'warning'
                            ? 'text-yellow-600'
                            : 'text-red-600'
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-700">{activity.message}</p>
                    <p className="text-xs text-slate-400 mt-1">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions & Map Preview */}
          <div className="card relative overflow-hidden">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Smart Home Overview</h2>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop"
                alt="Smart Home"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium">Connected Devices</p>
                <p className="text-white/80 text-sm">8 devices online, 2 need attention</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button className="btn-gradient text-sm">View All Devices</button>
              <button className="btn-outline text-sm">Run Diagnostics</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
