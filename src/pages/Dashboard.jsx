import { useState, useEffect, useRef } from 'react';

export default function Dashboard() {
  // --- 1. Dynamic Interactive Component States ---
  const [metrics] = useState([
    { title: 'Total Students', value: '1,250', sub: 'Enrolled this year', change: '+3.5%', color: 'bg-purple-50 text-purple-700' },
    { title: 'Total Staff', value: '85', sub: 'Active employees', change: '+1.2%', color: 'bg-indigo-50 text-indigo-700' },
    { title: 'Total Classes', value: '48', sub: 'Across all grades', change: '+0.8%', color: 'bg-emerald-50 text-emerald-700' },
    { title: 'Total Revenue', value: '₹152k', sub: 'Collected this term', change: '+5.1%', color: 'bg-blue-50 text-blue-700' },
  ]);

  const [activities, setActivities] = useState([
    { id: 1, type: 'admission', text: 'Liam Smith admitted to Grade 5', author: 'Admin Elena', time: '3 minutes ago', icon: '🎓' },
    { id: 2, type: 'fee', text: 'Emily Brown paid fee for Term 1', author: 'Emily Brown', time: '12 minutes ago', icon: '₹' },
    { id: 3, type: 'admission', text: 'Emily Brown admitted to Grade 6', author: 'Admin Elena', time: '25 minutes ago', icon: '🎓' },
    { id: 4, type: 'fee', text: 'Emily Brown paid fee for Term 2', author: 'Emily Brown', time: '1 hour ago', icon: '₹' },
    { id: 5, type: 'attendance', text: 'Attendance marked for grade 5A', author: 'Sarah Connor', time: '2 hours ago', icon: '✅' },
    { id: 6, type: 'announcement', text: 'Annual sports day announcement Published', author: 'Principal Johnson', time: '3 hours ago', icon: '📢' },
  ]);

  const [alerts, setAlerts] = useState([
    { id: 1, type: 'blue', title: 'New Admission Request', desc: 'A New Admission request has been submitted for Grade 5', isRead: false },
    { id: 2, type: 'blue', title: 'Approval Request', desc: 'Sarah Connor submitted a leave request.', isRead: false },
    { id: 3, type: 'amber', title: 'Fee payment overdue', desc: '12 Students have overdue fee payments.', isRead: false },
    { id: 4, type: 'amber', title: 'Attendance Alert', desc: 'Attendance below 75% for 5 students this week.', isRead: false },
  ]);

  const [approvals, setApprovals] = useState([
    { id: 1, name: 'Sarah Connor', label: 'Leave', details: 'Medical leave request for 3 days' },
    { id: 2, name: 'James Porter', label: 'Attendance Edit', details: 'Request to correct attendance' },
    { id: 3, name: 'Robert Chen', label: 'Attendance Edit', details: 'Attendance correction' },
  ]);

  // --- 2. Chart References and Lifecycle hook ---
  const attendanceChartRef = useRef(null);
  const feeChartRef = useRef(null);

  useEffect(() => {
    // Generate Attendance Line Chart
    let attendanceCtx = document.getElementById('attendanceChartCanvas')?.getContext('2d');
    if (attendanceCtx && window.Chart) {
      if (attendanceChartRef.current) attendanceChartRef.current.destroy();
      attendanceChartRef.current = new window.Chart(attendanceCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Attendance Rate',
            data: [52, 70, 58, 80, 76, 68, 88],
            borderColor: '#3B44F6',
            backgroundColor: 'rgba(59, 68, 246, 0.05)',
            tension: 0.4,
            fill: true,
            borderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: '#3B44F6'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { min: 0, max: 100, ticks: { callback: value => value + '%' } },
            x: { grid: { display: false } }
          }
        }
      });
    }

    // Generate Fee Collection Bar Chart
    let feeCtx = document.getElementById('feeChartCanvas')?.getContext('2d');
    if (feeCtx && window.Chart) {
      if (feeChartRef.current) feeChartRef.current.destroy();
      feeChartRef.current = new window.Chart(feeCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Collected',
            data: [45, 75, 62, 48, 88, 55],
            backgroundColor: '#A5B4FC',
            hoverBackgroundColor: '#3B44F6',
            borderRadius: 8,
            barThickness: 28,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { min: 0, max: 100 },
            x: { grid: { display: false } }
          }
        }
      });
    }

    // Cleanup function when moving away from dashboard view
    return () => {
      if (attendanceChartRef.current) attendanceChartRef.current.destroy();
      if (feeChartRef.current) feeChartRef.current.destroy();
    };
  }, []);

  // --- 3. Interactive Business Function Handlers ---
  const handleAction = (id, applicantName, status) => {
    alert(`Success: ${applicantName}'s request has been ${status}!`);
    // Remove approved/rejected profile item row cleanly from state layout array
    setApprovals(approvals.filter(item => item.id !== id));
    
    // Log new event item directly back into recent system activity tracking stream
    const newLog = {
      id: Date.now(),
      type: status === 'Approved' ? 'admission' : 'attendance',
      text: `${applicantName}'s request was ${status.toLowerCase()}`,
      author: 'System Admin',
      time: 'Just now',
      icon: status === 'Approved' ? '✅' : '❌'
    };
    setActivities([newLog, ...activities]);
  };

  const handleDismissAlert = (id) => {
    setAlerts(alerts.filter(alertItem => alertItem.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Title Header Greeting Row */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>
          <p className="text-slate-500 text-sm">Welcome Back, Elena Here's What's happening today.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-xl shadow-sm hover:bg-slate-50">
            + Add Student
          </button>
          <button className="bg-[#3B44F6] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm hover:bg-blue-700">
            📣 New Announcement
          </button>
        </div>
      </div>

      {/* Metric Cards Row Block */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((card, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{card.title}</p>
                <h3 className="text-3xl font-extrabold text-slate-800 my-1.5">{card.value}</h3>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${card.color}`}>{card.change}</span>
            </div>
            <p className="text-xs text-slate-400 font-medium mt-1">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* --- Graphs Data Grid Layout Row --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Line Chart Card Wrapper */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <div>
            <h4 className="text-lg font-bold text-slate-900">Attendance overview</h4>
            <p className="text-slate-400 text-xs">Last 7 days across all classes</p>
          </div>
          <div className="h-64 w-full relative">
            <canvas id="attendanceChartCanvas"></canvas>
          </div>
        </div>

        {/* Fee Collection Bar Chart Card Wrapper */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <div>
            <h4 className="text-lg font-bold text-slate-900">Fee collection</h4>
            <p className="text-slate-400 text-xs">Monthly collection k</p>
          </div>
          <div className="h-64 w-full relative">
            <canvas id="feeChartCanvas"></canvas>
          </div>
        </div>
      </div>

      {/* --- Operational Status Action Layout Blocks Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Activity Live Stream View */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
          <div className="mb-4">
            <h4 className="font-bold text-slate-900 text-lg">Recent Activity</h4>
            <p className="text-xs text-slate-400">Live update from today</p>
          </div>
          <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
            {activities.map((item) => (
              <div key={item.id} className="flex gap-3 items-start">
                <span className="p-2 bg-slate-100 rounded-full text-sm shrink-0">{item.icon}</span>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-800 leading-snug">{item.text}</p>
                  <p className="text-xs text-slate-400">{item.author} . {item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Dismissible Alerts View */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
          <div className="mb-4 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Alert</h4>
              <p className="text-xs text-slate-400">{alerts.length} unread notifications</p>
            </div>
            {alerts.length > 0 && (
              <span className="text-xs font-bold bg-red-100 text-red-600 px-2.5 py-0.5 rounded-full">{alerts.length} New</span>
            )}
          </div>
          <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
            {alerts.length > 0 ? (
              alerts.map((alertItem) => (
                <div 
                  key={alertItem.id} 
                  onClick={() => handleDismissAlert(alertItem.id)}
                  className={`p-3.5 border rounded-2xl flex justify-between items-start cursor-pointer transition-all hover:opacity-80 group ${
                    alertItem.type === 'blue' ? 'bg-blue-50/60 border-blue-100 text-blue-900' : 'bg-amber-50/60 border-amber-100 text-amber-900'
                  }`}
                  title="Click to clear notice"
                >
                  <div className="space-y-0.5">
                    <h5 className="text-sm font-bold">{alertItem.title}</h5>
                    <p className="text-xs opacity-80 leading-relaxed">{alertItem.desc}</p>
                  </div>
                  <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 ml-1">✕</span>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-sm text-slate-400 font-medium">All system clear! No alerts.</div>
            )}
          </div>
        </div>

        {/* Dynamic Pending Approvals Segment Card View */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
          <div className="mb-4 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Pending Approvals</h4>
              <p className="text-xs text-slate-400">Require your action</p>
            </div>
            {approvals.length > 0 && (
              <span className="w-5 h-5 flex items-center justify-center bg-amber-100 text-amber-700 text-xs font-extrabold rounded-full">{approvals.length}</span>
            )}
          </div>
          <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
            {approvals.length > 0 ? (
              approvals.map((req) => (
                <div key={req.id} className="p-4 border border-slate-100 rounded-2xl bg-white shadow-sm space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">{req.name}</h5>
                      <p className="text-xs text-slate-400 mt-0.5">{req.details}</p>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-700">
                      {req.label}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => handleAction(req.id, req.name, 'Approved')}
                      className="w-full bg-[#10B981] hover:bg-emerald-600 text-white font-bold text-xs py-2 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-1"
                    >
                      ✓ Approve
                    </button>
                    <button 
                      onClick={() => handleAction(req.id, req.name, 'Rejected')}
                      className="w-full border border-red-200 text-red-500 hover:bg-red-50 font-semibold text-xs py-2 rounded-xl transition-colors flex items-center justify-center gap-1"
                    >
                      ✕ Reject
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-sm text-slate-400 font-medium">No pending system requests.</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}