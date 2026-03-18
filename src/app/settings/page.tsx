'use client';

import { useState } from 'react';
import Image from 'next/image';
import AdminLayout from '@/components/layout/AdminLayout';
import { BellIcon, ShieldIcon, UsersIcon, DevicesIcon } from '@/components/icons';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: UsersIcon },
    { id: 'notifications', label: 'Notifications', icon: BellIcon },
    { id: 'security', label: 'Security', icon: ShieldIcon },
    { id: 'devices', label: 'Device Settings', icon: DevicesIcon },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
          <p className="text-slate-500">Manage your account and system preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tabs Sidebar */}
          <div className="lg:w-64">
            <div className="card p-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-primary text-white'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {activeTab === 'profile' && (
              <div className="card">
                <h2 className="text-lg font-semibold text-slate-800 mb-6">Profile Settings</h2>

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <button className="btn-gradient text-sm">Change Photo</button>
                    <p className="text-xs text-slate-500 mt-2">JPG, PNG or GIF. Max 2MB.</p>
                  </div>
                </div>

                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Carlos"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Rodriguez"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="carlos@smartadmin.com"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 234 567 890"
                      className="input-field"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      defaultValue="System administrator with 10+ years of experience in smart home solutions."
                      className="input-field resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-slate-100">
                  <button className="btn-outline">Cancel</button>
                  <button className="btn-gradient">Save Changes</button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="card">
                <h2 className="text-lg font-semibold text-slate-800 mb-6">Notification Preferences</h2>

                <div className="space-y-6">
                  {[
                    { title: 'Email Notifications', desc: 'Receive email updates about your account' },
                    { title: 'Push Notifications', desc: 'Receive push notifications on your devices' },
                    { title: 'Device Alerts', desc: 'Get notified when a device goes offline' },
                    { title: 'Survey Responses', desc: 'Receive alerts for new survey responses' },
                    { title: 'Security Alerts', desc: 'Get notified about security events' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0">
                      <div>
                        <h3 className="font-medium text-slate-800">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={index < 3} className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:ring-2 peer-focus:ring-primary-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="card">
                  <h2 className="text-lg font-semibold text-slate-800 mb-6">Change Password</h2>
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Password
                      </label>
                      <input type="password" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        New Password
                      </label>
                      <input type="password" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Confirm New Password
                      </label>
                      <input type="password" className="input-field" />
                    </div>
                    <button className="btn-gradient">Update Password</button>
                  </div>
                </div>

                <div className="card">
                  <h2 className="text-lg font-semibold text-slate-800 mb-6">Two-Factor Authentication</h2>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-700">Protect your account with 2FA</p>
                      <p className="text-sm text-slate-500">Add an extra layer of security</p>
                    </div>
                    <button className="btn-outline">Enable 2FA</button>
                  </div>
                </div>

                <div className="card">
                  <h2 className="text-lg font-semibold text-slate-800 mb-6">Active Sessions</h2>
                  <div className="space-y-4">
                    {[
                      { device: 'Chrome on Windows', location: 'New York, USA', current: true },
                      { device: 'Safari on iPhone', location: 'New York, USA', current: false },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-800">
                            {session.device}
                            {session.current && (
                              <span className="ml-2 text-xs text-green-600">(Current)</span>
                            )}
                          </p>
                          <p className="text-sm text-slate-500">{session.location}</p>
                        </div>
                        {!session.current && (
                          <button className="text-sm text-red-600 hover:text-red-700">
                            Revoke
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'devices' && (
              <div className="card">
                <h2 className="text-lg font-semibold text-slate-800 mb-6">Device Settings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-slate-800 mb-4">Default Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Default Temperature Unit
                        </label>
                        <select className="input-field">
                          <option>Celsius (°C)</option>
                          <option>Fahrenheit (°F)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Auto-sync Interval
                        </label>
                        <select className="input-field">
                          <option>Every 5 minutes</option>
                          <option>Every 15 minutes</option>
                          <option>Every 30 minutes</option>
                          <option>Every hour</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <h3 className="font-medium text-slate-800 mb-4">Device Alerts</h3>
                    {[
                      { title: 'Offline Alert Threshold', desc: 'Alert after device is offline for', value: '5 minutes' },
                      { title: 'Low Battery Alert', desc: 'Alert when battery drops below', value: '20%' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
                        <div>
                          <p className="font-medium text-slate-700">{item.title}</p>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                        <select className="input-field w-32">
                          <option>{item.value}</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-slate-100">
                  <button className="btn-outline">Reset to Defaults</button>
                  <button className="btn-gradient">Save Settings</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
