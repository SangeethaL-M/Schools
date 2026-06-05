import React, { useState } from 'react';

// ==========================================
// COMPONENT: TEACHER DASHBOARD VIEW (BIG TEXT EDITION)
// ==========================================
function TeacherDashboard() {
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  return (
    <div className="space-y-8 relative pb-16">
      {/* Header Profile Greeting Section */}
      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs">
        <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">Welcome Back, Sarah!</h2>
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
// =========================================================
// COMPONENTS: TEACHER ASSIGNMENTS VIEW WITH LIVE MODAL CREATION & AI
// =========================================================
function TeacherAssignmentsView() {
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [activeAITab, setActiveAITab] = useState('insights');
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // Search & Filter state layers
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Input form state targets matching layout parameters fields
  const [formTitle, setFormTitle] = useState('');
  const [formMaxScore, setFormMaxScore] = useState('');
  const [formClass, setFormClass] = useState('');
  const [formDate, setFormDate] = useState('');

  // Local state initialized with datasets exactly matching Screenshot (1497).jpg
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Quadratic Equations Practice set', files: '2 Files attached', class: '10-A', dueDate: 'Apr 15 2026', submitted: 28, total: 30, pct: 93, status: 'Active', isOverdue: false },
    { id: 2, title: 'Algebraic Expressions', files: '1 File attached', class: '10-C', dueDate: 'Apr 13 2026', submitted: 30, total: 30, pct: 100, status: 'Needs Grading', isOverdue: true },
    { id: 3, title: 'Statistics chapter 4 problems', files: '3 Files attached', class: '10-D', dueDate: 'Apr 18 2026', submitted: 25, total: 25, pct: 100, status: 'Completed', isOverdue: false },
    { id: 4, title: 'Trigonometry Introduction Quiz', files: '1 File attached', class: '10-B', dueDate: 'Apr 10 2026', submitted: 12, total: 24, pct: 50, status: 'Active', isOverdue: false }
  ]);

  // Form Submission Logic Handler to update data pipelines reactively
  const handleCreateAssignment = (e) => {
    e.preventDefault();
    if (!formTitle || !formClass || !formDate) return;

    const formattedDate = new Date(formDate).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const newRecord = {
      id: Date.now(),
      title: formTitle,
      files: '0 Files attached',
      class: formClass.toUpperCase(),
      dueDate: formattedDate,
      submitted: 0,
      total: 32, // Default fallback classroom count metric
      pct: 0,
      status: 'Active',
      isOverdue: false
    };

    setAssignments([newRecord, ...assignments]);
    
    // Clear out standard fields state inputs
    setFormTitle('');
    setFormMaxScore('');
    setFormClass('');
    setFormDate('');
    setShowCreateModal(false);
  };

  // Metric aggregates computed fields counters
  const totalActive = assignments.filter(a => a.status === 'Active').length;
  const totalNeedsGrading = assignments.filter(a => a.status === 'Needs Grading').length;
  const totalCompleted = assignments.filter(a => a.status === 'Completed').length;

  // Multi-parameter filtering process layout pipeline
  const filteredAssignments = assignments.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'All' || item.class === selectedClass;
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    return matchesSearch && matchesClass && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in relative pb-12">
      
      {/* SECTION CONTAINER TOP BAR METRIC */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900">Assignments</h2>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="px-5 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-bold rounded-xl shadow-xs transition-transform active:scale-98"
        >
          + Create Assignment
        </button>
      </div>

      {/* METRIC SUMMATION COUNTER CARDS GROUP LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl font-bold">📄</div>
          <div>
            <h3 className="text-2xl font-black text-slate-900">{totalActive + 10}</h3>
            <p className="text-xs font-bold text-slate-400">Active Assignments</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-bold">📝</div>
          <div>
            <h3 className="text-2xl font-black text-slate-900">{totalNeedsGrading + 7}</h3>
            <p className="text-xs font-bold text-slate-400">Needs Grading</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold">✓</div>
          <div>
            <h3 className="text-2xl font-black text-slate-900">{totalCompleted + 44}</h3>
            <p className="text-xs font-bold text-slate-400">Completed</p>
          </div>
        </div>
      </div>

      {/* FILTER CONTROLS BAR LAYOUT BLOCK */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-xs border border-slate-100">
        <div className="relative w-full md:max-w-xs">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
          <input 
            type="text" 
            placeholder="Search assignments..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-hidden focus:border-indigo-500 font-medium text-slate-700"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <select 
            value={selectedClass} 
            onChange={(e) => setSelectedClass(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-600 font-bold outline-hidden focus:border-indigo-500"
          >
            <option value="All">All Classes</option>
            <option value="10-A">Class 10-A</option>
            <option value="10-B">Class 10-B</option>
            <option value="10-C">Class 10-C</option>
            <option value="10-D">Class 10-D</option>
          </select>

          <select 
            value={selectedStatus} 
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-600 font-bold outline-hidden focus:border-indigo-500"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Needs Grading">Needs Grading</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* CORE DATA DISPLAY MATRIX SHEET TABLE */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-4 px-6">Assignment Title</th>
                <th className="py-4 px-6">Class</th>
                <th className="py-4 px-6">Due Date</th>
                <th className="py-4 px-6">Submissions</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              {filteredAssignments.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-bold text-[15px]">{item.title}</span>
                      <span className="text-xs text-slate-400 font-bold mt-0.5">📎 {item.files}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-indigo-50 text-indigo-600">{item.class}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      <span>📅</span>
                      <span className={item.isOverdue ? 'text-rose-500 font-extrabold' : 'text-slate-500'}>{item.dueDate}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col gap-1 max-w-[130px]">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                        <span>{item.submitted}/{item.total} Submitted</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${item.pct === 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                      item.status === 'Completed' ? 'bg-purple-50 text-purple-600' :
                      item.status === 'Needs Grading' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 flex items-center gap-1">
                        <span>👁️</span> {item.status === 'Completed' ? 'View' : 'Grade'}
                      </button>
                      <button className="p-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs text-slate-400">
                        📥
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* =========================================================
          MODAL INTERACTIVE POPUP LAYER: CREATE ASSIGNMENT
         ========================================================= */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-6 space-y-4">
            <h3 className="text-lg font-black text-slate-800">Create New Assignment</h3>
            
            <form onSubmit={handleCreateAssignment} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 block">Assignment title</label>
                <input 
                  type="text" 
                  placeholder="eg midterm maths"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 outline-hidden font-medium text-slate-800 bg-slate-50/50"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 block">Max Score</label>
                  <input 
                    type="text" 
                    placeholder="Maths"
                    value={formMaxScore}
                    onChange={(e) => setFormMaxScore(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 outline-hidden font-medium text-slate-800 bg-slate-50/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 block">Class</label>
                  <input 
                    type="text" 
                    placeholder="eg 10A"
                    value={formClass}
                    onChange={(e) => setFormClass(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 outline-hidden font-medium text-slate-800 bg-slate-50/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 block">Date</label>
                <input 
                  type="date" 
                  value={formDate}
                  onChange={(e) => setFormDate(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 outline-hidden font-medium text-slate-800 bg-slate-50/50"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={() => setShowCreateModal(false)}
                  className="px-5 py-2 border border-slate-200 text-slate-500 hover:bg-slate-50 rounded-xl text-xs font-bold"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl text-xs font-bold shadow-xs"
                >
                  Create Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FLOATING ACTION TRIGGER TRIGGER ACTION BUTTON */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={() => setShowAIAssistant(true)}
          className="px-6 py-4 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
        >
          <span>⭐</span> AI Assistant
        </button>
      </div>

      {/* =========================================================
          BUILT-IN 3-TAB POPUP INTERACTIVE SCREEN MODAL 
         ========================================================= */}
      {showAIAssistant && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-[#F8FAFC] w-full max-w-md rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
            
            <div className="bg-[#4F46E5] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xl">🤖</span>
                <div>
                  <h4 className="font-bold text-sm">AI Teaching Assistant</h4>
                  <span className="text-[10px] text-indigo-200 block">Powered by classroom analytics</span>
                </div>
              </div>
              <button onClick={() => setShowAIAssistant(false)} className="text-white hover:bg-white/10 w-7 h-7 rounded-full flex items-center justify-center text-sm">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-3 border-b border-slate-200 bg-white p-1 gap-1">
              {[
                { id: 'insights', label: 'Insights', icon: '📈' },
                { id: 'suggestions', label: 'Suggestions', icon: '💡' },
                { id: 'alerts', label: 'Alerts', icon: '🛡️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAITab(tab.id)}
                  className={`py-2 text-center rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    activeAITab === tab.id ? 'bg-[#EEF2F6] text-[#4F46E5]' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-5 space-y-3 min-h-[220px]">
              {activeAITab === 'insights' && (
                <>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>📊</span>
                    <p>Submissions rate hit 93% for the Quadratic Equations practice bundle within target parameters.</p>
                  </div>
                </>
              )}

              {activeAITab === 'suggestions' && (
                <>
                  <div className="p-3.5 bg-indigo-50 border border-indigo-100 text-indigo-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>💡</span>
                    <p>Based on grading history, bulk automated feedback scripts could scale scoring throughput for standard worksheets.</p>
                  </div>
                </>
              )}

              {activeAITab === 'alerts' && (
                <>
                  <div className="p-3.5 bg-rose-50 border border-rose-100 text-rose-900 text-xs font-bold rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span className="text-rose-600 font-extrabold">OVERDUE</span>
                    <p className="font-medium text-rose-900">Algebraic Expressions submission verification cycles have lapsed. 0 entries pending validation.</p>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
// =========================================================
// COMPONENTS: TEACHER SETTINGS VIEW WITH WORKING TOGGLES & COMPLETE AI
// =========================================================
function TeacherSettingsView() {
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [activeAITab, setActiveAITab] = useState('insights');
  const [saveStatus, setSaveStatus] = useState('');

  // Profile Form States (Now including Phone and Department fields)
  const [fullName, setFullName] = useState('Sarah Johnson');
  const [email, setEmail] = useState('sarah.johnson@edusmart.edu');
  const [role, setRole] = useState('Senior Mathematics Teacher');
  const [phone, setPhone] = useState('+1 (555) 234-5678');
  const [department, setDepartment] = useState('Sciences & Mathematics');

  // Interactive Down-Column System Toggles States
  const [toggles, setToggles] = useState({
    emailAlerts: true,
    smsNotifications: false,
    autoAttendanceReport: true,
    aiSuggestionsVisible: true,
    parentPortalMessaging: true,
    twoFactorAuth: false
  });

  // Handler for down-column toggles
  const handleToggle = (key) => {
    setToggles(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Form Save Execution handler
  const handleSaveChanges = (e) => {
    e.preventDefault();
    setSaveStatus('Saving changes...');
    
    setTimeout(() => {
      setSaveStatus('✅ Settings updated successfully!');
      setTimeout(() => setSaveStatus(''), 3000);
    }, 800);
  };

  return (
    <div className="space-y-6 animate-fade-in relative pb-16">
      
      {/* HEADER SECTION AREA */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Account Settings</h2>
          <p className="text-xs font-semibold text-slate-400 mt-0.5">Manage your workspace configuration, security frameworks, and notification triggers.</p>
        </div>
      </div>

      {/* MAIN TWO-COLUMN SYSTEM LAYOUT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* LEFT COLUMN: ACCOUNT PROFILE FORM BLOCK */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-xs">
          <h3 className="text-base font-black text-slate-800 mb-4 flex items-center gap-2">
            👤 Profile Configuration
          </h3>
          
          <form onSubmit={handleSaveChanges} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 block">Full Name</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 outline-hidden font-medium text-slate-800 bg-slate-50/50"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 block">Academic Role Title</label>
                <input 
                  type="text" 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 outline-hidden font-medium text-slate-800 bg-slate-50/50"
                  required
                />
              </div>
            </div>

            {/* NEW ADDED FIELDS GRID BLOCK */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 block">Phone Number</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 outline-hidden font-medium text-slate-800 bg-slate-50/50"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 block">Department</label>
                <input 
                  type="text" 
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 outline-hidden font-medium text-slate-800 bg-slate-50/50"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 block">Institutional Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 outline-hidden font-medium text-slate-800 bg-slate-50/50"
                required
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <span className="text-xs font-bold text-indigo-600 animate-pulse">{saveStatus}</span>
              <button 
                type="submit" 
                className="px-6 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                💾 Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: DOWN COLUMN TOGGLE DASHBOARD PANELS */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs space-y-5">
          <div>
            <h3 className="text-base font-black text-slate-800">Preferences Dashboard</h3>
            <p className="text-[11px] font-bold text-slate-400">Toggle live runtime environmental states down below.</p>
          </div>

          <div className="space-y-3.5">
            {[
              { id: 'emailAlerts', title: 'Email Alerts Dispatcher', desc: 'Forward critical grade anomalies instantly.' },
              { id: 'smsNotifications', title: 'SMS Critical Delivery', desc: 'Send automated cell pings for high alert cases.' },
              { id: 'autoAttendanceReport', title: 'Automated Log Syncing', desc: 'Compile roster archives automatically at 4 PM daily.' },
              { id: 'aiSuggestionsVisible', title: 'Contextual AI Assist Prompts', desc: 'Display optimization recommendations in dashboards.' },
              { id: 'parentPortalMessaging', title: 'Direct Parent Lines Link', desc: 'Permit direct chat routing to verify student files.' },
              { id: 'twoFactorAuth', title: 'Strict Two-Factor Security', desc: 'Require biometric tokens during authorization loops.' }
            ].map((toggleItem) => (
              <div key={toggleItem.id} className="flex items-start justify-between p-2.5 hover:bg-slate-50/70 rounded-xl border border-transparent hover:border-slate-100 transition-all gap-4">
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-800">{toggleItem.title}</h4>
                  <p className="text-[10px] font-medium text-slate-400 leading-tight">{toggleItem.desc}</p>
                </div>
                
                {/* Working Dynamic Toggle Pill Switch */}
                <button
                  type="button"
                  onClick={() => handleToggle(toggleItem.id)}
                  className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-hidden relative flex-shrink-0 ${
                    toggles[toggleItem.id] ? 'bg-emerald-500' : 'bg-slate-200'
                  }`}
                >
                  <div 
                    className={`bg-white w-4 h-4 rounded-full shadow-xs transform duration-200 ${
                      toggles[toggleItem.id] ? 'translate-x-5' : 'translate-x-0'
                    }`} 
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FLOATING ACTION TRIGGER ACTION BUTTON */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={() => setShowAIAssistant(true)}
          className="px-6 py-4 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
        >
          <span>⭐</span> AI Assistant
        </button>
      </div>

      {/* =========================================================
          BUILT-IN 3-TAB POPUP MODAL (FULLY INJECTED CONTENT DESIGN)
         ========================================================= */}
      {showAIAssistant && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-[#F8FAFC] w-full max-w-md rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
            
            {/* Modal Heading Header Banner */}
            <div className="bg-[#4F46E5] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xl">🤖</span>
                <div>
                  <h4 className="font-bold text-sm">AI Configuration Assistant</h4>
                  <span className="text-[10px] text-indigo-200 block">Workspace preference engine monitoring</span>
                </div>
              </div>
              <button onClick={() => setShowAIAssistant(false)} className="text-white hover:bg-white/10 w-7 h-7 rounded-full flex items-center justify-center text-sm">
                ✕
              </button>
            </div>

            {/* TAB CONTROLS SELECTOR SELECTION BAR */}
            <div className="grid grid-cols-3 border-b border-slate-200 bg-white p-1 gap-1">
              {[
                { id: 'insights', label: 'Insights', icon: '📈' },
                { id: 'suggestions', label: 'Suggestions', icon: '💡' },
                { id: 'alerts', label: 'Alerts', icon: '🛡️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAITab(tab.id)}
                  className={`py-2 text-center rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    activeAITab === tab.id ? 'bg-[#EEF2F6] text-[#4F46E5]' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* LIVE DENSE FULL CONTENT INNER BODY WRAPPER */}
            <div className="p-5 space-y-3 min-h-[260px] max-h-[380px] overflow-y-auto">
              
              {/* TAB 1: INSIGHTS */}
              {activeAITab === 'insights' && (
                <>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>📊</span>
                    <div>
                      <strong className="block text-emerald-950 font-bold mb-0.5">System Performance High</strong>
                      Your account profile and verification metadata indicators are completely optimized across security matrices. Sync lag across nodes averages less than 45ms.
                    </div>
                  </div>
                  <div className="p-3.5 bg-indigo-50 border border-indigo-100 text-indigo-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>⚙️</span>
                    <div>
                      <strong className="block text-indigo-950 font-bold mb-0.5">Automation Optimization</strong>
                      Your 'Automated Log Syncing' switch has successfully reduced manual administrative processing parameters by 3.5 hours per workload cycle this month.
                    </div>
                  </div>
                </>
              )}

              {/* TAB 2: SUGGESTIONS */}
              {activeAITab === 'suggestions' && (
                <>
                  <div className="p-3.5 bg-amber-50 border border-amber-100 text-amber-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>💡</span>
                    <div>
                      <strong className="block text-amber-950 font-bold mb-0.5">Recommended Notification Adjustments</strong>
                      Enabling 'SMS Critical Delivery' is highly recommended before exam periods. Data registers 40% faster compliance response rates on parent action items when mobile dispatch triggers are active.
                    </div>
                  </div>
                  <div className="p-3.5 bg-indigo-50 border border-indigo-100 text-indigo-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>🔒</span>
                    <div>
                      <strong className="block text-indigo-950 font-bold mb-0.5">Credential Masking Policy</strong>
                      Consider mapping institutional single-sign-on tokens if managing configurations across separate device terminals to simplify session authorization cycles.
                    </div>
                  </div>
                </>
              )}

              {/* TAB 3: ALERTS */}
              {activeAITab === 'alerts' && (
                <>
                  <div className="p-3.5 bg-rose-50 border border-rose-100 text-rose-900 text-xs font-bold rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span className="text-rose-600 font-extrabold text-xs">SECURITY</span>
                    <div>
                      <strong className="block text-rose-950 font-black mb-0.5">Two-Factor Authentication Offline</strong>
                      <p className="font-medium text-rose-900">Your profile dashboard framework is currently bypassing strict multi-factor checks. Activate biometric tokens down the preferences index loop to secure student records from vulnerabilities.</p>
                    </div>
                  </div>
                  <div className="p-3.5 bg-amber-50 border border-amber-100 text-amber-900 text-xs font-bold rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span className="text-amber-600 font-extrabold text-xs">WARNING</span>
                    <div>
                      <strong className="block text-amber-950 font-black mb-0.5">Unsaved Input Fields Flag</strong>
                      <p className="font-medium text-amber-900">Modifying configuration fields without executing the explicit 'Save Changes' button statement will result in rolling configuration state changes back to initial workspace values.</p>
                    </div>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
// =========================================================
// COMPONENTS: TEACHER MESSAGES VIEW WITH INTERACTIVE THREADS & AI
// =========================================================
function TeacherMessagesView() {
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [activeAITab, setActiveAITab] = useState('insights');
  const [messageFilter, setMessageFilter] = useState('All'); // 'All', 'Students', 'Parents'
  const [chatSearch, setChatSearch] = useState('');
  const [textInput, setTextInput] = useState('');

  // Contact list thread datasets exactly matching Screenshot (1499).jpg
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Sarah Smith', role: 'Parent (Alice Freeman)', time: '10:42 AM', preview: "That's wonderful news! Th...", unread: 0, type: 'Parents' },
    { id: 2, name: 'Michael Johnson', role: 'Teacher Colleague', time: '09:15 AM', preview: 'Can we schedule a meetin...', unread: 2, type: 'All' },
    { id: 3, name: 'David Martinez', role: 'Student (Roll: 02)', time: 'Yesterday', preview: 'I have submitted my assign...', unread: 0, type: 'Students' },
    { id: 4, name: 'Emma Chen', role: 'Student (Roll: 03)', time: 'Yesterday', preview: 'Thank you for the feedback...', unread: 0, type: 'Students' },
    { id: 5, name: 'Priya Patel', role: 'Student (Roll: 05)', time: 'Mon', preview: 'Sir, could you please expla...', unread: 1, type: 'Students' }
  ]);

  const [activeContactId, setActiveContactId] = useState(1);

  // Live active dialogue streams mirroring design mock parameters perfectly
  const [chatThreads, setChatThreads] = useState({
    1: [
      { id: 101, sender: 'teacher', text: "Good morning Mrs. Smith! I wanted to give you a quick update on Alice's performance in class lately.", time: '09:35 AM' },
      { id: 102, sender: 'parent', text: "Good morning Mr. Fox! Oh, I'd love to hear about it. How is she doing?", time: '09:40 AM' },
      { id: 103, sender: 'teacher', text: "She is doing fantastically. She just scored a 92% on her mid-term physics exam! Her practical work has also improved significantly.", time: '09:41 AM' },
      { id: 104, sender: 'parent', text: "That's wonderful news! Thank you for the update and your continued support. She has been studying very hard.", time: '10:42 AM' }
    ],
    2: [{ id: 201, sender: 'parent', text: "Can we schedule a meeting regarding the math syllabus?", time: '09:15 AM' }],
    3: [{ id: 301, sender: 'parent', text: "I have submitted my assignment through the portal link.", time: 'Yesterday' }],
    4: [{ id: 401, sender: 'parent', text: "Thank you for the feedback on my layout framework project.", time: 'Yesterday' }],
    5: [{ id: 501, sender: 'parent', text: "Sir, could you please explain the parameters configuration once more?", time: 'Mon' }]
  });

  const activeContact = contacts.find(c => c.id === activeContactId) || contacts[0];

  // Dynamic status submission processing logic updates
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Append new text block array item
    const newMsg = {
      id: Date.now(),
      sender: 'teacher',
      text: textInput,
      time: currentTime
    };

    setChatThreads(prev => ({
      ...prev,
      [activeContactId]: [...(prev[activeContactId] || []), newMsg]
    }));

    // Update list preview tracking strings
    setContacts(prev => prev.map(c => c.id === activeContactId ? { ...c, time: currentTime, preview: textInput.substring(0, 24) + '...' } : c));
    setTextInput('');
  };

  // Multiple parameter filter algorithms sequence
  const filteredContacts = contacts.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(chatSearch.toLowerCase());
    const matchesTab = messageFilter === 'All' || c.type === messageFilter;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6 animate-fade-in relative pb-12">
      
      {/* HEADER BAR SECTION CONTROLS */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900">Messages</h2>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-slate-200 text-slate-600 bg-white rounded-xl text-xs font-bold hover:bg-slate-50">
            ⋮ Mark all as read
          </button>
          <button className="px-5 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold rounded-xl shadow-xs">
            📭 New Message
          </button>
        </div>
      </div>

      {/* CHAT INTERACTIVE WINDOW BODY SPLIT GRID CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden h-[calc(100vh-240px)] min-h-[500px]">
        
        {/* LEFT COLUMN: CONTACT CHANNELS THREAD SELECTION PANELS */}
        <div className="border-r border-slate-100 flex flex-col bg-white">
          
          {/* Search channel control node input wrapper */}
          <div className="p-4 border-b border-slate-50">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
              <input 
                type="text" 
                placeholder="Search messages..." 
                value={chatSearch}
                onChange={(e) => setChatSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-hidden focus:border-indigo-500 font-medium text-slate-700"
              />
            </div>
          </div>

          {/* Nav filters selection sub-tab bar list */}
          <div className="flex border-b border-slate-100 text-xs font-bold text-slate-400 px-4 gap-4 bg-white">
            {['All', 'Students', 'Parents'].map((tab) => (
              <button
                key={tab}
                onClick={() => setMessageFilter(tab)}
                className={`py-3 relative ${messageFilter === tab ? 'text-[#4F46E5] border-b-2 border-[#4F46E5]' : 'hover:text-slate-600'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Contacts dynamic list sheet render loop wrapper */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-50/50">
            {filteredContacts.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveContactId(item.id)}
                className={`p-4 flex items-start gap-3.5 cursor-pointer transition-colors ${
                  activeContactId === item.id ? 'bg-indigo-50/40 border-l-4 border-indigo-600' : 'hover:bg-slate-50/40'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-sm relative">
                  👤
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-bold text-slate-800 text-sm truncate">{item.name}</h4>
                    <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">{item.time}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-semibold truncate mb-1">{item.role}</p>
                  <p className="text-xs text-slate-500 font-medium truncate">{item.preview}</p>
                </div>
                {item.unread > 0 && (
                  <span className="w-4 h-4 bg-rose-500 text-white text-[9px] font-black rounded-full flex items-center justify-center flex-shrink-0">
                    {item.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: CORE MESSAGES ACTIVE STREAM VIEW WINDOW CONTAINER */}
        <div className="lg:col-span-2 flex flex-col bg-[#F8FAFC]/50">
          
          {/* Active dialogue room top tracking meta bar status rows */}
          <div className="bg-white p-4 border-b border-slate-100 flex items-center justify-between shadow-3xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-base">👤</div>
              <div>
                <h3 className="font-bold text-slate-800 text-[15px]">{activeContact.name}</h3>
                <p className="text-xs text-slate-400 font-bold">{activeContact.role}</p>
              </div>
            </div>
            {/* Meta tool elements block mapping standard design anchors */}
            <div className="flex items-center gap-4 text-slate-400 font-bold text-sm pr-2">
              <button className="hover:text-slate-600">📞</button>
              <button className="hover:text-slate-600">📹</button>
              <button className="hover:text-slate-600">ⓘ</button>
            </div>
          </div>

          {/* Active text streams output grid display area container wrapper */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="text-center text-[10px] text-slate-400 font-black tracking-wider uppercase my-2">
              Today, 09:30 AM
            </div>

            {(chatThreads[activeContactId] || []).map((msg) => {
              const isTeacher = msg.sender === 'teacher';
              return (
                <div key={msg.id} className={`flex gap-3 max-w-[85%] ${isTeacher ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}>
                  <div className="w-7 h-7 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-xs mt-1">
                    {isTeacher ? '👨‍🏫' : '👤'}
                  </div>
                  <div className="space-y-1">
                    <div className={`p-3.5 rounded-2xl text-sm font-medium leading-relaxed shadow-3xs ${
                      isTeacher ? 'bg-[#4F46E5] text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                    <p className={`text-[10px] text-slate-400 font-bold ${isTeacher ? 'text-right' : 'text-left'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CHAT CONTAINER BOTTOM TEXT INPUT FIELD PANEL SHEET FORM */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex items-center gap-3">
            <button type="button" className="text-slate-400 hover:text-slate-500 text-lg px-1 font-bold">📎</button>
            <button type="button" className="text-slate-400 hover:text-slate-500 text-lg px-1 font-bold">🖼️</button>
            <input 
              type="text" 
              placeholder="Type your message here..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-hidden focus:border-indigo-500 font-medium text-slate-800"
            />
            <button type="button" className="text-slate-400 hover:text-slate-500 text-lg px-1 font-bold">😊</button>
            <button 
              type="submit" 
              className="w-9 h-9 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-full flex items-center justify-center text-sm shadow-xs transition-transform active:scale-95"
            >
              ➔
            </button>
          </form>

        </div>
      </div>

      {/* FLOATING ACTION TRIGGER TRIGGER ACTION BUTTON CONTAINER MATCHING SCREENSHOT (1500).JPG */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={() => setShowAIAssistant(true)}
          className="px-6 py-4 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
        >
          <span>⭐</span> AI Assistant
        </button>
      </div>

      {/* =========================================================
          BUILT-IN 3-TAB POPUP INTERACTIVE SCREEN MODAL 
         ========================================================= */}
      {showAIAssistant && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-[#F8FAFC] w-full max-w-md rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
            
            <div className="bg-[#4F46E5] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xl">🤖</span>
                <div>
                  <h4 className="font-bold text-sm">AI Teaching Assistant</h4>
                  <span className="text-[10px] text-indigo-200 block">Powered by classroom analytics</span>
                </div>
              </div>
              <button onClick={() => setShowAIAssistant(false)} className="text-white hover:bg-white/10 w-7 h-7 rounded-full flex items-center justify-center text-sm">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-3 border-b border-slate-200 bg-white p-1 gap-1">
              {[
                { id: 'insights', label: 'Insights', icon: '📈' },
                { id: 'suggestions', label: 'Suggestions', icon: '💡' },
                { id: 'alerts', label: 'Alerts', icon: '🛡️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAITab(tab.id)}
                  className={`py-2 text-center rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    activeAITab === tab.id ? 'bg-[#EEF2F6] text-[#4F46E5]' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-5 space-y-3 min-h-[220px]">
              {activeAITab === 'insights' && (
                <>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>💬</span>
                    <p>Parent communications throughput rose 24% this week following the automated progress dispatch distribution cycle.</p>
                  </div>
                </>
              )}

              {activeAITab === 'suggestions' && (
                <>
                  <div className="p-3.5 bg-indigo-50 border border-indigo-100 text-indigo-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>💡</span>
                    <p>Draft response suggestion: "Thank you Mrs. Smith, I will continue coordinating closer monitoring blocks during her practice labs."</p>
                  </div>
                </>
              )}

              {activeAITab === 'alerts' && (
                <>
                  <div className="p-3.5 bg-amber-50 border border-amber-100 text-amber-900 text-xs font-bold rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span className="text-amber-600 font-extrabold">PENDING</span>
                    <p className="font-medium text-amber-900">Michael Johnson thread contains unread elements flag outstanding since early morning hours.</p>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
// =========================================================
// COMPONENTS: TEACHER ATTENDANCE VIEW WITH SELF-CONTAINED AI ASSISTANT
// =========================================================
function TeacherAttendanceView() {
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [activeAITab, setActiveAITab] = useState('insights'); // 'insights', 'suggestions', 'alerts'
  const [selectedClass, setSelectedClass] = useState('10-A');
  const [selectedDate, setSelectedDate] = useState('Today, Apr 26');

  // Roster data matching the values and states in Screenshot (1496).jpg
  const [studentsAttendance, setStudentsAttendance] = useState([
    { rollNo: '01', name: 'Alice Freeman', status: 'Present' },
    { rollNo: '02', name: 'David Martinez', status: 'Absent' },
    { rollNo: '03', name: 'Emma Chen', status: 'Present' },
    { rollNo: '04', name: 'James Wilson', status: 'Late' },
    { rollNo: '05', name: 'Priya Patel', status: 'Present' },
    { rollNo: '06', name: 'Mateo Garcia', status: 'Present' },
  ]);

  // Handler to toggle selection values instantly
  const handleStatusChange = (rollNo, newStatus) => {
    setStudentsAttendance(prev =>
      prev.map(student => student.rollNo === rollNo ? { ...student, status: newStatus } : student)
    );
  };

  return (
    <div className="space-y-6 animate-fade-in relative pb-12">
      
      {/* SECTION HEADER BLOCK */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Attendance Marking</h2>
        </div>
        <button className="px-6 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-bold rounded-xl shadow-xs transition-colors">
          💾 Save Attendance
        </button>
      </div>

      {/* TWO-COLUMN WORKSPACE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* LEFT COLUMN: ROSTER LIST INTERACTIVE WRAPPER */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-xs space-y-6">
          
          {/* Controls Bar Row */}
          <div className="flex flex-wrap items-center gap-3 justify-between pb-2 border-b border-slate-50">
            <div className="flex items-center gap-3">
              {/* Class Selector dropdown mock container */}
              <div className="relative bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span>👥</span>
                <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="bg-transparent outline-hidden pr-4 cursor-pointer">
                  <option value="10-A">Class 10-A Mathematics</option>
                  <option value="10-B">Class 10-B Mathematics</option>
                  <option value="10-C">Class 10-C Advanced Algebra</option>
                </select>
              </div>

              {/* Date selector dropdown mock container */}
              <div className="relative bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span>📅</span>
                <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="bg-transparent outline-hidden pr-4 cursor-pointer">
                  <option value="Today, Apr 26">Today, Apr 26</option>
                  <option value="Yesterday, Apr 25">Yesterday, Apr 24</option>
                </select>
              </div>
            </div>

            <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
              32 Students
            </span>
          </div>

          {/* Student Interactive Roll Call Rows */}
          <div className="space-y-3.5">
            {studentsAttendance.map((student) => (
              <div key={student.rollNo} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 rounded-xl border border-slate-100/70 transition-colors gap-3">
                
                {/* Meta Identity Block */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-sm">👤</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[15px]">{student.name}</h4>
                    <p className="text-xs font-semibold text-slate-400">Roll No: {student.rollNo}</p>
                  </div>
                </div>

                {/* Status Switch Controls matching layout configuration options */}
                <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200/60 self-start sm:self-auto">
                  <button
                    onClick={() => handleStatusChange(student.rollNo, 'Present')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      student.status === 'Present'
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    ✓ Present
                  </button>
                  <button
                    onClick={() => handleStatusChange(student.rollNo, 'Absent')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      student.status === 'Absent'
                        ? 'bg-rose-50 text-rose-600 border border-rose-200 font-extrabold'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    ✕ Absent
                  </button>
                  <button
                    onClick={() => handleStatusChange(student.rollNo, 'Late')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      student.status === 'Late'
                        ? 'bg-amber-50 text-amber-600 border border-amber-200'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    🕒 Late
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: MONTHLY ANALYTICS INFOGRAPHICS SIDEBAR */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs space-y-6">
          <h3 className="text-lg font-bold text-slate-900">Monthly Analytics</h3>

          {/* Bar Chart Graphics Spline Simulator matching image metrics details */}
          <div className="h-44 border-b border-dashed border-slate-200 relative flex items-end justify-between px-4 pb-1 pt-4 bg-slate-50/50 rounded-xl">
            {/* Value scale milestones reference */}
            <div className="absolute left-2 top-2 bottom-2 flex flex-col justify-between text-[10px] font-bold text-slate-300 pointer-events-none">
              <span>100</span><span>60</span><span>25</span><span>0</span>
            </div>

            {/* Simulated bar nodes data loops representing Jan - Apr */}
            {[
              { m: 'Jan', p: '92%', a: '8%' },
              { m: 'Feb', p: '88%', a: '12%' },
              { m: 'Mar', p: '95%', a: '5%' },
              { m: 'Apr', p: '91%', a: '9%' }
            ].map((bar, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1.5 h-full justify-end w-12 group">
                <div className="flex gap-1 items-end h-full w-full justify-center">
                  {/* Present Column Bar */}
                  <div className="bg-[#8B5CF6]/80 rounded-t-xs w-2.5 transition-all group-hover:bg-[#8B5CF6]" style={{ height: bar.p }} />
                  {/* Absent Column Bar */}
                  <div className="bg-rose-400/80 rounded-t-xs w-2.5 transition-all group-hover:bg-rose-400" style={{ height: bar.a }} />
                </div>
                <span className="text-[11px] font-bold text-slate-400">{bar.m}</span>
              </div>
            ))}
          </div>

          {/* Color Guide Keys Indicators */}
          <div className="flex items-center justify-center gap-6 text-xs font-bold text-slate-500">
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-xs bg-[#8B5CF6]" /> Present</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-xs bg-rose-400" /> Absent</div>
          </div>

          {/* Cohort Progress Index Score Cards Summary Section */}
          <div className="space-y-4 pt-2 border-t border-slate-50">
            {[
              { id: 'Class 10-A', rate: '92%' },
              { id: 'Class 10-B', rate: '96%' },
              { id: 'Class 10-C', rate: '85%' },
              { id: 'Class 10-D', rate: '96%' }
            ].map((cohort) => (
              <div key={cohort.id} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>{cohort.id}</span>
                  <span>{cohort.rate}</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-[#8B5CF6]" style={{ width: cohort.rate }} />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* FLOATING ACTION TRIGGER TRIGGER ACTION BUTTON */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={() => setShowAIAssistant(true)}
          className="px-6 py-4 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
        >
          <span>⭐</span> AI Assistant
        </button>
      </div>

      {/* =========================================================
          BUILT-IN 3-TAB POPUP INTERACTIVE SCREEN MODAL 
         ========================================================= */}
      {showAIAssistant && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-[#F8FAFC] w-full max-w-md rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
            
            {/* Modal Heading Header Banner Sheet */}
            <div className="bg-[#4F46E5] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xl">🤖</span>
                <div>
                  <h4 className="font-bold text-sm">AI Teaching Assistant</h4>
                  <span className="text-[10px] text-indigo-200 block">Powered by classroom analytics</span>
                </div>
              </div>
              <button onClick={() => setShowAIAssistant(false)} className="text-white hover:bg-white/10 w-7 h-7 rounded-full flex items-center justify-center text-sm">
                ✕
              </button>
            </div>

            {/* TAB INTERACTIVE CONTROLS BAR */}
            <div className="grid grid-cols-3 border-b border-slate-200 bg-white p-1 gap-1">
              {[
                { id: 'insights', label: 'Insights', icon: '📈' },
                { id: 'suggestions', label: 'Suggestions', icon: '💡' },
                { id: 'alerts', label: 'Alerts', icon: '🛡️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAITab(tab.id)}
                  className={`py-2 text-center rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    activeAITab === tab.id ? 'bg-[#EEF2F6] text-[#4F46E5]' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* LIVE DATA SHEETS INFO SHEETS */}
            <div className="p-5 space-y-3 min-h-[220px]">
              {activeAITab === 'insights' && (
                <>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>📊</span>
                    <p>Friday attendance metrics reveal overall attendance rates improved by 4% across Class 10-A cohorts this cycle.</p>
                  </div>
                  <div className="p-3.5 bg-indigo-50 border border-indigo-100 text-indigo-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>📅</span>
                    <p>Midweek tracking indicates mid-morning segments present the lowest rate of unexcused late marks.</p>
                  </div>
                </>
              )}

              {activeAITab === 'suggestions' && (
                <>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>💡</span>
                    <p>Automate roll call notifications to push instant alerts directly into parent group lines immediately after saving logs.</p>
                  </div>
                </>
              )}

              {activeAITab === 'alerts' && (
                <>
                  <div className="p-3.5 bg-rose-50 border border-rose-100 text-rose-900 text-xs font-bold rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span className="text-rose-600 font-extrabold">HIGH</span>
                    <p className="font-medium text-rose-900">David Martinez has recorded consecutive unexcused absent indicators this week loop.</p>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
// =========================================================
// COMPONENTS: TEACHER STUDENTS VIEW WITH SELF-CONTAINED AI ASSISTANT
// =========================================================
function TeacherStudents() {
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [activeAITab, setActiveAITab] = useState('insights'); // 'insights', 'suggestions', 'alerts'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All');

  // Student list database matches your screenshots layout structure exactly
  const studentsData = [
    { id: 'STU-2023-001', name: 'Emma Watson', class: '10-A', attendance: 98, status: 'Excellent', performance: 'Grade A+', score: '92/100', statusColor: 'emerald' },
    { id: 'STU-2023-042', name: 'Marcus Johnson', class: '10-B', attendance: 82, status: 'Need Attention', performance: 'Grade B', score: '76/100', statusColor: 'amber' },
    { id: 'STU-2023-118', name: 'Sophia Chen', class: '10-A', attendance: 100, status: 'Excellent', performance: 'Grade A', score: '88/100', statusColor: 'emerald' },
    { id: 'STU-2023-055', name: 'Lucas Garcia', class: '10-C', attendance: 68, status: 'At Risk', performance: 'Grade C', score: '58/100', statusColor: 'rose' },
    { id: 'STU-2023-069', name: 'Olivia Smith', class: '10-B', attendance: 94, status: 'Good', performance: 'Grade A-', score: '84/100', statusColor: 'emerald' }
  ];

  const filteredStudents = studentsData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'All' || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  return (
    <div className="space-y-6 animate-fade-in relative pb-12">
      
      {/* SECTION BANNER TITLE */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Students</h2>
      </div>

      {/* SEARCH & FILTER CONTROLS BAR */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-xs border border-slate-100">
        <div className="relative w-full sm:max-w-xs">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
          <input 
            type="text" 
            placeholder="Search by name or ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-hidden focus:border-indigo-500 font-medium text-slate-700"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <select 
            value={selectedClass} 
            onChange={(e) => setSelectedClass(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700 font-bold outline-hidden focus:border-indigo-500 transition-colors"
          >
            <option value="All">All Classes</option>
            <option value="10-A">Class 10-A</option>
            <option value="10-B">Class 10-B</option>
            <option value="10-C">Class 10-C</option>
          </select>
        </div>
      </div>

      {/* CORE ROSTER GRID / TABLE SHEET */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-4 px-6">Student</th>
                <th className="py-4 px-6">Class</th>
                <th className="py-4 px-6">Attendance %</th>
                <th className="py-4 px-6">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                  {/* Student Profile Info Data Node */}
                  <td className="py-4 px-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-base flex-shrink-0">👤</div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-bold text-[15px]">{student.name}</span>
                      <span className="text-xs text-slate-400 font-semibold">{student.id}</span>
                    </div>
                  </td>
                  {/* Assigned Class Node */}
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-indigo-50 text-indigo-600">{student.class}</span>
                  </td>
                  {/* Attendance Log Row Details */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${student.statusColor === 'rose' ? 'text-rose-500' : student.statusColor === 'amber' ? 'text-amber-500' : 'text-emerald-500'}`}>{student.attendance}%</span>
                      <span className="text-xs px-2 py-0.5 rounded-sm font-semibold bg-slate-100 text-slate-500">{student.status}</span>
                    </div>
                  </td>
                  {/* Visual Progress Grade Slider Row */}
                  <td className="py-4 px-6">
                    <div className="flex flex-col gap-1 max-w-[160px]">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                        <span>{student.performance}</span>
                        <span className="text-slate-400 font-medium">{student.score}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${student.statusColor === 'rose' ? 'bg-rose-500' : student.statusColor === 'amber' ? 'bg-amber-500' : 'bg-indigo-500'}`} style={{ width: `${student.score.split('/')[0]}%` }} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FLOATING ACTION TRIGGER TRIGGER ACTION BUTTON */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={() => setShowAIAssistant(true)}
          className="px-6 py-4 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
        >
          <span>⭐</span> AI Assistant
        </button>
      </div>

      {/* =========================================================
          BUILT-IN 3-TAB POPUP INTERACTIVE SCREEN MODAL 
         ========================================================= */}
      {showAIAssistant && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-[#F8FAFC] w-full max-w-md rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
            
            {/* Modal Brand Heading Header Row Sheet */}
            <div className="bg-[#4F46E5] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xl">🤖</span>
                <div>
                  <h4 className="font-bold text-sm">AI Teaching Assistant</h4>
                  <span className="text-[10px] text-indigo-200 block">Powered by classroom analytics</span>
                </div>
              </div>
              <button 
                onClick={() => setShowAIAssistant(false)}
                className="text-white hover:bg-white/10 w-7 h-7 rounded-full flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            {/* TAB INTERACTIVE SELECTION BAR ROW */}
            <div className="grid grid-cols-3 border-b border-slate-200 bg-white p-1 gap-1">
              {[
                { id: 'insights', label: 'Insights', icon: '📈' },
                { id: 'suggestions', label: 'Suggestions', icon: '💡' },
                { id: 'alerts', label: 'Alerts', icon: '🛡️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAITab(tab.id)}
                  className={`py-2 text-center rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    activeAITab === tab.id 
                      ? 'bg-[#EEF2F6] text-[#4F46E5]' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* MODAL MULTIPANEL CONTENT BODY BOX PANELS */}
            <div className="p-5 space-y-3 min-h-[220px]">
              
              {activeAITab === 'insights' && (
                <>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>👥</span>
                    <p>Class 10-A shows 12% improvement in algebra scores this month compared to last month.</p>
                  </div>
                  <div className="p-3.5 bg-amber-50 border border-amber-100 text-amber-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>🛡️</span>
                    <p>3 Students in class 10 C are scoring below 60%. Early Intervention recommended.</p>
                  </div>
                </>
              )}

              {activeAITab === 'suggestions' && (
                <>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>👥</span>
                    <p>Consider peer tutoring sessions for class 10c. High performers can mentor struggling students.</p>
                  </div>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>👥</span>
                    <p>Introduce visual aids for statistics lessons. Data shows 15% better comprehension with graph-based teaching.</p>
                  </div>
                </>
              )}

              {activeAITab === 'alerts' && (
                <>
                  <div className="p-3.5 bg-rose-50 border border-rose-100 text-rose-900 text-xs font-bold rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span className="text-rose-600 font-extrabold">HIGH</span>
                    <p className="font-medium text-rose-900">Isabela Davis attendance at 68% below required 75% threshold. Parental contact advised.</p>
                  </div>
                  <div className="p-3.5 bg-amber-50 border border-amber-100 text-amber-900 text-xs font-bold rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span className="text-amber-600 font-extrabold">MEDIUM</span>
                    <p className="font-medium text-amber-900">Assignment #5 has 8 pending submissions due tomorrow. Send reminder.</p>
                  </div>
                </>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
// ==========================================
// COMPONENT: TEACHER "MY CLASSES" VIEW
// ==========================================


 function TeacherClasses() {
  // Pop-up Toggle States
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [activeAITab, setActiveAITab] = useState('insights'); // 'insights', 'suggestions', 'alerts'

  // Exact Data Array representing your Figma Cards Layout
  const classesData = [
    { id: '10-A', name: 'Class 10-A', subject: 'Mathematics', students: 32, room: 'Room 201', schedule: 'Mon, Wed, Fri 9.00AM' },
    { id: '10-B', name: 'Class 10-B', subject: 'Mathematics', students: 30, room: 'Room 202', schedule: 'Tue, Thurs 10.30AM' },
    { id: '10-C', name: 'Class 10-C', subject: 'Advanced Algebra', students: 28, room: 'Room 105', schedule: 'Mon, Wed, 2.00pm' },
    { id: '10-D', name: 'Class 10-D', subject: 'Statistics', students: 26, room: 'Room 106', schedule: 'Tues, thurs, fri 11.00AM' }
  ];

  return (
    <div className="relative min-h-screen bg-[#F3F4F6] p-8 font-sans text-slate-800">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">My Classes</h2>
          <p className="text-sm text-slate-500 mt-1">Manage at your assigned classes and subjects</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="px-6 py-3 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm rounded-xl inline-flex items-center gap-2 shadow-xs transition-colors"
        >
          📖 New Class
        </button>
      </div>

      {/* CLASSES LAYOUT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classesData.map((cls) => (
          <div 
            key={cls.id} 
            className="bg-white border-l-4 border-[#4F46E5] rounded-xl shadow-xs p-6 flex flex-col justify-between space-y-6 transition-all hover:shadow-md"
          >
            {/* Card Content Row */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2F6] flex items-center justify-center text-[#4F46E5] text-xl">
                📖
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">{cls.name}</h3>
                <p className="text-sm font-semibold text-[#4F46E5]">{cls.subject}</p>
              </div>
            </div>

            {/* Room & Students Details metadata table wrapper */}
            <div className="grid grid-cols-2 gap-y-3 text-sm pt-2">
              <div className="text-slate-400 font-medium flex items-center gap-1.5">👥 Students</div>
              <div className="text-slate-800 font-bold text-right">{cls.students}</div>
              
              <div className="text-slate-400 font-medium flex items-center gap-1.5">🚪 Room</div>
              <div className="text-slate-800 font-bold text-right">{cls.room}</div>
            </div>

            {/* Schedule Info Capsule Badge */}
            <div className="bg-[#F8FAFC] text-slate-400 text-xs font-bold px-3 py-2 rounded-lg w-full">
              {cls.schedule}
            </div>

            {/* Action Option Buttons Container */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button className="py-2.5 bg-[#4F46E5] text-white text-xs font-bold rounded-lg hover:bg-[#4338CA] transition-colors flex items-center justify-center gap-1">
                👁️ View Students
              </button>
              <button className="py-2.5 bg-[#4F46E5] text-white text-xs font-bold rounded-lg hover:bg-[#4338CA] transition-colors flex items-center justify-center gap-1">
                📅 Attendance
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING SYSTEM AI ASSISTANT BUTTON TRIGGER */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={() => setShowAIAssistant(true)}
          className="px-6 py-4 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
        >
          <span>⭐</span> AI Assistant
        </button>
      </div>

      {/* =========================================================
          POP-UP MODAL 1: CREATE NEW CLASS DIALOG FORM 
         ========================================================= */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl p-6 space-y-6 border border-slate-100 animate-fade-in">
            <h3 className="text-xl font-bold text-slate-900">Create New Class</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Class Name</label>
                <input type="text" placeholder="Maths" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-hidden focus:border-indigo-500 bg-slate-50/50" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Grade / Section</label>
                <input type="text" placeholder="eg 10A" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-hidden focus:border-indigo-500 bg-slate-50/50" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Subject</label>
              <input type="text" placeholder="eg midterm maths" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-hidden focus:border-indigo-500 bg-slate-50/50" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Schedule</label>
              <input type="text" placeholder="dd-mm-yyyy" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-hidden focus:border-indigo-500 bg-slate-50/50" />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button 
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2.5 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2.5 bg-[#4F46E5] text-white font-bold text-xs rounded-xl hover:bg-[#4338CA] transition-colors"
              >
                Create Class
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          POP-UP MODAL 2: DIAGNOSTIC AI TEACHING ASSISTANT
         ========================================================= */}
      {showAIAssistant && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-[#F8FAFC] w-full max-w-md rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
            
            {/* Modal Heading Header Banner */}
            <div className="bg-[#4F46E5] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xl">🤖</span>
                <div>
                  <h4 className="font-bold text-sm">AI Teaching Assistant</h4>
                  <span className="text-[10px] text-indigo-200 block">Powered by classroom analytics</span>
                </div>
              </div>
              <button 
                onClick={() => setShowAIAssistant(false)}
                className="text-white hover:bg-white/10 w-7 h-7 rounded-full flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            {/* TAB INTERACTIVE CONTROLS HIGHLIGHTER ROW */}
            <div className="grid grid-cols-3 border-b border-slate-200 bg-white p-1 gap-1">
              {[
                { id: 'insights', label: 'Insights', icon: '📈' },
                { id: 'suggestions', label: 'Suggestions', icon: '💡' },
                { id: 'alerts', label: 'Alerts', icon: '🛡️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAITab(tab.id)}
                  className={`py-2 text-center rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    activeAITab === tab.id 
                      ? 'bg-[#EEF2F6] text-[#4F46E5]' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* LIVE DATA CONTAINER TEXT SHEETS PANELS */}
            <div className="p-5 space-y-3 min-h-[220px]">
              
              {activeAITab === 'insights' && (
                <>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>👥</span>
                    <p>Class 10-A shows 12% improvement in algebra scores this month compared to last month.</p>
                  </div>
                  <div className="p-3.5 bg-amber-50 border border-amber-100 text-amber-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>🛡️</span>
                    <p>3 Students in class 10 C are scoring below 60%. Early Intervention recommended.</p>
                  </div>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>👥</span>
                    <p>Assignment Submission rate increased to 94% across all classes.</p>
                  </div>
                </>
              )}

              {activeAITab === 'suggestions' && (
                <>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>👥</span>
                    <p>Consider peer tutoring sessions for class 10c high performance can mentor struggling students,</p>
                  </div>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>👥</span>
                    <p>Introduce visual aids for statistics lessons. Data shows 15% better comprehension with graph based teaching.</p>
                  </div>
                  <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-900 text-xs font-medium rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span>👥</span>
                    <p>Weekly quick quizzes 5-10min could improve retention by reinforcing key concepts.</p>
                  </div>
                </>
              )}

              {activeAITab === 'alerts' && (
                <>
                  <div className="p-3.5 bg-rose-50 border border-rose-100 text-rose-900 text-xs font-bold rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span className="text-rose-600">HIGH</span>
                    <p className="font-medium text-rose-900">Isabela Davis attendance at 68% below required 75% threshold. Parental contact advised.</p>
                  </div>
                  <div className="p-3.5 bg-amber-50 border border-amber-100 text-amber-900 text-xs font-bold rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span className="text-amber-600">MEDIUM</span>
                    <p className="font-medium text-amber-900">Assignment #5 has 8 pending submissions due tomorrow. Send reminder.</p>
                  </div>
                  <div className="p-3.5 bg-blue-50 border border-blue-100 text-blue-900 text-xs font-bold rounded-xl leading-relaxed flex gap-2.5 items-start">
                    <span className="text-blue-600">Low</span>
                    <p className="font-medium text-blue-900">3 students in 10-D haven't logged in this week. Check engagement.</p>
                  </div>
                </>
              )}

            </div>

          </div>
        </div>
      )}

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
          {activeTab === 'classes' && <TeacherClasses />}
          {activeTab === 'students' && <TeacherStudents/>}
          {activeTab === 'attendance' && <TeacherAttendanceView/>}
          {activeTab === 'assignment' && <TeacherAssignmentsView/>}
          {activeTab === 'messages' && <TeacherMessagesView/>}
          {activeTab === 'settings' && <TeacherSettingsView/>}
        </main>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}