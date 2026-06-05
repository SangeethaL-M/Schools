import React, { useState } from 'react';

export default function Documents() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // --- TAB 1: ALL DOCUMENTS DATA ---
  const [allDocuments] = useState([
    { id: 'DOC-001', title: 'Academic Curriculum Framework 2026', category: 'Academic', uploadedBy: 'Admin Team', date: '2026-05-12', type: 'PDF' },
    { id: 'DOC-002', title: 'Institutional Balance Sheet Ledger', category: 'Finance', uploadedBy: 'Finance Dept', date: '2026-04-29', type: 'XLSX' },
    { id: 'DOC-003', title: 'Campus Safety & Emergency Protocols', category: 'Administrative', uploadedBy: 'HR Registry', date: '2026-03-15', type: 'PDF' },
    { id: 'DOC-004', title: 'Staff Recruitment Policy Guidelines', category: 'HR Assets', uploadedBy: 'Admin Team', date: '2026-02-10', type: 'DOCX' },
  ]);

  // --- TAB 2: STUDENT RECORDS DATA ---
  const [studentRecords] = useState([
    { id: 'REC-201', studentName: 'Aria Chen', rollNo: 'LINC-2024-042', grade: 'Grade 10-A', docType: 'Final Term Report Card', date: '2026-05-22', status: 'Verified' },
    { id: 'REC-202', studentName: 'Ethan Brooks', rollNo: 'LINC-2023-118', grade: 'Grade 12-C', docType: 'Medical Fitness Certificate', date: '2026-05-19', status: 'Pending' },
    { id: 'REC-203', studentName: 'Zoe Martinez', rollNo: 'LINC-2025-009', grade: 'Grade 9-B', docType: 'Transfer Clearance Record', date: '2026-05-14', status: 'Verified' },
    { id: 'REC-204', studentName: 'Liam Jackson', rollNo: 'LINC-2024-089', grade: 'Grade 11-A', docType: 'Enrollment Aggregation Form', date: '2026-05-08', status: 'Pending' },
  ]);

  // --- TAB 3: CERTIFICATES DATA ---
  const [certificates] = useState([
    { id: 'CERT-901', title: 'Excellence in Mathematics Award', recipient: 'Liam Jackson', classGroup: 'Grade 11-A', date: '2026-05-24', category: 'Academic Achievement' },
    { id: 'CERT-902', title: 'Annual Sports Meet 100m Sprint Gold', recipient: 'Sophia Rodriguez', classGroup: 'Grade 10-B', date: '2026-05-22', category: 'Athletics Achievement' },
    { id: 'CERT-903', title: 'National Science Olympiad Runner-Up', recipient: 'Jackson Oliver', classGroup: 'Grade 12-A', date: '2026-05-15', category: 'Academic Honors' },
  ]);

  // --- DYNAMIC SEARCH CONTROLLERS ---
  const filteredDocs = allDocuments.filter(doc => doc.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredRecords = studentRecords.filter(rec => rec.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || rec.docType.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredCerts = certificates.filter(cert => cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || cert.recipient.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6 bg-slate-50 min-h-screen font-sans antialiased">
      
      {/* HEADER WITH INTEGRATED LIVE FILTER SEARCH */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl tracking-tight">Documents Workspace</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">Access and distribute files, specific student records, and award credentials</p>
        </div>

        <div className="relative w-full sm:w-72 shrink-0">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          <input
            type="text"
            placeholder="Search within this category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-4 py-2 border border-slate-200 rounded-xl text-xs font-medium outline-none focus:border-indigo-500 bg-white shadow-3xs transition-all"
          />
        </div>
      </div>

      {/* THREE EXPLICIT NAVIGATION TABS */}
      <div className="flex border border-slate-200 bg-white p-1 rounded-xl w-full sm:w-max max-w-full overflow-x-auto gap-1 shadow-2xs">
        <button
          onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
          className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-lg whitespace-nowrap transition-all ${
            activeTab === 'all' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50/60'
          }`}
        >
          📂 All Documents
        </button>
        <button
          onClick={() => { setActiveTab('records'); setSearchQuery(''); }}
          className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-lg whitespace-nowrap transition-all ${
            activeTab === 'records' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50/60'
          }`}
        >
          🎓 Student Records
        </button>
        <button
          onClick={() => { setActiveTab('certificates'); setSearchQuery(''); }}
          className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-lg whitespace-nowrap transition-all ${
            activeTab === 'certificates' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50/60'
          }`}
        >
          📜 Certificates
        </button>
      </div>

      {/* CARD DESKTOP BASE BOARD CONTAINER */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs p-5 sm:p-6">

        {/* ================= TAB 1 VIEW: ALL DOCUMENTS TABULAR DATA ================= */}
        {activeTab === 'all' && (
          <div className="space-y-4 animate-fade-in">
            {filteredDocs.length === 0 ? (
              <p className="text-center py-8 text-xs text-slate-400 font-bold">No documents matched your query parameters</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 bg-slate-50/50">
                      <th className="py-3 px-4">Document Title</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Uploaded By</th>
                      <th className="py-3 px-4">Registry Date</th>
                      <th className="py-3 px-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                    {filteredDocs.map((doc) => (
                      <tr key={doc.id} className="hover:bg-slate-50/60 transition-colors group">
                        <td className="py-3.5 px-4 flex items-center gap-3">
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 ${
                            doc.type === 'PDF' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                          }`}>{doc.type}</span>
                          <span className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{doc.title}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-bold rounded-md text-[10px]">{doc.category}</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 font-semibold">{doc.uploadedBy}</td>
                        <td className="py-3.5 px-4 text-slate-400">{doc.date}</td>
                        <td className="py-3.5 px-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">👁️</button>
                            <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">📥</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 2 VIEW: STUDENT RECORDS EXPLICIT ACTIONS LAYER ================= */}
        {activeTab === 'records' && (
          <div className="space-y-4 animate-fade-in">
            {filteredRecords.length === 0 ? (
              <p className="text-center py-8 text-xs text-slate-400 font-bold">No active student logs matching criteria found</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 bg-slate-50/50">
                      <th className="py-3 px-4">Student Particulars</th>
                      <th className="py-3 px-4">Class Grouping</th>
                      <th className="py-3 px-4">Record Category Type</th>
                      <th className="py-3 px-4">Log Update Date</th>
                      <th className="py-3 px-4">Verification</th>
                      <th className="py-3 px-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                    {filteredRecords.map((rec) => (
                      <tr key={rec.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3.5 px-4">
                          <p className="font-bold text-slate-800">{rec.studentName}</p>
                          <p className="text-[10px] text-slate-400 font-medium">{rec.id}</p>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 font-semibold">{rec.grade} <span className="text-slate-300 font-normal">({rec.rollNo})</span></td>
                        <td className="py-3.5 px-4 font-bold text-indigo-600">{rec.docType}</td>
                        <td className="py-3.5 px-4 text-slate-400">{rec.date}</td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                            rec.status === 'Verified' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-amber-50 text-amber-600 border border-amber-100'
                          }`}>
                            {rec.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline transition-colors">
                            Manage File
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3 VIEW: DYNAMIC GRID OF CREDENTIAL CERTIFICATES ================= */}
        {activeTab === 'certificates' && (
          <div>
            {filteredCerts.length === 0 ? (
              <p className="text-center py-8 text-xs text-slate-400 font-bold">No verified certificate badges matching query fields</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
                {filteredCerts.map((cert) => (
                  <div key={cert.id} className="p-5 border border-slate-200 rounded-2xl bg-white hover:border-indigo-400 hover:shadow-2xs transition-all flex flex-col justify-between gap-4 group">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg border border-amber-100">
                          📜
                        </span>
                        <span className="text-[10px] font-black text-slate-400 tracking-wider uppercase bg-slate-100 px-2 py-0.5 rounded-md">
                          {cert.id}
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-1">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-slate-400 font-medium">
                          Honoree: <span className="text-slate-700 font-bold">{cert.recipient}</span> <span className="text-slate-400">({cert.classGroup})</span>
                        </p>
                        <p className="text-[11px] font-bold text-indigo-500 pt-0.5">{cert.category}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                      <span>Issued: {cert.date}</span>
                      <button className="text-indigo-600 font-bold hover:text-indigo-800 hover:underline transition-all">
                        Print Certificate →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* CLEAN COMPONENT SPECIFIC LAYOUT TRANSITIONS LAYER */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(2px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
}