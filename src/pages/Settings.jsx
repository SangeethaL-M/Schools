import React, { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isYearModalOpen, setIsYearModalOpen] = useState(false);

  // --- STATE FOR INTEGRATION TOGGLES ---
  const [stripeEnabled, setStripeEnabled] = useState(true);
  const [razorpayEnabled, setRazorpayEnabled] = useState(false);

  // --- STATE FOR ROLES & PERMISSIONS ---
  const [permissions, setPermissions] = useState([
    { module: 'Dashboard', admin: true, teacher: true, staff: false, parent: false },
    { module: 'User Management', admin: true, teacher: false, staff: false, parent: false },
    { module: 'Academic', admin: true, teacher: true, staff: true, parent: true },
    { module: 'Attendance', admin: true, teacher: true, staff: true, parent: true },
    { module: 'Fees', admin: true, teacher: false, staff: false, parent: true },
    { module: 'Reports', admin: true, teacher: true, staff: false, parent: true },
    { module: 'Documents', admin: true, teacher: true, staff: true, parent: false },
    { module: 'Settings', admin: true, teacher: false, staff: false, parent: false },
  ]);

  const togglePermission = (index, role) => {
    const updated = [...permissions];
    updated[index][role] = !updated[index][role];
    setPermissions(updated);
  };

  // --- CUSTOM TOGGLE COMPONENT ---
  const Toggle = ({ active, onToggle }) => (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
        active ? 'bg-indigo-600' : 'bg-slate-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          active ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6 bg-slate-50 min-h-screen">
      
      {/* HEADER SECTION */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Settings</h2>
        <p className="text-xs sm:text-sm text-slate-500">Configure school profile, permission and integration</p>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex border border-slate-200 bg-white p-1 rounded-xl w-full lg:w-max max-w-full overflow-x-auto gap-1 shadow-xs">
        {[
          { id: 'profile', name: 'School Profile', icon: '🏫' },
          { id: 'permissions', name: 'Roles & Permission', icon: '🛡️' },
          { id: 'academic', name: 'Academic Year', icon: '📅' },
          { id: 'integration', name: 'Integration', icon: '⚙️' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-bold rounded-lg whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === tab.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* CONTENT AREA */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-6">

        {/* ================= TAB 1: SCHOOL PROFILE ================= */}
        {activeTab === 'profile' && (
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-lg font-bold text-slate-800">School Profile</h3>
            
            {/* LOGO UPLOAD */}
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                <span className="text-2xl">🖼️</span>
              </div>
              <div className="space-y-1">
                <button className="text-indigo-600 font-bold text-sm flex items-center gap-2">
                  <span>📤</span> Upload Logo
                </button>
                <p className="text-xs text-slate-400">PNG or JPG max 2MB</p>
              </div>
            </div>

            {/* FORM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase">School Name</label>
                <input type="text" defaultValue="Lincoln Academy" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all" />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase">Email</label>
                <input type="email" defaultValue="eduuukrt@gmail.com" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase">Phone</label>
                <input type="text" defaultValue="8493208402q" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase">Website</label>
                <input type="text" defaultValue="www.lincolnacademy.edu" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all" />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase">Address</label>
                <input type="text" defaultValue="123 Education Drive, Springfield, IL 628501" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase">Board / Affiliation</label>
                <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all">
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase">Established Year</label>
                <input type="text" defaultValue="1985" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all" />
              </div>
            </div>

            <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">
              Save Changes
            </button>
          </div>
        )}

        {/* ================= TAB 2: ROLES & PERMISSIONS ================= */}
        {activeTab === 'permissions' && (
          <div className="space-y-6 animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="pb-4">Modules</th>
                    <th className="pb-4 text-center">Admin</th>
                    <th className="pb-4 text-center">Teacher</th>
                    <th className="pb-4 text-center">Staff</th>
                    <th className="pb-4 text-center">Parent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {permissions.map((row, idx) => (
                    <tr key={idx} className="group">
                      <td className="py-4 text-sm font-bold text-slate-700 flex items-center gap-3">
                        <span className="p-1.5 bg-slate-50 rounded-lg group-hover:bg-indigo-50 transition-colors">⚙️</span>
                        {row.module}
                      </td>
                      <td className="py-4 text-center"><Toggle active={row.admin} onToggle={() => togglePermission(idx, 'admin')} /></td>
                      <td className="py-4 text-center"><Toggle active={row.teacher} onToggle={() => togglePermission(idx, 'teacher')} /></td>
                      <td className="py-4 text-center"><Toggle active={row.staff} onToggle={() => togglePermission(idx, 'staff')} /></td>
                      <td className="py-4 text-center"><Toggle active={row.parent} onToggle={() => togglePermission(idx, 'parent')} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 3: ACADEMIC YEAR ================= */}
        {activeTab === 'academic' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Academic Years</h3>
                <p className="text-sm text-slate-400">Manage school academic year calendar</p>
              </div>
              <button 
                onClick={() => setIsYearModalOpen(true)}
                className="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-indigo-700"
              >
                + Add Year
              </button>
            </div>

            <div className="space-y-4">
              {[
                { year: '2025-2026', range: '2025/08/01 - 2026/06/30', status: 'Current' },
                { year: '2024-2025', range: '2024/08/01 - 2025/06/30', status: null },
                { year: '2023-2024', range: '2023/08/01 - 2024/06/30', status: null },
              ].map((item, idx) => (
                <div key={idx} className="p-5 border border-slate-200 rounded-2xl flex items-center justify-between hover:border-indigo-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-xl">📅</div>
                    <div>
                      <p className="font-bold text-slate-800">{item.year}</p>
                      <p className="text-sm text-slate-400">{item.range}</p>
                    </div>
                  </div>
                  {item.status ? (
                    <span className="px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold border border-emerald-200">
                      {item.status}
                    </span>
                  ) : (
                    <button className="text-slate-400 hover:text-indigo-600 text-sm font-bold">Edit</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 4: INTEGRATION ================= */}
        {activeTab === 'integration' && (
          <div className="space-y-8 animate-fade-in">
            {/* STRIPE SECTION */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="p-5 bg-white flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center font-bold text-blue-600">S</div>
                  <div>
                    <h4 className="font-bold text-slate-800">Stripe</h4>
                    <p className="text-xs text-slate-400">Accept online fee payments via cards</p>
                  </div>
                </div>
                <Toggle active={stripeEnabled} onToggle={() => setStripeEnabled(!stripeEnabled)} />
              </div>
              
              {stripeEnabled && (
                <div className="p-6 space-y-6 bg-slate-50/50 animate-slide-down">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Secret Key</label>
                      <input type="password" value="sk_test_••••••••" className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Webhook Secret</label>
                      <input type="text" value="whsec_••••••••" className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none" />
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg text-sm flex items-center gap-2">
                    ✓ Save
                  </button>
                </div>
              )}
            </div>

            {/* RAZORPAY SECTION */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="p-5 bg-white flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center font-bold text-indigo-600">R</div>
                  <div>
                    <h4 className="font-bold text-slate-800">Razorpay</h4>
                    <p className="text-xs text-slate-400">Indian payment gateway for fees collect</p>
                  </div>
                </div>
                <Toggle active={razorpayEnabled} onToggle={() => setRazorpayEnabled(!razorpayEnabled)} />
              </div>

              {razorpayEnabled && (
                <div className="p-6 space-y-6 bg-slate-50/50 animate-slide-down">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Key ID</label>
                      <input type="text" value="rzp_live_••••••••" className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Key Secret</label>
                      <input type="password" value="••••••••••••" className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none" />
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg text-sm flex items-center gap-2">
                    ✓ Save
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* POPUP MODAL (Academic Year) */}
      {isYearModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsYearModalOpen(false)} />
          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 space-y-6 animate-scale-up">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-800">Add Academic Year</h3>
              <button onClick={() => setIsYearModalOpen(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500">Year Name</label>
                <input type="text" placeholder="e.g. 2026-2027" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500">Start Date</label>
                <input type="date" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500">End Date</label>
                <input type="date" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl outline-none" />
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setIsYearModalOpen(false)} className="flex-1 py-3 text-slate-500 font-bold border border-slate-200 rounded-xl">Cancel</button>
              <button className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-100">Add Year</button>
            </div>
          </div>
        </div>
      )}

      {/* CSS For Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideDown { from { transform: translateY(-10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        .animate-slide-down { animation: slideDown 0.3s ease-out; }
        .animate-scale-up { animation: scaleUp 0.2s ease-out; }
      `}</style>
    </div>
  );
}