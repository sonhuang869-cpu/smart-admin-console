// Mock Users Data
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
  status: 'active' | 'inactive';
  avatar: string;
  lastLogin: string;
  createdAt: string;
}

export const users: User[] = [
  {
    id: '1',
    name: 'Carlos Rodriguez',
    email: 'carlos@smartadmin.com',
    role: 'admin',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    lastLogin: '2026-03-18 09:30',
    createdAt: '2025-01-15',
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria@smartadmin.com',
    role: 'manager',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    lastLogin: '2026-03-18 08:45',
    createdAt: '2025-02-20',
  },
  {
    id: '3',
    name: 'Juan Martinez',
    email: 'juan@smartadmin.com',
    role: 'user',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    lastLogin: '2026-03-17 14:20',
    createdAt: '2025-03-10',
  },
  {
    id: '4',
    name: 'Ana Lopez',
    email: 'ana@smartadmin.com',
    role: 'user',
    status: 'inactive',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    lastLogin: '2026-03-10 11:00',
    createdAt: '2025-04-05',
  },
  {
    id: '5',
    name: 'Pedro Sanchez',
    email: 'pedro@smartadmin.com',
    role: 'manager',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    lastLogin: '2026-03-18 10:15',
    createdAt: '2025-05-12',
  },
];

// Mock Devices Data
export interface Device {
  id: string;
  name: string;
  type: 'sensor' | 'camera' | 'alarm' | 'light' | 'thermostat';
  status: 'online' | 'offline' | 'warning';
  location: string;
  lastActivity: string;
  value?: string;
}

export const devices: Device[] = [
  {
    id: '1',
    name: 'Living Room Camera',
    type: 'camera',
    status: 'online',
    location: 'Living Room',
    lastActivity: '2026-03-18 10:30',
  },
  {
    id: '2',
    name: 'Front Door Sensor',
    type: 'sensor',
    status: 'online',
    location: 'Entrance',
    lastActivity: '2026-03-18 10:28',
    value: 'Closed',
  },
  {
    id: '3',
    name: 'Main Thermostat',
    type: 'thermostat',
    status: 'online',
    location: 'Hallway',
    lastActivity: '2026-03-18 10:25',
    value: '22°C',
  },
  {
    id: '4',
    name: 'Backyard Light',
    type: 'light',
    status: 'online',
    location: 'Backyard',
    lastActivity: '2026-03-18 10:20',
    value: 'On',
  },
  {
    id: '5',
    name: 'Security Alarm',
    type: 'alarm',
    status: 'online',
    location: 'All Areas',
    lastActivity: '2026-03-18 10:15',
    value: 'Armed',
  },
  {
    id: '6',
    name: 'Kitchen Sensor',
    type: 'sensor',
    status: 'warning',
    location: 'Kitchen',
    lastActivity: '2026-03-18 09:00',
    value: 'Low Battery',
  },
  {
    id: '7',
    name: 'Garage Camera',
    type: 'camera',
    status: 'offline',
    location: 'Garage',
    lastActivity: '2026-03-17 22:00',
  },
  {
    id: '8',
    name: 'Bedroom Light',
    type: 'light',
    status: 'online',
    location: 'Master Bedroom',
    lastActivity: '2026-03-18 10:30',
    value: 'Off',
  },
];

// Mock Surveys Data
export interface Survey {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'draft' | 'completed';
  responses: number;
  createdAt: string;
  deadline: string;
  questions: number;
}

export const surveys: Survey[] = [
  {
    id: '1',
    title: 'Customer Satisfaction Survey',
    description: 'Measure customer satisfaction with our smart home products',
    status: 'active',
    responses: 156,
    createdAt: '2026-02-15',
    deadline: '2026-04-15',
    questions: 12,
  },
  {
    id: '2',
    title: 'Product Feature Feedback',
    description: 'Gather feedback on new smart device features',
    status: 'active',
    responses: 89,
    createdAt: '2026-03-01',
    deadline: '2026-03-31',
    questions: 8,
  },
  {
    id: '3',
    title: 'User Experience Survey',
    description: 'Evaluate the mobile app user experience',
    status: 'draft',
    responses: 0,
    createdAt: '2026-03-15',
    deadline: '2026-04-30',
    questions: 15,
  },
  {
    id: '4',
    title: 'Installation Feedback',
    description: 'Feedback on device installation process',
    status: 'completed',
    responses: 234,
    createdAt: '2026-01-01',
    deadline: '2026-02-28',
    questions: 10,
  },
];

