import React, { useState } from 'react';

export default function Reports() {
  const [activeTab, setActiveTab] = useState('academic');

  // --- COMPREHENSIVE DATASETS FOR EXCEL EXPORTS ---
  const academicMetrics = [
    { label: 'Overall Average', value: '81.2%', sub: '2.3% increased vs last term' },
    { label: 'Pass Rate', value: '92.6%', sub: '1.8% increased vs last term' },
    { label: 'Top Score', value: 'Olivia W.', sub: 'Avg 96.4%' },
    { label: 'Risk Students', value: '14', sub: 'Below 60% avg' },
  ];

  const financialMetrics = [
    { label: 'Total Collected', value: '$525k', sub: '8.2% vs last year' },
    { label: 'Pending Dues', value: '$48k', sub: '24 students' },
    { label: 'Overdue Amounts', value: '$25k', sub: '12 Overdue' },
  ];

  const attendanceMetrics = [
    { label: 'Overall Attendance', value: '91.2%', sub: '1.5% vs last month' },
    { label: 'Present Rate', value: '75%', sub: 'Avg across all classes' },
    { label: 'Absent Rate', value: '12%', sub: '0.8% vs last month' },
    { label: 'Late Arrivals', value: '8%', sub: 'Flagged this term' },
  ];

  // --- LOCAL OFFLINE EXCEL/CSV EXPORT SYSTEM ---
  const handleExportExcel = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    if (activeTab === 'academic') {
      csvContent += "Metric Category,Value,Details\n";
      academicMetrics.forEach(m => csvContent += `"${m.label}","${m.value}","${m.sub}"\n`);
    } else if (activeTab === 'financial') {
      csvContent += "Financial Summary,Value,Details\n";
      financialMetrics.forEach(m => csvContent += `"${m.label}","${m.value}","${m.sub}"\n`);
    } else if (activeTab === 'attendance') {
      csvContent += "Attendance Metric,Rate,Context\n";
      attendanceMetrics.forEach(m => csvContent += `"${m.label}","${m.value}","${m.sub}"\n`);
    }
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${activeTab}_comprehensive_report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6 bg-slate-50 min-h-screen">
      
      {/* HEADER ROW */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Report & Analysis</h2>
          <p className="text-xs sm:text-sm text-slate-500">Comprehensive institution data metrics and offline analytical tools</p>
        </div>
        <button
          onClick={handleExportExcel}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl shadow-xs hover:bg-slate-50 active:bg-slate-100 transition-all self-start sm:self-auto"
        >
          📤 Export Excel
        </button>
      </div>

      {/* NAVIGATION SELECTION TABS */}
      <div className="flex border border-slate-200 bg-white p-1 rounded-xl w-full sm:w-max max-w-full overflow-x-auto gap-1 shadow-xs">
        <button
          onClick={() => setActiveTab('academic')}
          className={`px-4 py-2 text-sm font-bold rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'academic' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          📚 Academic Reports
        </button>
        <button
          onClick={() => setActiveTab('financial')}
          className={`px-4 py-2 text-sm font-bold rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'financial' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          💵 Financial Reports
        </button>
        <button
          onClick={() => setActiveTab('attendance')}
          className={`px-4 py-2 text-sm font-bold rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'attendance' ? 'bg-teal-50 text-teal-600' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          👥 Attendance Analysis
        </button>
      </div>

      {/* TOP METRIC SCOREBOARD CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {activeTab === 'academic' && academicMetrics.map((card, idx) => (
          <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
            <span className="text-sm font-semibold text-slate-400 block mb-1">{card.label}</span>
            <span className="text-2xl font-black text-slate-900 block tracking-tight">{card.value}</span>
            <span className="text-xs text-slate-400 mt-1 block">{card.sub}</span>
          </div>
        ))}
        {activeTab === 'financial' && financialMetrics.map((card, idx) => (
          <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500" />
            <span className="text-sm font-semibold text-slate-400 block mb-1">{card.label}</span>
            <span className="text-2xl font-black text-slate-900 block tracking-tight">{card.value}</span>
            <span className="text-xs text-slate-400 mt-1 block">{card.sub}</span>
          </div>
        ))}
        {activeTab === 'attendance' && attendanceMetrics.map((card, idx) => (
          <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500" />
            <span className="text-sm font-semibold text-slate-400 block mb-1">{card.label}</span>
            <span className="text-2xl font-black text-slate-900 block tracking-tight">{card.value}</span>
            <span className="text-xs text-slate-400 mt-1 block">{card.sub}</span>
          </div>
        ))}
      </div>

      {/* --- CONTENT WORKSPACE GRID SYSTEM --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* ==================== TAB 1: ACADEMIC DISPLAY ==================== */}
        {activeTab === 'academic' && (
          <>
            {/* Subject Wise Performance with functional Y-Axis */}
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs lg:col-span-7">
              <h3 className="text-base font-bold text-slate-800 mb-6">Subject Wise Average Performance</h3>
              <div className="flex h-56 items-stretch pt-4">
                
                {/* Fixed Left Y-Axis Scale Values Container */}
                <div className="flex flex-col justify-between text-right text-[11px] font-bold text-slate-400 pr-3 border-r border-slate-100 min-w-[35px]">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>
                
                {/* Bars Render Space Context Frame */}
                <div className="flex-1 flex justify-around items-end pl-4 relative min-h-[180px]">
                  {/* Horizontal Grid lines wrapper overlay background */}
                  <div className="absolute inset-0 pl-4 flex flex-col justify-between pointer-events-none opacity-40">
                    <div className="border-b border-dashed border-slate-200 w-full" />
                    <div className="border-b border-dashed border-slate-200 w-full" />
                    <div className="border-b border-dashed border-slate-200 w-full" />
                    <div className="border-b border-dashed border-slate-200 w-full" />
                    <div className="border-b border-slate-300 w-full" />
                  </div>

                  {[
                    { s: 'Maths', v: 76, color: 'bg-blue-500' },
                    { s: 'English', v: 72, color: 'bg-indigo-500' },
                    { s: 'History', v: 65, color: 'bg-amber-500' },
                    { s: 'Arts', v: 88, color: 'bg-emerald-500' },
                    { s: 'Science', v: 80, color: 'bg-rose-500' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-end h-full w-12 z-10 group relative">
                      <div 
                        className={`w-8 ${item.color} rounded-t-md transition-all duration-500 ease-out shadow-xs`}
                        style={{ height: `${item.v}%` }}
                      >
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
                          {item.v}%
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 mt-2 whitespace-nowrap">{item.s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pass/Fail horizontal graph bars stack */}
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs lg:col-span-5">
              <h3 className="text-base font-bold text-slate-800 mb-6">Pass/Fail Rate By Grade</h3>
              <div className="space-y-4">
                {['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8'].map((grade, idx) => {
                  const passVal = [93, 89, 86, 92][idx];
                  return (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold text-slate-600">
                        <span>{grade}</span>
                        <span><span className="text-blue-500">{passVal}% Pass</span> / {100 - passVal}% Fail</span>
                      </div>
                      <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: `${passVal}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* ==================== TAB 2: FINANCIAL DISPLAY ==================== */}
        {activeTab === 'financial' && (
          <>
            {/* Monthly Financial Chart incorporating functional Y-Axis scales */}
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs lg:col-span-7">
              <h3 className="text-base font-bold text-slate-800 mb-6">Monthly Collection Fees</h3>
              <div className="flex h-56 items-stretch pt-4">
                <div className="flex flex-col justify-between text-right text-[11px] font-bold text-slate-400 pr-3 border-r border-slate-100 min-w-[35px]">
                  <span>$10k</span>
                  <span>$7.5k</span>
                  <span>$5k</span>
                  <span>$2.5k</span>
                  <span>$0</span>
                </div>

                <div className="flex-1 flex justify-around items-end pl-3 relative min-h-[180px]">
                  <div className="absolute inset-0 pl-3 flex flex-col justify-between pointer-events-none opacity-40">
                    <div className="border-b border-dashed border-slate-200 w-full" />
                    <div className="border-b border-dashed border-slate-200 w-full" />
                    <div className="border-b border-dashed border-slate-200 w-full" />
                    <div className="border-b border-dashed border-slate-200 w-full" />
                    <div className="border-b border-slate-300 w-full" />
                  </div>

                  {[
                    { m: 'Jan', v: 45 }, { m: 'Feb', v: 75 }, { m: 'Mar', v: 60 },
                    { m: 'Apr', v: 50 }, { m: 'May', v: 92 }, { m: 'Jun', v: 55 }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-end h-full w-10 z-10 group relative">
                      <div 
                        className="w-6 bg-indigo-500 rounded-t-sm shadow-xs transition-all duration-300"
                        style={{ height: `${item.v}%` }}
                      />
                      <span className="text-[10px] font-bold text-slate-400 mt-2">{item.m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Exactly One Single Perfect Pie Chart View Block Component */}
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs lg:col-span-5 flex flex-col justify-between">
              <h3 className="text-base font-bold text-slate-800 mb-2">Fee Allocation Matrix</h3>
              <div className="flex flex-col items-center justify-center py-4">
                <div 
                  className="w-36 h-36 rounded-full shadow-md hover:scale-102 transition-transform duration-300"
                  style={{ background: 'conic-gradient(#6366f1 0% 55%, #14b8a6 55% 80%, #f59e0b 80% 100%)' }}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-500 border-t border-slate-100 pt-3">
                <div className="flex items-center justify-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500 block"/>Tuition (55%)</div>
                <div className="flex items-center justify-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-teal-500 block"/>Transport (25%)</div>
                <div className="flex items-center justify-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 block"/>Library (20%)</div>
              </div>
            </div>
          </>
        )}

        {/* ==================== TAB 3: ATTENDANCE ANALYSIS (ALL IMAGES MATCHED) ==================== */}
        {activeTab === 'attendance' && (
          <>
            {/* Left Box: Attendance Flow Line Chart */}
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Attendance Analysis Comparison</h3>
                <p className="text-xs text-slate-400">Student daily attendance timeline percentage trajectory</p>
              </div>

              <div className="h-44 w-full relative border border-slate-100 rounded-xl bg-slate-50/50 mt-6 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="25" x2="100" y2="25" stroke="#e2e8f0" strokeDasharray="3" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="#e2e8f0" strokeDasharray="3" strokeWidth="0.5" />
                  <line x1="0" y1="75" x2="100" y2="75" stroke="#e2e8f0" strokeDasharray="3" strokeWidth="0.5" />
                  <path d="M 0 65 Q 20 25, 40 45 T 80 15 T 100 30 L 100 100 L 0 100 Z" fill="rgba(20, 184, 166, 0.08)" />
                  <path d="M 0 65 Q 20 25, 40 45 T 80 15 T 100 30" fill="none" stroke="#14b8a6" strokeWidth="2.5" />
                </svg>
                <div className="absolute bottom-2 inset-x-0 flex justify-between px-4 text-[10px] font-bold text-slate-400">
                  <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
                </div>
              </div>
            </div>

            {/* Right Box: Monthly Performance Stacked Progress Targets */}
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Monthly Performance Target Layer</h3>
                <p className="text-xs text-slate-400">Aggregated breakdown indexes comparison</p>
              </div>

              <div className="space-y-4 mt-4">
                {[
                  { title: 'Total Student Count Enrolled', count: '1,240 pupils', color: 'bg-indigo-600', val: 85 },
                  { title: 'Active Staff Records', count: '86 members', color: 'bg-teal-500', val: 94 }
                ].map((row, rIdx) => (
                  <div key={rIdx} className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-700">{row.title}</span>
                      <span className="text-slate-400 font-semibold">{row.count}</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${row.color} rounded-full`} style={{ width: `${row.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row Info Banner: Metric Cards Layout */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-emerald-50/60 border border-emerald-100 p-4 rounded-xl flex items-center gap-3">
                <span className="text-xl">🛡️</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Average Attendance Rate</h4>
                  <p className="text-xl font-black text-slate-800">94.2%</p>
                </div>
              </div>
              <div className="bg-blue-50/60 border border-blue-100 p-4 rounded-xl flex items-center gap-3">
                <span className="text-xl">⚡</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Peak Interaction Days</h4>
                  <p className="text-xl font-black text-slate-800">Tuesdays & Wednesdays</p>
                </div>
              </div>
              <div className="bg-rose-50/60 border border-rose-100 p-4 rounded-xl flex items-center gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Chronic Absence Warnings</h4>
                  <p className="text-xl font-black text-slate-800">08 Students</p>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}