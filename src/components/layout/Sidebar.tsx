'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DashboardIcon,
  UsersIcon,
  DevicesIcon,
  SurveyIcon,
  ChatIcon,
  ReportsIcon,
  SettingsIcon,
  LogoutIcon,
  CloseIcon,
  HomeIcon,
} from '../icons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: DashboardIcon },
  { name: 'Users', href: '/users', icon: UsersIcon },
  { name: 'Devices', href: '/devices', icon: DevicesIcon },
  { name: 'Surveys', href: '/surveys', icon: SurveyIcon },
  { name: 'Chat', href: '/chat', icon: ChatIcon },
  { name: 'Reports', href: '/reports', icon: ReportsIcon },
  { name: 'Settings', href: '/settings', icon: SettingsIcon },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-100">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <HomeIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">SmartAdmin</span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <CloseIcon className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? 'sidebar-link-active' : 'sidebar-link'}
                onClick={onClose}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100">
          <button className="sidebar-link w-full">
            <LogoutIcon className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
