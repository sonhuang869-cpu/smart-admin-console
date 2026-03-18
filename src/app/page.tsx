'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  DevicesIcon,
  SurveyIcon,
  ChatIcon,
  ShieldIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  HomeIcon,
} from '@/components/icons';

export default function LandingPage() {
  const features = [
    {
      icon: <DevicesIcon className="w-8 h-8" />,
      title: 'Smart Device Control',
      description: 'Monitor and control all your smart home devices from a single dashboard.',
    },
    {
      icon: <SurveyIcon className="w-8 h-8" />,
      title: 'Survey Management',
      description: 'Create, distribute, and analyze surveys with offline capability.',
    },
    {
      icon: <ChatIcon className="w-8 h-8" />,
      title: 'Real-time Chat',
      description: 'Communicate with your team and users through integrated messaging.',
    },
    {
      icon: <ShieldIcon className="w-8 h-8" />,
      title: 'Security First',
      description: 'Enterprise-grade security with role-based access control.',
    },
  ];

  const stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '50K+', label: 'Devices Connected' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <HomeIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">SmartAdmin</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-primary-600 transition-colors">
                Features
              </a>
              <a href="#about" className="text-slate-600 hover:text-primary-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-slate-600 hover:text-primary-600 transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="btn-outline text-sm px-4 py-2">
                Sign In
              </Link>
              <Link href="/dashboard" className="btn-gradient text-sm px-4 py-2">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Smart Home{' '}
                <span className="gradient-text">Management</span>{' '}
                Made Simple
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                A comprehensive admin console for managing smart devices, surveys,
                and communications. Control everything from one powerful platform.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard" className="btn-gradient text-center">
                  Start Free Trial
                </Link>
                <button className="btn-outline flex items-center justify-center gap-2">
                  Watch Demo
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                {['No credit card required', 'Free 14-day trial', 'Cancel anytime'].map(
                  (item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop"
                  alt="Smart Home Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <DevicesIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">892</p>
                    <p className="text-sm text-slate-500">Active Devices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-slate-300 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Everything You Need to{' '}
              <span className="gradient-text">Manage Smart</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Our platform provides all the tools you need to manage your smart home ecosystem efficiently.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card group hover:border-primary-200 border border-transparent cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 group-hover:bg-gradient-primary group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="Modern Building"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Built for{' '}
                <span className="gradient-text">Enterprise Scale</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Our platform is designed to scale with your business. Whether you manage
                10 devices or 10,000, SmartAdmin Console provides the reliability and
                performance you need.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Cloud-based architecture for maximum availability',
                  'Real-time synchronization across all devices',
                  'Advanced analytics and reporting capabilities',
                  'Enterprise-grade security and compliance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/dashboard" className="btn-gradient">
                  Explore Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join thousands of users who trust SmartAdmin Console for their smart home management.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="btn-gradient">
              Start Free Trial
            </Link>
            <button className="btn-outline">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <HomeIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SmartAdmin</span>
              </div>
              <p className="text-slate-400">
                Professional smart home management platform for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400">
              &copy; 2026 SmartAdmin Console. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
