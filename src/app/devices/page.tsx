'use client';

import { useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import Badge from '@/components/ui/Badge';
import Modal from '@/components/ui/Modal';
import {
  PlusIcon,
  CameraIcon,
  LightbulbIcon,
  ThermometerIcon,
  ShieldIcon,
  WifiIcon,
  PowerIcon,
  SettingsIcon,
} from '@/components/icons';
import { devices, Device } from '@/data/mockData';

const deviceIcons: Record<string, React.ReactNode> = {
  camera: <CameraIcon className="w-8 h-8" />,
  light: <LightbulbIcon className="w-8 h-8" />,
  thermostat: <ThermometerIcon className="w-8 h-8" />,
  alarm: <ShieldIcon className="w-8 h-8" />,
  sensor: <WifiIcon className="w-8 h-8" />,
};

export default function DevicesPage() {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<string>('all');

  const filteredDevices =
    filter === 'all' ? devices : devices.filter((d) => d.type === filter);

  const deviceStats = {
    online: devices.filter((d) => d.status === 'online').length,
    offline: devices.filter((d) => d.status === 'offline').length,
    warning: devices.filter((d) => d.status === 'warning').length,
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Devices Management</h1>
            <p className="text-slate-500">Monitor and control your smart devices</p>
          </div>
          <button className="btn-gradient flex items-center gap-2">
            <PlusIcon className="w-5 h-5" />
            Add Device
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="card">
            <p className="text-sm text-slate-500">Total Devices</p>
            <p className="text-2xl font-bold text-slate-800">{devices.length}</p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="text-sm text-slate-500">Online</p>
            </div>
            <p className="text-2xl font-bold text-green-600">{deviceStats.online}</p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <p className="text-sm text-slate-500">Warning</p>
            </div>
            <p className="text-2xl font-bold text-yellow-600">{deviceStats.warning}</p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <p className="text-sm text-slate-500">Offline</p>
            </div>
            <p className="text-2xl font-bold text-red-600">{deviceStats.offline}</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {['all', 'camera', 'sensor', 'light', 'thermostat', 'alarm'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === type
                  ? 'bg-gradient-primary text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
              {type !== 'all' && (
                <span className="ml-2 text-xs opacity-75">
                  ({devices.filter((d) => d.type === type).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredDevices.map((device) => (
            <div
              key={device.id}
              className="card cursor-pointer hover:border-primary-200 border border-transparent"
              onClick={() => {
                setSelectedDevice(device);
                setIsModalOpen(true);
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl ${
                    device.status === 'online'
                      ? 'bg-green-100 text-green-600'
                      : device.status === 'warning'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {deviceIcons[device.type]}
                </div>
                <Badge
                  variant={
                    device.status === 'online'
                      ? 'success'
                      : device.status === 'warning'
                      ? 'warning'
                      : 'error'
                  }
                >
                  {device.status}
                </Badge>
              </div>

              <h3 className="font-semibold text-slate-800 mb-1">{device.name}</h3>
              <p className="text-sm text-slate-500 mb-3">{device.location}</p>

              {device.value && (
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-500">Current Value</span>
                  <span className="font-semibold text-slate-800">{device.value}</span>
                </div>
              )}

              <p className="text-xs text-slate-400 mt-3">
                Last activity: {device.lastActivity}
              </p>
            </div>
          ))}
        </div>

        {/* Device Details Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Device Details"
        >
          {selectedDevice && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className={`p-4 rounded-xl ${
                    selectedDevice.status === 'online'
                      ? 'bg-green-100 text-green-600'
                      : selectedDevice.status === 'warning'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {deviceIcons[selectedDevice.type]}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {selectedDevice.name}
                  </h3>
                  <p className="text-slate-500">{selectedDevice.location}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Type</p>
                  <p className="font-medium text-slate-800">
                    {selectedDevice.type.charAt(0).toUpperCase() +
                      selectedDevice.type.slice(1)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  <Badge
                    variant={
                      selectedDevice.status === 'online'
                        ? 'success'
                        : selectedDevice.status === 'warning'
                        ? 'warning'
                        : 'error'
                    }
                  >
                    {selectedDevice.status}
                  </Badge>
                </div>
                {selectedDevice.value && (
                  <div>
                    <p className="text-sm text-slate-500">Current Value</p>
                    <p className="font-medium text-slate-800">{selectedDevice.value}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-slate-500">Last Activity</p>
                  <p className="font-medium text-slate-800">
                    {selectedDevice.lastActivity}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="btn-gradient flex items-center justify-center gap-2 flex-1">
                  <PowerIcon className="w-4 h-4" />
                  Toggle Power
                </button>
                <button className="btn-outline flex items-center justify-center gap-2 flex-1">
                  <SettingsIcon className="w-4 h-4" />
                  Configure
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </AdminLayout>
  );
}
