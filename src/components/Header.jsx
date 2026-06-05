export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm">
      <div className="w-96">
        <input 
          type="text" placeholder="🔍 Search here..." 
          className="w-full bg-slate-50 px-4 py-2 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 relative">🔔</button>
        <div className="flex items-center gap-2">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100" 
            alt="User" className="w-9 h-9 rounded-full object-cover border border-blue-500"
          />
          <div>
            <p className="text-sm font-bold leading-tight text-slate-900">Sarah Johnson</p>
            <p className="text-xs text-slate-400">Teacher Account</p>
          </div>
        </div>
      </div>
    </header>
  );
}