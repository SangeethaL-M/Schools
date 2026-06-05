import React, { useState } from 'react';

export default function TeacherDashboard() {
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  return (
    <div className="space-y-8 relative pb-16">
      {/* ... keep the entire dashboard layout code here ... */}
      {/* Header Profile Greeting Section */}
      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs">
      <h2 className="text-3xl font-black text-slate-800">Welcome Back, Sarah!</h2>
      <p className="text-base text-slate-500 font-medium mt-2">Here's what's happening in your classes today — Saturday, April 11</p>
            </div>
      
            {/* 4 Top Metric Cards Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Total Classes', val: '4', sub: 'This Semester', percentage: '0%', up: true, border: 'border-indigo-100', color: 'text-indigo-600' },
                { title: 'Total Students', val: '15', sub: 'vs last semester', percentage: '5%', up: true, border: 'border-purple-100', color: 'text-purple-600' },
                { title: 'Avg Attendance', val: '86%', sub: 'vs last month', percentage: '3%', up: true, border: 'border-fuchsia-100', color: 'text-fuchsia-600' },
                { title: 'Pending Tasks', val: '3', sub: 'vs Yesterday', percentage: '1%', up: false, border: 'border-rose-100', color: 'text-rose-600' }
              ].map((card, i) => (
                <div key={i} className={`p-6 bg-white border ${card.border} rounded-2xl shadow-xs flex justify-between items-start relative overflow-hidden`}>
                  <div className={`absolute top-0 left-0 w-2 h-full ${card.color.replace('text', 'bg')}`} />
                  <div className="space-y-2 pl-3">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{card.title}</p>
                    <p className="text-4xl font-black text-slate-800">{card.val}</p>
                    <p className="text-xs text-slate-500 font-medium">{card.sub}</p>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${card.up ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                    {card.up ? '↗' : '↘'} {card.percentage}
                  </span>
                </div>
              ))}
            </div>
      
            {/* Graphs Viewport Grid Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Attendance Timeline Analytics Chart */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs">
                <div className="mb-4">
                  <h4 className="font-extrabold text-lg text-slate-800">Attendance overview</h4>
                  <p className="text-xs text-slate-500 font-medium">Monthly attendance rate percentage tracker</p>
                </div>
                <div className="relative pt-4 bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                  <svg viewBox="0 0 500 120" className="w-full h-40 overflow-visible">
                    <defs>
                      <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,80 Q40,65 80,75 T160,85 T240,65 T320,55 T400,60 T500,65 L500,120 L0,120 Z" fill="url(#waveGrad)" />
                    <path d="M0,80 Q40,65 80,75 T160,85 T240,65 T320,55 T400,60 T500,65" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
                    {[80, 160, 240, 320, 400].map((cx, i) => (
                      <circle key={i} cx={cx} cy={70 + Math.sin(i) * 10} r="4.5" fill="#ffffff" stroke="#6366f1" strokeWidth="2.5" />
                    ))}
                  </svg>
                  <div className="flex justify-between text-xs font-bold text-slate-400 px-2 pt-3 border-t border-slate-100 uppercase tracking-widest">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
                  </div>
                </div>
              </div>
      
              {/* Student Performance Bar Chart */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs">
                <div className="mb-4">
                  <h4 className="font-extrabold text-lg text-slate-800">Student Performance</h4>
                  <p className="text-xs text-slate-500 font-medium">Class Average performance vs Top Performers</p>
                </div>
                <div className="bg-slate-50/50 rounded-xl p-6 border border-slate-100 h-44 flex items-end justify-between gap-3">
                  {[
                    { h1: 'h-[65%]', h2: 'h-[85%]' }, { h1: 'h-[75%]', h2: 'h-[90%]' },
                    { h1: 'h-[55%]', h2: 'h-[80%]' }, { h1: 'h-[70%]', h2: 'h-[92%]' },
                    { h1: 'h-[80%]', h2: 'h-[95%]' }, { h1: 'h-[78%]', h2: 'h-[88%]' },
                    { h1: 'h-[60%]', h2: 'h-[82%]' }, { h1: 'h-[82%]', h2: 'h-[92%]' }
                  ].map((bar, idx) => (
                    <div key={idx} className="flex-1 flex items-end justify-center gap-1.5 h-full">
                      <div className={`w-3.5 ${bar.h1} bg-indigo-400 rounded-t-sm transition-all duration-500`} />
                      <div className={`w-3.5 ${bar.h2} bg-rose-400 rounded-t-sm transition-all duration-500`} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-6 text-xs font-bold text-slate-500 pt-4">
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-indigo-400" /> Avg Marks</span>
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-rose-400" /> Top Marks</span>
                </div>
              </div>
            </div>
      
            {/* Lower Dashboard Roster Grid Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Today's Timetable Schedule */}
              <div className="lg:col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-xs">
                <h4 className="font-extrabold text-lg text-slate-800 mb-5 tracking-tight">Today's Timetable</h4>
                <div className="space-y-4">
                  {[
                    { time: '8:00 AM', name: 'Mathematics Lecture', desc: 'Class 10-A • Room 201', type: 'Lecture', badge: 'bg-indigo-50 text-indigo-600' },
                    { time: '10:00 AM', name: 'Advanced Algebra Lab', desc: 'Class 10-C • Room 105', type: 'Lab', badge: 'bg-purple-50 text-purple-600' },
                    { time: '12:00 PM', name: 'Lunch Breakout Window', desc: 'Faculty Lounge Rest Area', type: 'Break', badge: 'bg-slate-100 text-slate-600' },
                    { time: '1:00 PM', name: 'Statistics & Probability', desc: 'Class 10-B • Room 202', type: 'Lecture', badge: 'bg-indigo-50 text-indigo-600' }
                  ].map((slot, i) => (
                    <div key={i} className="p-4 bg-slate-50/70 hover:bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-sm transition-colors">
                      <div className="flex items-center gap-5">
                        <div className="text-right min-w-[75px]">
                          <p className="font-extrabold text-slate-800 text-base">{slot.time}</p>
                          <span className="text-xs text-slate-400 block mt-0.5">60 Mins</span>
                        </div>
                        <div className="w-px h-10 bg-slate-200" />
                        <div>
                          <p className="font-extrabold text-slate-800 text-base">{slot.name}</p>
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">{slot.desc}</p>
                        </div>
                      </div>
                      <span className={`px-3.5 py-1 rounded-full text-xs font-bold ${slot.badge}`}>{slot.type}</span>
                    </div>
                  ))}
                </div>
              </div>
      
              {/* Recent Activity Logs */}
              <div className="space-y-6">
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs">
                  <h4 className="font-extrabold text-lg text-slate-800 mb-4 tracking-tight">Recent Activity</h4>
                  <div className="space-y-4 text-xs font-medium">
                    {[
                      { txt: 'Emma Rodriguez submitted Assignment #4', time: '10 minutes ago', icon: '📌' },
                      { txt: 'Attendance marked completely for class 10-A', time: '1 hour ago', icon: '📝' },
                      { txt: 'Marks published for unit 3 exam ledger 10-B', time: '2 hours ago', icon: '🏆' },
                      { txt: 'New inbox alert from David Johnson (Parent)', time: '3 hours ago', icon: '💬' }
                    ].map((act, i) => (
                      <div key={i} className="flex gap-3 items-start bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                        <span className="text-base mt-0.5">{act.icon}</span>
                        <div>
                          <p className="font-bold text-slate-700 text-sm leading-tight">{act.txt}</p>
                          <span className="text-xs text-slate-400 font-bold block mt-1">{act.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
      
                {/* Core Notifications Alert Panel */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs">
                  <h4 className="font-extrabold text-lg text-slate-800 mb-4 tracking-tight">System Alerts</h4>
                  <div className="space-y-3 text-xs font-bold">
                    <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl text-amber-800 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" /> Isabella Davis attendance fell below 70%
                    </div>
                    <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-800 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0" /> Parent-Teacher conference this Friday
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            {/* FLOATING INTERACTIVE ASSET: AI TEACHING ASSISTANT */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
              {showAIAssistant && (
                <div className="w-88 bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 space-y-3 animate-fade-in text-sm font-medium">
                  <div className="flex justify-between items-center bg-indigo-600 text-white p-4 -mx-5 -mt-5 rounded-t-2xl">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">🤖</span>
                      <div>
                        <h5 className="font-extrabold text-sm leading-none">AI Insight Engine</h5>
                        <span className="text-xs text-indigo-200 block mt-1">Live Classroom Assistant</span>
                      </div>
                    </div>
                    <button onClick={() => setShowAIAssistant(false)} className="hover:opacity-70 text-base font-bold">✕</button>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-xl">
                      📈 <strong>Class 10-A</strong> shows a 12% boost in quarterly calculus benchmarks.
                    </div>
                    <div className="p-3 bg-amber-50 text-amber-900 border border-amber-100 rounded-xl">
                      ⚠️ <strong>3 Students</strong> in cohort 10-C are trending downward. Recommended reviews applied.
                    </div>
                  </div>
                </div>
              )}
      
              <button 
                onClick={() => setShowAIAssistant(!showAIAssistant)}
                className="px-5 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-black text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all transform hover:scale-105"
              >
                <span>⭐</span> AI Insights Assistant
              </button>
            </div>
          </div>
        );
      }
      
      // ==========================================
      // MAIN EXPORT MASTER LAYOUT FRAMEWORK
      // ==========================================
      export default function TeacherLayout({ onLogout }) {
        const [activeTab, setActiveTab] = useState('dashboard');
        const [mobileSidebar, setMobileSidebar] = useState(false);
      
        const menuItems = [
          { id: 'dashboard', label: 'Dashboard Overview', icon: '📊' },
          { id: 'classes', label: 'My Academic Classes', icon: '🏫' },
          { id: 'students', label: 'Student Directory', icon: '👥' },
          { id: 'attendance', label: 'Attendance Registry', icon: '📝' },
          { id: 'assignment', label: 'Course Assignments', icon: '📄' },
          { id: 'marks', label: 'Exams & Marks Logs', icon: '🏆' },
          { id: 'messages', label: 'Parental Messages', icon: '💬' },
        ];
      
        return (
          <div className="min-h-screen bg-slate-50 flex font-sans antialiased text-slate-800">
            {/* Mobile Sidebar Cover Overlay */}
            {mobileSidebar && (
              <div className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-xs" onClick={() => setMobileSidebar(false)} />
            )}
      
            {/* =========================================================
                PURPLE BAR NAVIGATION SIDEBAR (FIGMA LARGE FONTS LOGIC)
               ========================================================= */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#4A268B] text-white p-5 flex flex-col justify-between transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:h-screen shrink-0 ${
              mobileSidebar ? 'translate-x-0' : '-translate-x-full'
            }`}>
              <div className="space-y-8">
                {/* Brand Logo Header Box */}
                <div className="flex items-center gap-3.5 px-2 border-b border-white/10 pb-5">
                  <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center text-white text-xl font-bold">🎓</div>
                  <div>
                    <h1 className="font-black text-white text-base tracking-wider">EDUSMART</h1>
                    <span className="text-xs text-purple-200 font-bold uppercase tracking-widest">Faculty Portal</span>
                  </div>
                </div>
      
                {/* Navigation Action Links */}
                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const isSelected = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => { setActiveTab(item.id); setMobileSidebar(false); }}
                        className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
                          isSelected 
                            ? 'bg-white/20 text-white border-l-4 border-white pl-3.5 shadow-sm' 
                            : 'text-purple-100/70 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="text-lg opacity-90">{item.icon}</span>
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
      
              {/* Profile Footer Switch Controls */}
              <div className="space-y-2 border-t border-white/10 pt-5">
                {/* Footer User Info Avatar Pill */}
                <div className="flex items-center gap-3.5 p-3 bg-white/5 rounded-xl mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-300 font-black text-purple-900 text-sm flex items-center justify-center border border-white/20">
                    SJ
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-extrabold text-white truncate leading-none">Sarah Johnson</p>
                    <span className="text-xs text-purple-300 font-medium block mt-1">Primary Faculty</span>
                  </div>
                </div>
      
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeTab === 'settings' ? 'bg-white/20 text-white' : 'text-purple-100/70 hover:bg-white/5'
                  }`}
                >
                  <span>⚙️</span> Portal Settings
                </button>
                
                <button 
                  onClick={onLogout} 
                  className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold text-purple-200 hover:text-rose-300 hover:bg-rose-950/40 transition-all"
                >
                  <span>🚪</span> Exit Workspace
                </button>
              </div>
            </aside>
      
            {/* =========================================================
                MAIN INTERFACE SYSTEM AREA WORKSPACE
               ========================================================= */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
              <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-xs">
                <div className="flex items-center gap-4">
                  <button onClick={() => setMobileSidebar(true)} className="p-1 lg:hidden text-slate-600 font-bold text-2xl">☰</button>
                  <div className="hidden sm:block relative w-80">
                    <input 
                      type="text" 
                      placeholder="Search metrics, records, files..." 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm outline-hidden focus:border-indigo-500 font-medium"
                    />
                    <span className="absolute left-3 top-3 text-sm text-slate-400">🔍</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <button className="relative text-lg text-slate-500 hover:text-slate-800">
                    🔔 <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-rose-500 rounded-full" />
                  </button>
                  <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center font-black text-sm text-indigo-600 shadow-3xs">
                    SJ
                  </div>
                </div>
              </header>
      
              <main className="p-6 sm:p-8 bg-slate-50/50 flex-1 overflow-x-hidden">
                {activeTab === 'dashboard' && <TeacherDashboard />}
                {activeTab === 'classes' && <div className="p-10 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-400 text-center shadow-xs">🏫 Academic Classes Roster Configuration Viewport</div>}
                {activeTab === 'students' && <div className="p-10 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-400 text-center shadow-xs">👥 Student Performance Metrics & Database Records</div>}
                {activeTab === 'attendance' && <div className="p-10 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-400 text-center shadow-xs">📝 Attendance Roll-Call Interactive Sheet Matrix</div>}
                {activeTab === 'assignment' && <div className="p-10 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-400 text-center shadow-xs">📄 Managed Evaluation Homework Assignments Logs</div>}
                {activeTab === 'marks' && <div className="p-10 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-400 text-center shadow-xs">🏆 Terminal Examination Gradebook Entry Scoreboards</div>}
                {activeTab === 'messages' && <div className="p-10 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-400 text-center shadow-xs">💬 Direct Parental Messaging Logs Chat Channels</div>}
                {activeTab === 'settings' && <div className="p-10 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-400 text-center shadow-xs">⚙️ Faculty Personal Account Security Configuration Settings</div>}
              </main>
            </div>
      
            <style>{`
              @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
              .animate-fade-in { animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
      {/* Rest of dashboard content */}
    </div>
  );
}