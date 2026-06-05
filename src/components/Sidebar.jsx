import { NavLink } from 'react-router-dom';

export default function Sidebar({ onLogout, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'User Management', path: '/users', icon: '👥' },
    { name: 'Academic', path: '/academic', icon: '💻' },
    { name: 'Attendance', path: '/attendance', icon: '📅' },
    { name: 'Fees', path: '/fees', icon: '💵' },
    { name: 'Communication', path: '/communication', icon: '💬' },
    { name: 'Reports', path: '/reports', icon: '📈' },
    { name: 'Documents', path: '/documents', icon: '📁' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
    { name: 'Approvals', path: '/approvals', icon: '📝' },
  ];

  return (
    <div className={`
      w-64 h-screen bg-[#3B44F6] text-white flex flex-col justify-between p-4 shadow-xl fixed top-0 left-0 z-40
      transition-transform duration-300 ease-in-out
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
      lg:translate-x-0
    `}>
      <div>
        {/* Sidebar Header with a built-in Mobile Close Button */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
          <div className="flex items-center gap-2 px-3">
            <span className="text-2xl">🎓</span>
            <h1 className="text-2xl font-black tracking-wide">EDUSMART</h1>
          </div>
          
          {/* Close button shown ONLY on mobile devices */}
          <button 
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white font-bold"
          >
            ✕
          </button>
        </div>

        {/* Dynamic Sidebar Links */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)} // Auto-closes sidebar when a link is clicked on mobile
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive ? 'bg-white/20 shadow-inner' : 'hover:bg-white/10 opacity-80 hover:opacity-100'
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logout Action Trigger Footer */}
      <button
        type="button"
        onClick={onLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-200 hover:bg-red-600/30 font-semibold transition-colors mt-auto"
      >
        <span>🚪</span>
        <span>Logout</span>
      </button>
    </div>
  );
}