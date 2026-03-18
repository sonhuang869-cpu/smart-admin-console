'use client';

import { useState } from 'react';
import Image from 'next/image';
import AdminLayout from '@/components/layout/AdminLayout';
import DataTable from '@/components/ui/DataTable';
import Modal from '@/components/ui/Modal';
import Badge from '@/components/ui/Badge';
import { PlusIcon, EditIcon, TrashIcon, EyeIcon } from '@/components/icons';
import { users, User } from '@/data/mockData';

export default function UsersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const columns = [
    {
      key: 'name',
      header: 'User',
      render: (user: User) => (
        <div className="flex items-center gap-3">
          <Image
            src={user.avatar}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-slate-800">{user.name}</p>
            <p className="text-xs text-slate-500">{user.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      header: 'Role',
      render: (user: User) => (
        <Badge
          variant={
            user.role === 'admin'
              ? 'info'
              : user.role === 'manager'
              ? 'warning'
              : 'default'
          }
        >
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        </Badge>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (user: User) => (
        <Badge variant={user.status === 'active' ? 'success' : 'error'}>
          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
        </Badge>
      ),
    },
    {
      key: 'lastLogin',
      header: 'Last Login',
      render: (user: User) => (
        <span className="text-slate-600">{user.lastLogin}</span>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (user: User) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedUser(user);
              setIsModalOpen(true);
            }}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <EyeIcon className="w-4 h-4 text-slate-500" />
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <EditIcon className="w-4 h-4 text-slate-500" />
          </button>
          <button className="p-2 rounded-lg hover:bg-red-50 transition-colors">
            <TrashIcon className="w-4 h-4 text-red-500" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Users Management</h1>
            <p className="text-slate-500">Manage user accounts and permissions</p>
          </div>
          <button className="btn-gradient flex items-center gap-2">
            <PlusIcon className="w-5 h-5" />
            Add User
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="card">
            <p className="text-sm text-slate-500">Total Users</p>
            <p className="text-2xl font-bold text-slate-800">{users.length}</p>
          </div>
          <div className="card">
            <p className="text-sm text-slate-500">Active Users</p>
            <p className="text-2xl font-bold text-green-600">
              {users.filter((u) => u.status === 'active').length}
            </p>
          </div>
          <div className="card">
            <p className="text-sm text-slate-500">Administrators</p>
            <p className="text-2xl font-bold text-primary-600">
              {users.filter((u) => u.role === 'admin').length}
            </p>
          </div>
        </div>

        {/* Users Table */}
        <DataTable
          data={users}
          columns={columns}
          searchPlaceholder="Search users..."
        />

        {/* User Details Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="User Details"
        >
          {selectedUser && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {selectedUser.name}
                  </h3>
                  <p className="text-slate-500">{selectedUser.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Role</p>
                  <p className="font-medium text-slate-800">
                    {selectedUser.role.charAt(0).toUpperCase() +
                      selectedUser.role.slice(1)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  <Badge
                    variant={selectedUser.status === 'active' ? 'success' : 'error'}
                  >
                    {selectedUser.status.charAt(0).toUpperCase() +
                      selectedUser.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Last Login</p>
                  <p className="font-medium text-slate-800">
                    {selectedUser.lastLogin}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Created</p>
                  <p className="font-medium text-slate-800">
                    {selectedUser.createdAt}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="btn-gradient flex-1">Edit User</button>
                <button className="btn-outline flex-1">Reset Password</button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </AdminLayout>
  );
}