// Mock Chat Messages Data
export interface Message {
  id: string;
  conversationId: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participant: {
    id: string;
    name: string;
    avatar: string;
    status: 'online' | 'offline';
  };
  lastMessage: string;
  unreadCount: number;
  timestamp: string;
}

export const conversations: Conversation[] = [
  {
    id: '1',
    participant: {
      id: '2',
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      status: 'online',
    },
    lastMessage: 'The new sensor configuration is ready',
    unreadCount: 2,
    timestamp: '10:30 AM',
  },
  {
    id: '2',
    participant: {
      id: '3',
      name: 'Juan Martinez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      status: 'offline',
    },
    lastMessage: 'Can you check the camera logs?',
    unreadCount: 0,
    timestamp: '9:45 AM',
  },
  {
    id: '3',
    participant: {
      id: '5',
      name: 'Pedro Sanchez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      status: 'online',
    },
    lastMessage: 'Meeting scheduled for tomorrow',
    unreadCount: 1,
    timestamp: 'Yesterday',
  },
];

export const messages: Message[] = [
  {
    id: '1',
    conversationId: '1',
    sender: {
      id: '2',
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      role: 'Manager',
    },
    content: 'Hi! I have finished configuring the new temperature sensors.',
    timestamp: '10:15 AM',
    isRead: true,
  },
  {
    id: '2',
    conversationId: '1',
    sender: {
      id: '1',
      name: 'Carlos Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      role: 'Admin',
    },
    content: 'Great! Can you share the configuration details?',
    timestamp: '10:20 AM',
    isRead: true,
  },
  {
    id: '3',
    conversationId: '1',
    sender: {
      id: '2',
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      role: 'Manager',
    },
    content: 'The new sensor configuration is ready. I have attached the documentation.',
    timestamp: '10:30 AM',
    isRead: false,
  },
];

// Mock Analytics Data
export interface AnalyticsData {
  totalUsers: number;
  activeDevices: number;
  surveyResponses: number;
  alertsToday: number;
  userGrowth: number;
  deviceUptime: number;
  responseRate: number;
  alertReduction: number;
}

export const analyticsData: AnalyticsData = {
  totalUsers: 1248,
  activeDevices: 892,
  surveyResponses: 3456,
  alertsToday: 12,
  userGrowth: 12.5,
  deviceUptime: 99.2,
  responseRate: 78.3,
  alertReduction: -8.4,
};

export const monthlyData = [
  { month: 'Jan', users: 850, devices: 720, responses: 2100 },
  { month: 'Feb', users: 920, devices: 780, responses: 2450 },
  { month: 'Mar', users: 1000, devices: 820, responses: 2800 },
  { month: 'Apr', users: 1080, devices: 850, responses: 3100 },
  { month: 'May', users: 1150, devices: 870, responses: 3300 },
  { month: 'Jun', users: 1248, devices: 892, responses: 3456 },
];

export const deviceTypeData = [
  { type: 'Sensors', count: 245, color: '#1e40af' },
  { type: 'Cameras', count: 178, color: '#06b6d4' },
  { type: 'Lights', count: 312, color: '#22d3ee' },
  { type: 'Thermostats', count: 89, color: '#0891b2' },
  { type: 'Alarms', count: 68, color: '#164e63' },
];

// Mock Recent Activities
export interface Activity {
  id: string;
  type: 'device' | 'user' | 'survey' | 'alert';
  message: string;
  timestamp: string;
  status?: 'success' | 'warning' | 'error';
}

export const recentActivities: Activity[] = [
  {
    id: '1',
    type: 'device',
    message: 'Living Room Camera connected successfully',
    timestamp: '2 minutes ago',
    status: 'success',
  },
  {
    id: '2',
    type: 'alert',
    message: 'Kitchen Sensor battery low - 15% remaining',
    timestamp: '15 minutes ago',
    status: 'warning',
  },
  {
    id: '3',
    type: 'user',
    message: 'New user registration: Ana Martinez',
    timestamp: '1 hour ago',
    status: 'success',
  },
  {
    id: '4',
    type: 'survey',
    message: 'Customer Satisfaction Survey reached 150 responses',
    timestamp: '2 hours ago',
    status: 'success',
  },
  {
    id: '5',
    type: 'device',
    message: 'Garage Camera went offline',
    timestamp: '5 hours ago',
    status: 'error',
  },
];
