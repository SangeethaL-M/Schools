import { useState } from 'react';

export default function Academic() {
  // Active inner sub-tab state tracker
  const [activeSubTab, setActiveSubTab] = useState('classes'); // 'classes' | 'subjects' | 'timetable' | 'exams'

  // --- Dynamic Core Management States ---
  const [classes, setClasses] = useState([
    { id: 1, name: 'Grade 5 - Section A', room: 'Room 101', students: 32, teacher: 'Sarah Connor', schedule: 'Mon - Fri 8:00-15:00', badge: 'Grade 5' },
    { id: 2, name: 'Grade 6 - Section B', room: 'Room 205', students: 28, teacher: 'Robert Chen', schedule: 'Mon - Fri 8:00-15:30', badge: 'Grade 6' },
    { id: 3, name: 'Grade 4 - Section A', room: 'Room 103', students: 30, teacher: 'Maria Santos', schedule: 'Mon - Fri 8:00-14:30', badge: 'Grade 4' },
    { id: 4, name: 'Grade 7 - Section C', room: 'Room 101', students: 32, teacher: 'James Porter', schedule: 'Mon - Fri 8:00-15:00', badge: 'Grade 7' },
    { id: 5, name: 'Grade 5 - Section B', room: 'Room 205', students: 28, teacher: 'Lisa Park', schedule: 'Mon - Fri 8:00-15:30', badge: 'Grade 5' },
    { id: 6, name: 'Grade 8 - Section A', room: 'Room 103', students: 30, teacher: 'Alice Johnson', schedule: 'Mon - Fri 8:00-14:30', badge: 'Grade 8' },
  ]);

  const [subjects, setSubjects] = useState([
    { code: 'MATH101', name: 'Mathematics', teacher: 'Sarah Connor', hrs: '5h', grade: 'Grade 5' },
    { code: 'SCI101', name: 'Science', teacher: 'Robert Chen', hrs: '5h', grade: 'Grade 3' },
    { code: 'ENG101', name: 'English', teacher: 'Maria Santos', hrs: '5h', grade: 'Grade 7' },
    { code: 'HIS101', name: 'History', teacher: 'James Porter', hrs: '5h', grade: 'Grade 4' },
    { code: 'ART101', name: 'Arts', teacher: 'Lisa Park', hrs: '5h', grade: 'Grade 8' },
    { code: 'PE101', name: 'Physical Education', teacher: 'David Kim', hrs: '5h', grade: 'Grade 6' },
  ]);

  const [exams, setExams] = useState([
    { id: 1, name: 'English Writing Assessment', date: 'April 16 2026', type: 'Grade 6 . English', ratio: '4/6 Passed', status: 'Completed', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 2, name: 'Unit Test Mathematics', date: 'April 18 2026', type: 'Grade 5 . Mathematics', ratio: '3/8 Passed', status: 'Completed', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 3, name: 'Mid Term Examination', date: 'April 20-25 2026', type: 'Grade 5-8 . All Subjects', ratio: '8/8 Passed', status: 'Scheduled', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { id: 4, name: 'Final Exam Term 1', date: 'Planning Stage', type: 'All Grades', ratio: '--', status: 'Planning', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  ]);

  // --- Search Filtering State Handles ---
  const [subjectSearch, setSubjectSearch] = useState('');

  // --- Modal State Management Handles ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add_class'); // 'add_class' | 'edit_class' | 'add_subject' | 'edit_subject' | 'add_exam' | 'edit_exam'
  const [activeItem, setActiveItem] = useState(null);

  // --- Business Logic Handlers ---
  
  // Delete Processing Triggers
  const handleDeleteClass = (id) => {
    if (confirm("Are you sure you want to delete this class section?")) {
      setClasses(classes.filter(c => c.id !== id));
    }
  };

  const handleDeleteSubject = (code) => {
    if (confirm(`Are you sure you want to delete subject code ${code}?`)) {
      setSubjects(subjects.filter(s => s.code !== code));
    }
  };

  const handleDeleteExam = (id) => {
    if (confirm("Are you sure you want to remove this examination entry?")) {
      setExams(exams.filter(e => e.id !== id));
    }
  };

  // Open Edit Modals Contextually
  const openEditModal = (mode, item) => {
    setModalMode(mode);
    setActiveItem({ ...item });
    setIsModalOpen(true);
  };

  // Open Add Modals Contextually
  const openAddModal = (mode) => {
    setModalMode(mode);
    if (mode === 'add_class') {
      setActiveItem({ name: '', room: '', students: 0, teacher: '', schedule: 'Mon - Fri 8:00-15:00', badge: 'Grade 5' });
    } else if (mode === 'add_subject') {
      setActiveItem({ code: '', name: '', teacher: '', hrs: '5h', grade: 'Grade 5' });
    } else if (mode === 'add_exam') {
      setActiveItem({ name: '', date: '', type: '', ratio: '--', status: 'Scheduled', color: 'bg-blue-50 text-blue-700 border-blue-200' });
    }
    setIsModalOpen(true);
  };

  // Handle Form Submission Save / Update
  const handleFormSave = (e) => {
    e.preventDefault();
    
    if (modalMode === 'add_class') {
      setClasses([...classes, { ...activeItem, id: Date.now() }]);
    } else if (modalMode === 'edit_class') {
      setClasses(classes.map(c => c.id === activeItem.id ? activeItem : c));
    } else if (modalMode === 'add_subject') {
      setSubjects([...subjects, activeItem]);
    } else if (modalMode === 'edit_subject') {
      setSubjects(subjects.map(s => s.code === activeItem.code ? activeItem : s));
    } else if (modalMode === 'add_exam') {
      setExams([...exams, { ...activeItem, id: Date.now() }]);
    } else if (modalMode === 'edit_exam') {
      setExams(exams.map(ex => ex.id === activeItem.id ? activeItem : ex));
    }

    setIsModalOpen(false);
    setActiveItem(null);
  };

  // Dynamic filter for subjects view
  const filteredSubjects = subjects.filter(sub => 
    sub.name.toLowerCase().includes(subjectSearch.toLowerCase()) || 
    sub.code.toLowerCase().includes(subjectSearch.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* 1. Page Header Block Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Academic Management</h2>
          <p className="text-slate-400 text-xs">Classes, subject, Timetable and exams</p>
        </div>
        
        {/* Contextual Action Button */}
        {activeSubTab === 'classes' && (
          <button onClick={() => openAddModal('add_class')} className="w-full sm:w-auto bg-[#3B44F6] text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 transition-colors">
            ➕ Add Class
          </button>
        )}
        {activeSubTab === 'subjects' && (
          <button onClick={() => openAddModal('add_subject')} className="w-full sm:w-auto bg-[#3B44F6] text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 transition-colors">
            ➕ Add Subject
          </button>
        )}
        {activeSubTab === 'exams' && (
          <button onClick={() => openAddModal('add_exam')} className="w-full sm:w-auto bg-[#3B44F6] text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 transition-colors">
            ➕ Add Exam
          </button>
        )}
      </div>

      {/* 2. Responsive Sub-Navigation Strip Container */}
      <div className="w-full overflow-x-auto no-scrollbar pb-1">
        <div className="flex gap-1.5 bg-slate-100 p-1.5 rounded-2xl w-max border border-slate-200">
          <button 
            onClick={() => setActiveSubTab('classes')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'classes' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            🎓 Classes & sections
          </button>
          <button 
            onClick={() => setActiveSubTab('subjects')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'subjects' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            📖 Subjects
          </button>
          <button 
            onClick={() => setActiveSubTab('timetable')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'timetable' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            ⏰ Timetable
          </button>
          <button 
            onClick={() => setActiveSubTab('exams')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'exams' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            🗓️ Exams & Results
          </button>
        </div>
      </div>

      {/* 3. Conditional Content Dynamic Rendering Viewports */}
      <div className="w-full">
        
        {/* VIEW A: CLASSES AND SECTIONS GRID LIST */}
        {activeSubTab === 'classes' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <div key={cls.id} className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{cls.name}</h3>
                    <p className="text-slate-400 text-xs mt-0.5">{cls.room}</p>
                    <p className="text-slate-500 text-xs font-semibold mt-2 flex items-center gap-1">👤 {cls.students} Students</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => openEditModal('edit_class', cls)} className="text-slate-400 hover:text-blue-600 text-base p-1 transition-colors">✏️</button>
                    <button onClick={() => handleDeleteClass(cls.id)} className="text-red-400 hover:text-red-600 text-base p-1 transition-colors">🗑️</button>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                  <div className="text-xs">
                    <p className="text-slate-400">Class Teacher</p>
                    <p className="font-bold text-slate-700">{cls.teacher}</p>
                    <p className="text-slate-400 font-medium text-[11px] mt-0.5">{cls.schedule}</p>
                  </div>
                  <span className="bg-purple-100 text-purple-700 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg">
                    {cls.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW B: SUBJECTS DATA DIRECTORY TABLE */}
        {activeSubTab === 'subjects' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50">
              <input 
                type="text" 
                placeholder="Search by name or code..." 
                value={subjectSearch}
                onChange={(e) => setSubjectSearch(e.target.value)}
                className="w-full sm:max-w-xs px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400" 
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <th className="p-4">Subject Name</th>
                    <th className="p-4">Code</th>
                    <th className="p-4">Teacher</th>
                    <th className="p-4">Hrs/Wk</th>
                    <th className="p-4">Grade</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                  {filteredSubjects.length > 0 ? (
                    filteredSubjects.map((sub) => (
                      <tr key={sub.code} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">{sub.name}</td>
                        <td className="p-4 font-mono text-xs text-slate-500">{sub.code}</td>
                        <td className="p-4 font-medium text-slate-600">
                          <span className="bg-slate-100 px-2.5 py-1 rounded-md">{sub.teacher}</span>
                        </td>
                        <td className="p-4">
                          <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-0.5 rounded-full">● {sub.hrs}</span>
                        </td>
                        <td className="p-4 text-slate-500 font-medium">{sub.grade}</td>
                        <td className="p-4 text-center">
                          <div className="flex justify-center gap-3">
                            <button onClick={() => openEditModal('edit_subject', sub)} className="text-slate-400 hover:text-blue-500 transition-colors">✏️</button>
                            <button onClick={() => handleDeleteSubject(sub.code)} className="text-slate-400 hover:text-red-500 transition-colors">🗑️</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="p-8 text-center text-slate-400 font-medium">No subjects found matching filters.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* VIEW C: TIMETABLE SCHEDULE GRID CONTAINER */}
        {activeSubTab === 'timetable' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-6 overflow-x-auto">
            <div className="min-w-[850px] space-y-4">
              <div className="grid grid-cols-6 gap-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100">
                <div>Time Slot</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
              </div>
              
              {/* Row 1 Grid Frame */}
              <div className="grid grid-cols-6 gap-3 items-center text-sm">
                <div className="text-center font-bold text-slate-400 text-xs bg-slate-50 py-2 rounded-xl">08:00 AM<br/>09:00 AM</div>
                <div className="bg-blue-50/70 border-l-4 border-blue-500 p-3 rounded-r-xl">
                  <p className="font-bold text-blue-900">Mathematics</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">👤 Mr. Anderson (Rm 101)</p>
                </div>
                <div className="bg-emerald-50/70 border-l-4 border-emerald-500 p-3 rounded-r-xl">
                  <p className="font-bold text-emerald-900">Physics</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">👤 Dr. Banner (Lab 3)</p>
                </div>
                <div className="bg-purple-50/70 border-l-4 border-purple-500 p-3 rounded-r-xl">
                  <p className="font-bold text-purple-900">English Lit.</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">👤 Mrs. Smith (Rm 205)</p>
                </div>
                <div className="bg-amber-50/70 border-l-4 border-amber-500 p-3 rounded-r-xl">
                  <p className="font-bold text-amber-900">World History</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">👤 Mr. Jones (Rm 110)</p>
                </div>
                <div className="bg-blue-50/70 border-l-4 border-blue-500 p-3 rounded-r-xl">
                  <p className="font-bold text-blue-900">Mathematics</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">👤 Mr. Anderson (Rm 101)</p>
                </div>
              </div>

              {/* Row 2 Grid Frame */}
              <div className="grid grid-cols-6 gap-3 items-center text-sm">
                <div className="text-center font-bold text-slate-400 text-xs bg-slate-50 py-2 rounded-xl">09:00 AM<br/>10:00 AM</div>
                <div className="bg-purple-50/70 border-l-4 border-purple-500 p-3 rounded-r-xl">
                  <p className="font-bold text-purple-900">English Lit.</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">👤 Mrs. Smith</p>
                </div>
                <div className="bg-red-50 border border-red-200 p-3 rounded-xl">
                  <p className="font-bold text-red-900">Physics</p>
                  <p className="text-[11px] text-red-400 font-semibold mt-0.5">⚠️ Teacher Overlap Alert</p>
                </div>
                <div className="bg-teal-50/70 border-l-4 border-teal-500 p-3 rounded-r-xl">
                  <p className="font-bold text-teal-900">Biology</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">👤 Dr. Stark</p>
                </div>
                <div className="bg-blue-50/70 border-l-4 border-blue-500 p-3 rounded-r-xl">
                  <p className="font-bold text-blue-900">Mathematics</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">👤 Mr. Anderson</p>
                </div>
                <div className="bg-orange-50/70 border-l-4 border-orange-500 p-3 rounded-r-xl">
                  <p className="font-bold text-orange-900">Geography</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">👤 Mr. James</p>
                </div>
              </div>

              {/* Mid-day Split Layout */}
              <div className="bg-slate-50 text-center py-2.5 text-xs font-bold text-slate-400 tracking-widest rounded-xl uppercase">
                🥪 Lunch Break Interval (10:00 AM - 10:30 AM)
              </div>
            </div>
          </div>
        )}

        {/* VIEW D: EXAMS MATRIX ROW FEED */}
        {activeSubTab === 'exams' && (
          <div className="space-y-4">
            {exams.map((ex) => (
              <div key={ex.id} className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:bg-slate-50/50 transition-all">
                <div className="flex items-center gap-4">
                  <span className="p-3 bg-indigo-50 text-indigo-600 rounded-xl text-lg shrink-0">📝</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{ex.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{ex.date} &nbsp;•&nbsp; <span className="font-medium text-slate-500">{ex.type}</span></p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-slate-100">
                  <div className="text-left sm:text-right">
                    <span className={`text-xs font-bold px-3 py-1 border rounded-full ${ex.color}`}>
                      {ex.status}
                    </span>
                    <p className="text-[11px] text-slate-400 font-bold mt-1.5 uppercase tracking-wider">{ex.ratio}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => openEditModal('edit_exam', ex)} className="text-slate-400 hover:text-slate-600 text-base p-1 transition-colors">✏️</button>
                    <button onClick={() => handleDeleteExam(ex.id)} className="text-slate-400 hover:text-red-500 text-base p-1 transition-colors">🗑️</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* --- UNIFIED OPERATION FORM MODAL SYSTEM --- */}
      {isModalOpen && activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-[460px] bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide text-center sm:text-left">
              {modalMode.replace('_', ' ')}
            </h3>
            
            <form onSubmit={handleFormSave} className="space-y-4">
              
              {/* Dynamic Input render for Classes */}
              {(modalMode === 'add_class' || modalMode === 'edit_class') && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Class Name & Section</label>
                    <input type="text" required value={activeItem.name} onChange={(e) => setActiveItem({...activeItem, name: e.target.value})} placeholder="e.g. Grade 5 - Section C" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Room Assignment</label>
                    <input type="text" required value={activeItem.room} onChange={(e) => setActiveItem({...activeItem, room: e.target.value})} placeholder="e.g. Room 302" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Class Teacher Full Name</label>
                    <input type="text" required value={activeItem.teacher} onChange={(e) => setActiveItem({...activeItem, teacher: e.target.value})} placeholder="Teacher Name" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Student Enrollment Strength</label>
                    <input type="number" required value={activeItem.students} onChange={(e) => setActiveItem({...activeItem, students: parseInt(e.target.value) || 0})} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                </>
              )}

              {/* Dynamic Input render for Subjects */}
              {(modalMode === 'add_subject' || modalMode === 'edit_subject') && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Subject Code Identification</label>
                    <input type="text" required disabled={modalMode === 'edit_subject'} value={activeItem.code} onChange={(e) => setActiveItem({...activeItem, code: e.target.value})} placeholder="e.g. CHEM201" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Subject Title</label>
                    <input type="text" required value={activeItem.name} onChange={(e) => setActiveItem({...activeItem, name: e.target.value})} placeholder="e.g. Organic Chemistry" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Assigned Instructor</label>
                    <input type="text" required value={activeItem.teacher} onChange={(e) => setActiveItem({...activeItem, teacher: e.target.value})} placeholder="Instructor Name" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                </>
              )}

              {/* Dynamic Input render for Exams */}
              {(modalMode === 'add_exam' || modalMode === 'edit_exam') && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Assessment Name</label>
                    <input type="text" required value={activeItem.name} onChange={(e) => setActiveItem({...activeItem, name: e.target.value})} placeholder="e.g. Physics Mid Term" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Date Specification</label>
                    <input type="text" required value={activeItem.date} onChange={(e) => setActiveItem({...activeItem, date: e.target.value})} placeholder="e.g. June 12 2026" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Target Class Category</label>
                    <input type="text" required value={activeItem.type} onChange={(e) => setActiveItem({...activeItem, type: e.target.value})} placeholder="e.g. Grade 5 . Science" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Current Status</label>
                    <select value={activeItem.status} onChange={(e) => {
                      const stat = e.target.value;
                      let clr = 'bg-blue-50 text-blue-700 border-blue-200';
                      if (stat === 'Completed') clr = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                      if (stat === 'Planning') clr = 'bg-amber-50 text-amber-700 border-amber-200';
                      setActiveItem({...activeItem, status: stat, color: clr});
                    }} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400">
                      <option value="Scheduled">Scheduled</option>
                      <option value="Completed">Completed</option>
                      <option value="Planning">Planning</option>
                    </select>
                  </div>
                </>
              )}

              {/* Form Action Controls Footer */}
              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button 
                  type="button" 
                  onClick={() => { setIsModalOpen(false); setActiveItem(null); }}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#3B44F6] text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors"
                >
                  Confirm Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}