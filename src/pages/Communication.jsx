import React, { useState } from 'react';

export default function Communication() {
  const [activeTab, setActiveTab] = useState('announcements');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- MOCK DATA FOR ANNOUNCEMENTS ---
  const announcements = [
    {
      id: 1,
      title: "Annual sports Day 2026",
      priority: "High",
      status: "Published",
      content: "We are excited to announce our annual sports day on April 25th. All students are encouraged to participate in at least one event. Practice sessions start from Monday.",
      audience: "Everyone",
      date: "2026-04-10",
      author: "Principal Johnson",
      expiry: "2026-04-25"
    },
    {
      id: 2,
      title: "Parent teacher conference schedule",
      priority: "Medium",
      status: "Published",
      content: "The parent teacher conference is scheduled for April 20th. Please book your slot via the parent portal. Sessions run from 9AM to 5PM.",
      audience: "Parents, Staff",
      date: "2026-04-08",
      author: "Admin Office",
      expiry: "2026-04-20"
    },
    {
      id: 3,
      title: "Library Book Return Reminder",
      priority: "Low",
      status: "Published",
      content: "All borrowed library books must be returned by the end of this week for the annual stock audit.",
      audience: "Students",
      date: "2026-04-05",
      author: "Library Staff",
      expiry: "2026-04-12"
    }
  ];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6 bg-slate-50 min-h-screen font-sans">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Communication</h2>
          <p className="text-xs sm:text-sm text-slate-500">Announcements, notifications and broadcasts</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 self-start sm:self-auto"
        >
          <span className="text-lg">+</span> New Announcement
        </button>
      </div>

      {/* NAVIGATION TABS */}
      <div className="flex border border-slate-200 bg-white p-1 rounded-xl w-full sm:w-max max-w-full overflow-x-auto gap-1 shadow-xs">
        {[
          { id: 'announcements', name: 'Announcements', icon: '📢' },
          { id: 'notifications', name: 'Notifications', icon: '🔔' },
          { id: 'broadcast', name: 'Broadcast', icon: '📡' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 text-sm font-bold rounded-lg whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === tab.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="animate-fade-in">

        {/* ================= TAB 1: ANNOUNCEMENTS ================= */}
        {activeTab === 'announcements' && (
          <div className="space-y-4">
            {announcements.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-3xs hover:shadow-xs transition-all space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    <span className="px-2.5 py-0.5 bg-rose-100 text-rose-600 text-[10px] font-black uppercase rounded-md border border-rose-200">
                      {item.priority}
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-bold rounded-full border border-amber-100">
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">{item.content}</p>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 border-t border-slate-50 text-xs font-medium text-slate-400">
                  <span className="flex items-center gap-1.5"><span className="text-indigo-500">👥</span> {item.audience}</span>
                  <span className="flex items-center gap-1.5">📅 {item.date}</span>
                  <span className="flex items-center gap-1.5">👤 By {item.author}</span>
                  <span className="flex items-center gap-1.5">⏳ Expires {item.expiry}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= TAB 2: NOTIFICATIONS ================= */}
        {activeTab === 'notifications' && (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="p-6 space-y-8">
              {['Today', 'Yesterday', 'Earlier'].map((group) => (
                <div key={group} className="space-y-4">
                  <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">{group}</h4>
                  <div className="space-y-1">
                    {[1, 2, 3].map((notif) => (
                      <div key={notif} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-lg">
                            {notif === 1 ? '📝' : notif === 2 ? '💳' : '⚠️'}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">
                              {notif === 1 ? 'New Admission Request' : notif === 2 ? 'Fee payment overdue' : 'Attendance Alert'}
                            </p>
                            <p className="text-xs text-slate-400">A new admission request has been submitted for Grade 5</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors">08:30AM</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: BROADCAST ================= */}
        {activeTab === 'broadcast' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* BROADCAST FORM */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-slate-800">Send Broadcast</h3>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Broadcast channel</p>
              </div>

              <div className="flex flex-wrap gap-4">
                {['Email', 'SMS', 'Email & SMS'].map((channel) => (
                  <label key={channel} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="channel" className="w-4 h-4 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-sm font-bold text-slate-600 group-hover:text-indigo-600 transition-colors">{channel}</span>
                  </label>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Recipient Group</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['All Students', 'All Parents', 'All Staff', 'Specific class'].map((group) => (
                    <button key={group} className="p-3 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-indigo-500 hover:bg-indigo-50 transition-all text-center">
                      {group}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Subject</label>
                  <input type="text" placeholder="e.g Term 2 Fee Reminder" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:border-indigo-500 text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                  <textarea rows="4" placeholder="Write your message..." className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:border-indigo-500 text-sm resize-none" />
                </div>
              </div>

              <button className="w-full sm:w-max px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                Send Broadcast 🚀
              </button>
            </div>

            {/* BROADCAST STATS */}
            <div className="lg:col-span-4 space-y-4">
               <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Stats Broadcast</h3>
                  <span className="text-indigo-600 text-xl">📊</span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-2xl flex items-center gap-4">
                    <span className="text-2xl">👥</span>
                    <div>
                      <p className="text-2xl font-black text-indigo-700">512+</p>
                      <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter">Recepients</p>
                    </div>
                  </div>
                  <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl flex items-center gap-4">
                    <span className="text-2xl">📤</span>
                    <div>
                      <p className="text-2xl font-black text-emerald-700">807</p>
                      <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">Total Sent</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 border border-slate-100 rounded-2xl text-center">
                      <p className="text-xl font-bold text-slate-700">3</p>
                      <p className="text-[9px] font-black text-slate-400 uppercase">Email</p>
                    </div>
                    <div className="p-4 border border-slate-100 rounded-2xl text-center">
                      <p className="text-xl font-bold text-slate-700">1</p>
                      <p className="text-[9px] font-black text-slate-400 uppercase">SMS</p>
                    </div>
                  </div>
                </div>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* ================= NEW ANNOUNCEMENT MODAL POPUP ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-scale-up">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-lg font-black text-slate-800">New Announcement</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">✕</button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Title</label>
                <input type="text" placeholder="e.g Sports day" className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 text-sm font-bold" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Target Audience</label>
                  <select className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 text-sm font-bold">
                    <option>Everyone</option>
                    <option>Students</option>
                    <option>Parents</option>
                    <option>Staff Only</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Priority</label>
                  <select className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 text-sm font-bold text-amber-500">
                    <option>Medium</option>
                    <option>High</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Content</label>
                <textarea rows="4" placeholder="Write your announcement content here..." className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 text-sm resize-none font-medium text-slate-600" />
              </div>

              <div className="grid grid-cols-2 gap-4 items-end">
                <div className="space-y-1">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Publish Time</label>
                   <div className="flex border border-slate-200 rounded-xl overflow-hidden">
                      <button className="flex-1 py-2 text-xs font-bold bg-indigo-50 text-indigo-600">Publish Now</button>
                      <button className="flex-1 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50">Schedule</button>
                   </div>
                </div>
                <div className="space-y-1">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Subject</label>
                   <input type="text" placeholder="General" className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 text-sm" />
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50/50 flex gap-3">
               <button onClick={() => setIsModalOpen(false)} className="flex-1 py-3 text-slate-500 font-bold text-sm border border-slate-200 rounded-xl hover:bg-white transition-all">Cancel</button>
               <button className="flex-1 py-3 bg-indigo-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">Publish</button>
            </div>
          </div>
        </div>
      )}

      {/* CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scale-up { animation: scaleUp 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
}