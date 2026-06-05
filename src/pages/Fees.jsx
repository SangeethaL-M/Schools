import React, { useState } from 'react';

// --- INITIAL DATASETS ---
const initialStructures = [
  { id: 'FEE-01', name: 'Tuition Fee', grade: 'Grade 3-5', amount: 5200, period: 'Annual' },
  { id: 'FEE-02', name: 'Activity Fee', grade: 'Grade 3-8', amount: 800, period: 'Annual' },
  { id: 'FEE-03', name: 'Transport Fee', grade: 'Grade 3-8', amount: 1200, period: 'Annual' },
  { id: 'FEE-04', name: 'Library Fee', grade: 'Grade 3-8', amount: 400, period: 'Annual' },
  { id: 'FEE-05', name: 'Lab Fee', grade: 'Grade 6-8', amount: 600, period: 'Annual' },
  { id: 'FEE-06', name: 'Sports Fee', grade: 'Grade 3-8', amount: 350, period: 'Quarterly' },
];

const initialPayments = [
  { id: 'REC-8821', student: 'Liam Smith', studentId: 'STD-10231', grade: 'Grade 5 - A', type: 'Tuition', amount: 2500, date: '15 Oct 2024', status: 'Paid', method: 'Online' },
  { id: 'REC-8832', student: 'John Smith', studentId: 'STD-10245', grade: 'Grade 6 - B', type: 'Transport', amount: 450, date: '12 Oct 2024', status: 'Pending', method: '-' },
  { id: 'REC-8839', student: 'Michael Chang', studentId: 'STD-10258', grade: 'Grade 4 - C', type: 'Exam', amount: 150, date: '10 Oct 2024', status: 'Overdue', method: '-' },
  { id: 'REC-8841', student: 'Sophia Patel', studentId: 'STD-10262', grade: 'Grade 7 - C', type: 'Tuition', amount: 2200, date: '07 Oct 2024', status: 'Paid', method: 'Online' },
  { id: 'REC-8842', student: 'Sophia Martinez', studentId: 'STD-10265', grade: 'Grade 5 - A', type: 'Library', amount: 2200, date: '07 Oct 2024', status: 'Paid', method: 'Cash' },
  { id: 'REC-8849', student: 'Ethan Jones', studentId: 'STD-10269', grade: 'Grade 6 - A', type: 'Tuition', amount: 2200, date: '05 Oct 2024', status: 'Overdue', method: '-' },
];

const initialPendingDues = [
  { id: 'DUE-01', student: 'John Smith', studentId: 'STD-10245', grade: 'Grade 6 - B', type: 'Transport', amount: 6200, daysOverdue: '-', dueDate: '2026-04-15', status: 'Pending' },
  { id: 'DUE-02', student: 'Michael Chang', studentId: 'STD-10258', grade: 'Grade 4 - C', type: 'Exam', amount: 5400, daysOverdue: '44D', dueDate: '2026-03-15', status: 'Overdue' },
  { id: 'DUE-03', student: 'Ethan Jones', studentId: 'STD-10269', grade: 'Grade 6 - A', type: 'Tuition', amount: 5800, daysOverdue: '38D', dueDate: '2026-03-15', status: 'Overdue' },
  { id: 'DUE-04', student: 'Omar Hassan', studentId: 'STD-10274', grade: 'Grade 12 - B', type: 'Lab Fee', amount: 1200, daysOverdue: '-', dueDate: '2026-04-20', status: 'Pending' },
];

