import React, { useState } from 'react';

// --- DUMMY DATA FOR 14 STUDENTS ---
const initialStudents = [
  { id: 'STU-24001', name: 'Alex Johnson', rollNo: '101', grade: 'Grade 5 - A', status: 'Present', remarks: '' },
  { id: 'STU-24002', name: 'Sarah Williams', rollNo: '102', grade: 'Grade 5 - A', status: 'Absent', remarks: '' },
  { id: 'STU-24003', name: 'David Chen', rollNo: '103', grade: 'Grade 5 - A', status: 'Present', remarks: '' },
  { id: 'STU-24004', name: 'Maya Patel', rollNo: '104', grade: 'Grade 5 - A', status: 'Late', remarks: 'Late bus' },
  { id: 'STU-24005', name: 'Lucas Silva', rollNo: '105', grade: 'Grade 5 - A', status: 'Present', remarks: '' },
  { id: 'STU-24006', name: 'Amina Okafor', rollNo: '106', grade: 'Grade 5 - A', status: 'Present', remarks: '' },
  { id: 'STU-24007', name: 'Omar Hassan', rollNo: '107', grade: 'Grade 5 - A', status: 'Present', remarks: '' },
  { id: 'STU-24008', name: 'Yuki Tanaka', rollNo: '108', grade: 'Grade 5 - A', status: 'Absent', remarks: '' },
  { id: 'STU-24009', name: 'Noah Fischer', rollNo: '109', grade: 'Grade 5 - A', status: 'Present', remarks: '' },
  { id: 'STU-24010', name: 'Isabella Cruz', rollNo: '110', grade: 'Grade 5 - A', status: 'Present', remarks: '' },
  { id: 'STU-24011', name: 'Arjun Mehta', rollNo: '111', grade: 'Grade 5 - A', status: 'Late', remarks: '' },
  { id: 'STU-24012', name: 'Chloe Adams', rollNo: '112', grade: 'Grade 5 - A', status: 'Present', remarks: '' },
  { id: 'STU-24013', name: 'Kwame Mensah', rollNo: '113', grade: 'Grade 5 - A', status: 'Present', remarks: '' },
  { id: 'STU-24014', name: 'Leila Rahman', rollNo: '114', grade: 'Grade 5 - A', status: 'Present', remarks: '' }
];

// --- DUMMY DATA FOR STAFF ---
const initialStaff = [
  { id: 'EMP-1001', name: 'James Anderson', role: 'Senior Teacher', department: 'Mathematics', status: 'Present', remarks: '' },
  { id: 'EMP-1002', name: 'Priya Sharma', role: 'Head of Department', department: 'Science', status: 'Absent', remarks: '' },
  { id: 'EMP-1003', name: 'Robert Hughes', role: 'Teacher', department: 'English', status: 'Present', remarks: '' },
  { id: 'EMP-1004', name: 'Lisa Park', role: 'Teacher', department: 'Arts', status: 'Late', remarks: '' }
];

