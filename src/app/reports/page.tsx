'use client';

import AdminLayout from '@/components/layout/AdminLayout';
import AreaChart from '@/components/charts/AreaChart';
import BarChart from '@/components/charts/BarChart';
import DonutChart from '@/components/charts/DonutChart';
import { DownloadIcon, CalendarIcon, FilterIcon } from '@/components/icons';
import { monthlyData, deviceTypeData, analyticsData } from '@/data/mockData';

export default function ReportsPage() {
  const userChartData = monthlyData.map((d) => ({
    label: d.month,
    value: d.users,
  }));

  const deviceChartData = monthlyData.map((d) => ({
    label: d.month,
    value: d.devices,
  }));

  const responseChartData = monthlyData.map((d) => ({
    label: d.month,
    value: d.responses,
  }));

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Reports & Analytics</h1>
            <p className="text-slate-500">View detailed analytics and generate reports</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-outline flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Date Range
            </button>
            <button className="btn-outline flex items-center gap-2">
              <FilterIcon className="w-5 h-5" />
              Filter
            </button>
            <button className="btn-gradient flex items-center gap-2">
              <DownloadIcon className="w-5 h-5" />
              Export
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card text-center">
            <p className="text-3xl font-bold gradient-text">{analyticsData.totalUsers.toLocaleString()}</p>
            <p className="text-sm text-slate-500 mt-1">Total Users</p>
            <p className="text-xs text-green-500 mt-2">+{analyticsData.userGrowth}% from last month</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold gradient-text">{analyticsData.activeDevices.toLocaleString()}</p>
            <p className="text-sm text-slate-500 mt-1">Active Devices</p>
            <p className="text-xs text-green-500 mt-2">{analyticsData.deviceUptime}% uptime</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold gradient-text">{analyticsData.surveyResponses.toLocaleString()}</p>
            <p className="text-sm text-slate-500 mt-1">Survey Responses</p>
            <p className="text-xs text-green-500 mt-2">{analyticsData.responseRate}% response rate</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold gradient-text">{analyticsData.alertsToday}</p>
            <p className="text-sm text-slate-500 mt-1">Alerts Today</p>
            <p className="text-xs text-green-500 mt-2">{analyticsData.alertReduction}% vs yesterday</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Growth */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-800">User Growth Trend</h3>
              <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none">
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
            </div>
            <AreaChart data={userChartData} height={250} color="#1e40af" />
          </div>

          {/* Device Activity */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-800">Device Activity</h3>
              <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none">
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
            </div>
            <AreaChart data={deviceChartData} height={250} color="#06b6d4" />
          </div>

          {/* Survey Responses */}
          <div className="card">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Monthly Survey Responses
            </h3>
            <BarChart data={responseChartData} height={250} />
          </div>

          {/* Device Distribution */}
          <div className="card">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Device Type Distribution
            </h3>
            <DonutChart
              data={deviceTypeData.map((d) => ({
                label: d.type,
                value: d.count,
                color: d.color,
              }))}
              size={200}
            />
          </div>
        </div>

        {/* Recent Reports */}
        <div className="card">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Reports</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="table-header">Report Name</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">Generated</th>
                  <th className="table-header">Size</th>
                  <th className="table-header">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Monthly User Report', type: 'Users', date: '2026-03-15', size: '2.4 MB' },
                  { name: 'Device Status Report', type: 'Devices', date: '2026-03-14', size: '1.8 MB' },
                  { name: 'Survey Analysis Q1', type: 'Surveys', date: '2026-03-10', size: '3.2 MB' },
                  { name: 'System Health Report', type: 'System', date: '2026-03-08', size: '1.1 MB' },
                ].map((report, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="table-cell font-medium text-slate-800">{report.name}</td>
                    <td className="table-cell">{report.type}</td>
                    <td className="table-cell">{report.date}</td>
                    <td className="table-cell">{report.size}</td>
                    <td className="table-cell">
                      <button className="flex items-center gap-1 text-primary-600 hover:text-primary-700">
                        <DownloadIcon className="w-4 h-4" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
