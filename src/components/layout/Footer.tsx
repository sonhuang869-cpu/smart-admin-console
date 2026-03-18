export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-4 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          &copy; 2026 SmartAdmin Console. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-slate-500 hover:text-primary-600 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-slate-500 hover:text-primary-600 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm text-slate-500 hover:text-primary-600 transition-colors"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
