'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MenuIcon, BellIcon, SearchIcon, ChevronDownIcon } from '../icons';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, message: 'New device connected', time: '2 min ago' },
    { id: 2, message: 'Survey response received', time: '1 hour ago' },
    { id: 3, message: 'System update available', time: '3 hours ago' },
  ];

  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-100 px-4 lg:px-6">
      <div className="flex items-center justify-between h-full">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <MenuIcon className="w-6 h-6 text-slate-600" />
          </button>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-2 w-64 lg:w-80">
            <SearchIcon className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none flex-1 text-sm text-slate-600 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <BellIcon className="w-6 h-6 text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                <div className="px-4 py-2 border-b border-slate-100">
                  <h3 className="font-semibold text-slate-800">Notifications</h3>
                </div>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    <p className="text-sm text-slate-700">{notification.message}</p>
                    <p className="text-xs text-slate-400 mt-1">{notification.time}</p>
                  </div>
                ))}
                <div className="px-4 py-2 border-t border-slate-100">
                  <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-slate-700">Carlos Rodriguez</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
              <ChevronDownIcon className="hidden md:block w-4 h-4 text-slate-400" />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="font-semibold text-slate-800">Carlos Rodriguez</p>
                  <p className="text-sm text-slate-500">carlos@smartadmin.com</p>
                </div>
                <div className="py-1">
                  <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    My Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    Account Settings
                  </button>
                </div>
                <div className="border-t border-slate-100 py-1">
                  <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
