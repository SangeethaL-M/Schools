import React, { useState } from 'react';

export default function Approvals() {
  const [activeTab, setActiveTab] = useState('pending');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRequest, setSelectedRequest] = useState(null);

  // --- SAMPLE STATE DATA MATCHING YOUR REQS ---
  const [requests, setRequests] = useState([
    {
      id: 'REQ-2026-001',
      studentName: 'Aria Chen',
      rollNo: 'LINC-2024-042',
      classGrade: 'Grade 10-A',
      type: 'Leave Application',
      date: '2026-06-02',
      details: 'Medical leave requested for 3 days due to viral fever. Supporting medical documentation uploaded.',
      status: 'Pending',
    },
    {
      id: 'REQ-2026-002',
      studentName: 'Ethan Brooks',
      rollNo: 'LINC-2023-118',
      classGrade: 'Grade 12-C',
      type: 'Document Verification',
      date: '2026-06-01',
      details: 'Requesting verification of official academic transcript duplicates for university submissions.',
      status: 'Pending',
    },
    {
      id: 'REQ-2026-003',
      studentName: 'Zoe Martinez',
      rollNo: 'LINC-2025-009',
      classGrade: 'Grade 9-B',
      type: 'Profile Modification',
      date: '2026-05-28',
      details: 'Correction update request for secondary guardian contact number and permanent residential address configuration fields.',
      status: 'Approved',
    },
    {
      id: 'REQ-2026-004',
      studentName: 'Liam Jackson',
      rollNo: 'LINC-2024-089',
      classGrade: 'Grade 11-A',
      type: 'Leave Application',
      date: '2026-05-25',
      details: 'Family emergency attendance exemption certificate requested for a 2-day period.',
      status: 'Rejected',
    },
  ]);

  // --- ACTIONS ---
  const handleUpdateStatus = (id, newStatus) => {
    setRequests(prev => prev.map(req => req.id === id ? { ...req, status: newStatus } : req));
    if (selectedRequest && selectedRequest.id === id) {
      setSelectedRequest(prev => ({ ...prev, status: newStatus }));
    }
  };

  // --- FILTERING LOGIC ---
  const filteredRequests = requests.filter(req => {
    const matchesTab = activeTab === 'pending' ? req.status === 'Pending' : req.status !== 'Pending';
    const matchesSearch = 
      req.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6 bg-slate-50 min-h-screen font-sans">
      
      {/* HEADER BAR */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Approvals & Requests</h2>
          <p className="text-xs sm:text-sm text-slate-500">Review, approve, or decline system change applications and student submission requests</p>
        </div>

        {/* SEARCH BOX */}
        <div className="relative w-full sm:w-72">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search student or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl bg-white focus:bg-white focus:border-indigo-500 outline-none text-sm transition-all"
          />
        </div>
      </div>

      {/* TWO TABS CONTAINER */}
      <div className="flex border border-slate-200 bg-white p-1 rounded-xl w-max max-w-full gap-1 shadow-xs">
        <button
          onClick={() => { setActiveTab('pending'); setSelectedRequest(null); }}
          className={`px-5 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 ${
            activeTab === 'pending' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          ⏱️ Pending Review
          <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'pending' ? 'bg-indigo-200 text-indigo-800' : 'bg-slate-100 text-slate-500'}`}>
            {requests.filter(r => r.status === 'Pending').length}
          </span>
        </button>
        <button
          onClick={() => { setActiveTab('history'); setSelectedRequest(null); }}
          className={`px-5 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 ${
            activeTab === 'history' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          📜 Action History
          <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'history' ? 'bg-indigo-200 text-indigo-800' : 'bg-slate-100 text-slate-500'}`}>
            {requests.filter(r => r.status !== 'Pending').length}
          </span>
        </button>
      </div>

      {/* RESPONSIVE LAYOUT WORKSPACE SPLIT CARD GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* REQUESTS LIST COLUMN (Takes up 2/3 on desktop) */}
        <div className="lg:col-span-2 space-y-4">
          {filteredRequests.length === 0 ? (
            <div className="p-12 text-center bg-white border border-slate-200 rounded-xl space-y-2">
              <span className="text-3xl block">📥</span>
              <p className="text-slate-500 font-bold text-sm">No items found matching criteria</p>
              <p className="text-xs text-slate-400">All student requests are current up to date</p>
            </div>
          ) : (
            filteredRequests.map((req) => (
              <div
                key={req.id}
                onClick={() => setSelectedRequest(req)}
                className={`p-5 bg-white border rounded-2xl cursor-pointer transition-all hover:shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  selectedRequest?.id === req.id ? 'border-indigo-500 ring-2 ring-indigo-50' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0 ${
                    req.type.includes('Leave') ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {req.type.includes('Leave') ? '📅' : '📄'}
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base">{req.studentName}</h4>
                      <span className="text-[11px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md">{req.id}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">{req.classGrade} • {req.rollNo}</p>
                    <p className="text-xs font-bold text-indigo-600 pt-1">{req.type}</p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                  <span className="text-xs text-slate-400 font-medium sm:block hidden">Applied: {req.date}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    req.status === 'Pending' ? 'bg-amber-50 text-amber-600 border border-amber-200' :
                    req.status === 'Approved' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' :
                    'bg-rose-50 text-rose-600 border border-rose-200'
                  }`}>
                    {req.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* DETAILS EXPANSION DRAWER BOX PANEL COLUMN (Takes up 1/3 on desktop) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-6 lg:sticky lg:top-6">
          {selectedRequest ? (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Application Review Drawer</span>
                <h3 className="text-base font-bold text-slate-800 mt-1">{selectedRequest.type}</h3>
              </div>

              {/* OVERVIEW CHIPS GRID */}
              <div className="grid grid-cols-2 gap-4 bg-slate-50/70 p-4 rounded-xl text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Applicant</span>
                  <span className="font-bold text-slate-800">{selectedRequest.studentName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Class Group</span>
                  <span className="font-bold text-slate-800">{selectedRequest.classGrade}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Record ID</span>
                  <span className="font-bold text-slate-700">{selectedRequest.id}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Submission Date</span>
                  <span className="font-bold text-slate-700">{selectedRequest.date}</span>
                </div>
              </div>

              {/* DETAILED MESSAGE BODY STATEMENT */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase block">Submission Overview / Remarks</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  "{selectedRequest.details}"
                </p>
              </div>

              {/* CONDITIONAL SYSTEM ACTIONS CONSOLE FOOTER */}
              {selectedRequest.status === 'Pending' ? (
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => handleUpdateStatus(selectedRequest.id, 'Rejected')}
                    className="flex-1 py-2.5 border border-slate-200 text-rose-600 hover:bg-rose-50 font-bold rounded-xl text-xs sm:text-sm transition-colors"
                  >
                    ✕ Decline
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedRequest.id, 'Approved')}
                    className="flex-1 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-indigo-100 transition-all"
                  >
                    ✓ Approve Request
                  </button>
                </div>
              ) : (
                <div className="pt-2 text-center p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <p className="text-xs font-bold text-slate-500">
                    Action logged as <span className="underline uppercase">{selectedRequest.status}</span>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <span className="text-3xl block">📋</span>
              <p className="text-sm font-bold">No Request Selected</p>
              <p className="text-xs max-w-[200px] mx-auto">Click any request item list on the left to show full remarks dashboard details</p>
            </div>
          )}
        </div>

      </div>

      {/* INTEGRATED CUSTOM STYLES */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
}