export default function Fees() {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState('structure'); // 'structure' | 'payments' | 'dues'
  const [searchQuery, setSearchQuery] = useState('');
  
  // Datasets State
  const [structures, setStructures] = useState(initialStructures);
  const [payments, setPayments] = useState(initialPayments);
  const [pendingDues, setPendingDues] = useState(initialPendingDues);

  // Edit Modal State
  const [editingStructure, setEditingStructure] = useState(null);

  // --- ACTIONS ---
  const handleDeleteStructure = (id) => {
    if (window.confirm('Are you sure you want to delete this fee category?')) {
      setStructures(structures.filter(item => item.id !== id));
    }
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    setStructures(structures.map(item => item.id === editingStructure.id ? editingStructure : item));
    setEditingStructure(null);
  };

  const handleSendReminder = (studentName) => {
    alert(`Success: Attendance / Fee collection notice reminder sent to ${studentName}!`);
  };

  // --- FILTERS ---
  const filteredPayments = payments.filter(p => 
    p.student.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.studentId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDues = pendingDues.filter(d => 
    d.student.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.studentId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Fee Management</h2>
          <p className="text-xs sm:text-sm text-slate-500">Track fees structure, payments and pending dues</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl shadow-xs hover:bg-slate-50 transition-colors self-start sm:self-auto">
          📤 Export Excel
        </button>
      </div>

      {/* METRIC CARD INSIGHTS BLOCK */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border-l-4 border-emerald-500 p-4 rounded-xl border border-slate-200 shadow-xs flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Collected</p>
            <p className="text-2xl font-black text-slate-900 mt-1">$25,200</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg">💰</div>
        </div>

        <div className="bg-white border-l-4 border-amber-500 p-4 rounded-xl border border-slate-200 shadow-xs flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Pending/Partial</p>
            <p className="text-2xl font-black text-slate-900 mt-1">$11,800</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg">🕒</div>
        </div>

        <div className="bg-white border-l-4 border-rose-500 p-4 rounded-xl border border-slate-200 shadow-xs flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Overdue</p>
            <p className="text-2xl font-black text-slate-900 mt-1">$6,600</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg">⚠️</div>
        </div>
      </div>

      {/* NAVIGATION TABS CONTROL SYSTEM */}
      <div className="flex gap-2 p-1 bg-slate-100 rounded-xl w-fit">
        <button
          onClick={() => { setActiveTab('structure'); setSearchQuery(''); }}
          className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${activeTab === 'structure' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
        >
          📖 Fee Structure
        </button>
        <button
          onClick={() => { setActiveTab('payments'); setSearchQuery(''); }}
          className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${activeTab === 'payments' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
        >
          💳 Payments
        </button>
        <button
          onClick={() => { setActiveTab('dues'); setSearchQuery(''); }}
          className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${activeTab === 'dues' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
        >
          ❗️ Pending dues
        </button>
      </div>

      {/* --- CONTENT WORKSPACE --- */}

      {/* TAB 1: FEE STRUCTURE VIEW */}
      {activeTab === 'structure' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-bold text-slate-900">Fee Categories</h3>
            <button 
              onClick={() => setEditingStructure({ id: 'FEE-' + Date.now(), name: '', grade: '', amount: '', period: 'Annual' })}
              className="px-3 py-1.5 bg-[#3B44F6] text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              + Add Category
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {structures.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:shadow-sm transition-all relative group">
                <div>
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-lg font-bold">
                      📄
                    </div>
                    {/* Action Panel Row */}
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => setEditingStructure(item)}
                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Edit entry"
                      >
                        ✏️
                      </button>
                      <button 
                        onClick={() => handleDeleteStructure(item.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Delete category"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-bold text-slate-900 text-base">{item.name}</h4>
                    <span className="inline-block mt-1 text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                      {item.grade}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-baseline">
                  <span className="text-2xl font-black text-slate-900">${item.amount.toLocaleString()}</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: PAYMENTS JOURNAL WORKSPACE */}
      {activeTab === 'payments' && (
        <div className="space-y-4">
          {/* Internal Filters bar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex-1 relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 text-sm">🔍</span>
              <input 
                type="text" 
                placeholder="Search Student or roll no..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 bg-slate-50/50"
              />
            </div>
            <select className="px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none bg-slate-50/50 text-slate-700 font-medium">
              <option>All Months</option>
              <option>February</option>
              <option>October</option>
            </select>
          </div>

          {/* Desktop Table Viewport */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden hidden lg:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Grade & Section</th>
                  <th className="px-6 py-4">Fee Type</th>
                  <th className="px-6 py-4">Receipt No.</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Paid Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {filteredPayments.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{p.student}</div>
                      <div className="text-xs text-slate-400">{p.studentId}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{p.grade}</td>
                    <td className="px-6 py-4 font-medium">{p.type}</td>
                    <td className="px-6 py-4 text-slate-500 font-mono text-xs">{p.id}</td>
                    <td className="px-6 py-4 font-bold text-slate-900">${p.amount}</td>
                    <td className="px-6 py-4 text-slate-500">{p.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-md ${
                        p.status === 'Paid' ? 'bg-emerald-50 text-emerald-700' :
                        p.status === 'Pending' ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-medium">{p.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Table Viewport Alternative */}
          <div className="block lg:hidden space-y-3">
            {filteredPayments.map((p) => (
              <div key={p.id} className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-sm shadow-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900">{p.student}</h4>
                    <p className="text-xs text-slate-400 font-mono">{p.studentId} • {p.id}</p>
                  </div>
                  <span className={`px-2 py-0.5 text-xs font-bold rounded-md ${
                    p.status === 'Paid' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                  }`}>
                    {p.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-y-1 text-xs pt-2 border-t border-slate-100 text-slate-500">
                  <div>Fee Type: <span className="font-medium text-slate-800">{p.type}</span></div>
                  <div>Class: <span className="font-medium text-slate-800">{p.grade}</span></div>
                  <div>Date: <span className="font-medium text-slate-800">{p.date}</span></div>
                  <div>Method: <span className="font-medium text-slate-800">{p.method}</span></div>
                </div>
                <div className="text-right text-base font-black text-slate-900 pt-1">
                  ${p.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: OUTSTANDING RECORD OVERDUES WORKSPACE */}
      {activeTab === 'dues' && (
        <div className="space-y-4">
          <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl text-rose-900 text-sm font-semibold flex items-center justify-between">
            <span>⚠️ {filteredDues.length} outstanding records found: Total Due Balance $18,500</span>
          </div>

          {/* Table Container Grid Panel Housing */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden hidden lg:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Grade & Section</th>
                  <th className="px-6 py-4">Fee Type</th>
                  <th className="px-6 py-4">Due Amount</th>
                  <th className="px-6 py-4">Days Overdue</th>
                  <th className="px-6 py-4">Due Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {filteredDues.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{d.student}</div>
                      <div className="text-xs text-slate-400">{d.studentId}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{d.grade}</td>
                    <td className="px-6 py-4 font-medium">{d.type}</td>
                    <td className="px-6 py-4 font-bold text-slate-900">${d.amount}</td>
                    <td className="px-6 py-4 font-bold text-rose-600">{d.daysOverdue}</td>
                    <td className="px-6 py-4 text-slate-500">{d.dueDate}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-md ${
                        d.status === 'Pending' ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'
                      }`}>
                        {d.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => handleSendReminder(d.student)}
                        className="px-3 py-1 bg-white border border-slate-200 hover:border-indigo-500 hover:text-indigo-600 text-slate-600 text-xs font-bold rounded-lg transition-all shadow-xs"
                      >
                        🔔 Remind
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Display alternative for Tab 3 */}
          <div className="block lg:hidden space-y-3">
            {filteredDues.map((d) => (
              <div key={d.id} className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 text-sm shadow-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900">{d.student}</h4>
                    <p className="text-xs text-slate-400">{d.studentId} • {d.grade}</p>
                  </div>
                  <span className={`px-2 py-0.5 text-xs font-bold rounded-md ${
                    d.status === 'Overdue' ? 'bg-rose-50 text-rose-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {d.status}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-100">
                  <div className="text-slate-500">
                    Type: <span className="font-semibold text-slate-800">{d.type}</span> <br/>
                    Overdue: <span className="font-bold text-rose-600">{d.daysOverdue}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-black text-slate-900">${d.amount}</div>
                    <div className="text-[11px] text-slate-400">Due: {d.dueDate}</div>
                  </div>
                </div>
                <button 
                  onClick={() => handleSendReminder(d.student)}
                  className="w-full py-2 bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-bold text-xs rounded-lg border border-slate-200 transition-colors"
                >
                  🔔 Send Collection Reminder Notice
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- INLINE CATEGORY ADD/EDIT CONTROL MODAL DIALOGUE --- */}
      {editingStructure && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-xl border border-slate-100 max-w-md w-full p-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              {structures.some(s => s.id === editingStructure.id) ? 'Modify Fee Category' : 'Create Fee Category'}
            </h3>
            
            <form onSubmit={handleEditSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Category Label</label>
                <input 
                  type="text" 
                  required
                  value={editingStructure.name}
                  onChange={(e) => setEditingStructure({ ...editingStructure, name: e.target.value })}
                  placeholder="e.g. Laboratory Fee"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Target Class Set</label>
                  <input 
                    type="text" 
                    required
                    value={editingStructure.grade}
                    onChange={(e) => setEditingStructure({ ...editingStructure, grade: e.target.value })}
                    placeholder="e.g. Grade 1-5"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Cycle Period</label>
                  <select 
                    value={editingStructure.period}
                    onChange={(e) => setEditingStructure({ ...editingStructure, period: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 bg-white"
                  >
                    <option value="Annual">Annual</option>
                    <option value="Term-wise">Term-wise</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Amount ($ USD)</label>
                <input 
                  type="number" 
                  required
                  value={editingStructure.amount}
                  onChange={(e) => setEditingStructure({ ...editingStructure, amount: Number(e.target.value) })}
                  placeholder="300"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button 
                  type="button"
                  onClick={() => setEditingStructure(null)}
                  className="px-4 py-2 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#3B44F6] text-white text-xs font-bold rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  Save Record Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}