export default function Attendance() {
  // 1. View Toggles & Search State
  const [activeTab, setActiveTab] = useState('student'); // 'student' or 'staff'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('2026-06-03');

  // 2. Main Datasets State Management
  const [students, setStudents] = useState(initialStudents);
  const [staff, setStaff] = useState(initialStaff);

  // 3. Status Action Handler (Strict Mutual Exclusion Mode)
  const handleStatusChange = (id, targetType, newStatus) => {
    if (targetType === 'student') {
      setStudents(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
    } else {
      setStaff(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
    }
  };

  // 4. Input Remarks Handler
  const handleRemarksChange = (id, targetType, text) => {
    if (targetType === 'student') {
      setStudents(prev => prev.map(s => s.id === id ? { ...s, remarks: text } : s));
    } else {
      setStaff(prev => prev.map(s => s.id === id ? { ...s, remarks: text } : s));
    }
  };

  // 5. Calculate Realtime Summary Statistics
  const activeDataset = activeTab === 'student' ? students : staff;
  const totalCount = activeDataset.length;
  const presentCount = activeDataset.filter(item => item.status === 'Present').length;
  const absentCount = activeDataset.filter(item => item.status === 'Absent').length;
  const lateCount = activeDataset.filter(item => item.status === 'Late').length;

  // 6. Filter Logic (Roll Number, ID, or Name)
  const filteredData = activeDataset.filter(item => {
    const term = searchQuery.toLowerCase().trim();
    if (!term) return true;
    return (
      item.name.toLowerCase().includes(term) ||
      item.id.toLowerCase().includes(term) ||
      (item.rollNo && item.rollNo.includes(term))
    );
  });

  // 7. Mock Export to Excel Feature
  const handleExportExcel = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + (activeTab === 'student' ? "ID,Name,Roll No,Grade,Status,Remarks\n" : "ID,Name,Role,Department,Status,Remarks\n")
      + filteredData.map(e => activeTab === 'student' 
          ? `"${e.id}","${e.name}","${e.rollNo}","${e.grade}","${e.status}","${e.remarks}"`
          : `"${e.id}","${e.name}","${e.role}","${e.department}","${e.status}","${e.remarks}"`
        ).join("\n");
        
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${activeTab}_attendance_${selectedDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER ACTION ROWS */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Attendance Management</h2>
          <p className="text-xs sm:text-sm text-slate-500">Track and manage daily attendance sheets</p>
        </div>
        <button 
          onClick={handleExportExcel}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl shadow-xs hover:bg-slate-50 transition-colors self-start sm:self-auto"
        >
          📤 Export Excel
        </button>
      </div>

      {/* VIEW FILTER NAVIGATION TABS */}
      <div className="flex gap-2 p-1 bg-slate-100 rounded-xl w-fit">
        <button
          onClick={() => { setActiveTab('student'); setSearchQuery(''); }}
          className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${activeTab === 'student' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
        >
          🎓 Student Attendance
        </button>
        <button
          onClick={() => { setActiveTab('staff'); setSearchQuery(''); }}
          className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${activeTab === 'staff' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
        >
          👥 Staff Attendance
        </button>
      </div>

      {/* SUMMARY BADGE CARD COUNTERS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border-l-4 border-emerald-500 p-4 rounded-xl border border-slate-200 shadow-xs flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Present</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{presentCount} <span className="text-xs text-slate-400 font-normal">/ {totalCount}</span></p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">✓</div>
        </div>

        <div className="bg-white border-l-4 border-rose-500 p-4 rounded-xl border border-slate-200 shadow-xs flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Absent</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{absentCount} <span className="text-xs text-slate-400 font-normal">/ {totalCount}</span></p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg">✕</div>
        </div>

        <div className="bg-white border-l-4 border-amber-500 p-4 rounded-xl border border-slate-200 shadow-xs flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Late</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{lateCount} <span className="text-xs text-slate-400 font-normal">/ {totalCount}</span></p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg">🕒</div>
        </div>
      </div>

      {/* SEARCH AND SEARCH FILTER BAR */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex-1 relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 text-sm">🔍</span>
          <input 
            type="text" 
            placeholder={activeTab === 'student' ? "Search student by name, ID, or Roll No..." : "Search staff by name or ID..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 bg-slate-50/50"
          />
        </div>
        <div className="w-full sm:w-44">
          <input 
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 bg-slate-50/50 font-medium text-slate-700"
          />
        </div>
      </div>

      {/* FULL RESPONSIVE CONTENT HOUSING GRID */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        
        {/* DESKTOP VIEWPORT TABLE LAYOUT (Hidden on mobile phone views) */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="px-6 py-4">{activeTab === 'student' ? 'Student Details' : 'Staff Details'}</th>
                <th className="px-6 py-4">{activeTab === 'student' ? 'Roll No / ID' : 'Employee ID'}</th>
                <th className="px-6 py-4">{activeTab === 'student' ? 'Grade/Class' : 'Department & Role'}</th>
                <th className="px-6 py-4 text-center">Status (Select One)</th>
                <th className="px-6 py-4">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/40 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">{row.name}</td>
                  <td className="px-6 py-4 text-slate-500">
                    {activeTab === 'student' ? (
                      <div>
                        <span className="font-medium text-slate-800">#{row.rollNo}</span>
                        <div className="text-xs text-slate-400">{row.id}</div>
                      </div>
                    ) : row.id}
                  </td>
                  <td className="px-6 py-4">
                    {activeTab === 'student' ? (
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">{row.grade}</span>
                    ) : (
                      <div>
                        <div className="font-medium text-slate-800">{row.role}</div>
                        <div className="text-xs text-slate-400">{row.department}</div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1 bg-slate-100/80 p-1 rounded-xl w-fit mx-auto">
                      <button
                        onClick={() => handleStatusChange(row.id, activeTab, 'Present')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${row.status === 'Present' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200/60'}`}
                      >
                        ✓ Present
                      </button>
                      <button
                        onClick={() => handleStatusChange(row.id, activeTab, 'Absent')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${row.status === 'Absent' ? 'bg-rose-500 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200/60'}`}
                      >
                        ✕ Absent
                      </button>
                      <button
                        onClick={() => handleStatusChange(row.id, activeTab, 'Late')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${row.status === 'Late' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200/60'}`}
                      >
                        🕒 Late
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <input 
                      type="text" 
                      placeholder="Add remarks..." 
                      value={row.remarks}
                      onChange={(e) => handleRemarksChange(row.id, activeTab, e.target.value)}
                      className="border border-slate-200 px-3 py-1.5 rounded-lg text-xs w-full max-w-xs focus:outline-none focus:border-indigo-500"
                    />
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-8 font-medium text-slate-400">No layout match records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* MOBILE STACKED LIST CARD LAYOUT (Active on mobile viewports below 1024px) */}
        <div className="block lg:hidden divide-y divide-slate-100">
          {filteredData.map((row) => (
            <div key={row.id} className="p-4 space-y-3 hover:bg-slate-50/50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-900">{row.name}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {activeTab === 'student' ? `ID: ${row.id} • Roll: #${row.rollNo}` : `ID: ${row.id}`}
                  </p>
                </div>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                  {activeTab === 'student' ? row.grade : row.role}
                </span>
              </div>

              {/* Status Mutual Toggle Panel Container Row */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl text-center">
                <button
                  onClick={() => handleStatusChange(row.id, activeTab, 'Present')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${row.status === 'Present' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-600'}`}
                >
                  Present
                </button>
                <button
                  onClick={() => handleStatusChange(row.id, activeTab, 'Absent')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${row.status === 'Absent' ? 'bg-rose-500 text-white shadow-xs' : 'text-slate-600'}`}
                >
                  Absent
                </button>
                <button
                  onClick={() => handleStatusChange(row.id, activeTab, 'Late')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${row.status === 'Late' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600'}`}
                >
                  Late
                </button>
              </div>

              <div>
                <input 
                  type="text" 
                  placeholder="Add custom remarks note..." 
                  value={row.remarks}
                  onChange={(e) => handleRemarksChange(row.id, activeTab, e.target.value)}
                  className="w-full border border-slate-200 px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          ))}
          {filteredData.length === 0 && (
            <div className="text-center py-8 font-medium text-slate-400 text-sm">No layout match records found.</div>
          )}
        </div>

      </div>

      {/* SUBMIT SHEET BATCH DATA ACTION */}
      <div className="flex justify-end">
        <button 
          onClick={() => alert(`Attendance sheet saved successfully for ${filteredData.length} records!`)}
          className="w-full sm:w-auto px-6 py-3 bg-[#3B44F6] hover:bg-[#2b33db] text-white font-bold text-sm rounded-xl shadow-md transition-colors"
        >
          Save Attendance Batch
        </button>
      </div>

    </div>
  );
}