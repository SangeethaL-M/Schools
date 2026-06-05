import { useState } from 'react';

export default function UserManagement() {
  // 1. Core Mock Data - Restored exactly from your Figma design files (14 records)
  const [students, setStudents] = useState([
    { id: 'STU-24001', name: 'Alex Johnson', email: 'alex.j@example.com', class: 'Grade 5 - A', guardian: 'Michael Johnson', status: 'Active', joined: 'Oct 24, 2023' },
    { id: 'STU-24002', name: 'Sarah Williams', email: 'sarah.w@example.com', class: 'Grade 6 - B', guardian: 'Emma Williams', status: 'Inactive', joined: 'Oct 22, 2023' },
    { id: 'STU-24003', name: 'David Chen', email: 'david.c@example.com', class: 'Grade 4 - A', guardian: 'Robert Chen', status: 'Active', joined: 'Oct 18, 2023' },
    { id: 'STU-24004', name: 'Maya Patel', email: 'maya.p@example.com', class: 'Grade 7 - C', guardian: 'Sanjay Patel', status: 'Active', joined: 'Oct 15, 2023' },
    { id: 'STU-24005', name: 'Lucas Silva', email: 'lucas.s@example.com', class: 'Grade 5 - A', guardian: 'Maria Silva', status: 'Active', joined: 'Oct 10, 2023' },
    { id: 'STU-24006', name: 'Amina Okafor', email: 'amina.o@example.com', class: 'Grade 6 - A', guardian: 'Chinedu Okafor', status: 'Active', joined: 'Oct 08, 2023' },
    { id: 'STU-24007', name: 'Omar Hassan', email: 'omar.h@example.com', class: 'Grade 4 - B', guardian: 'Layla Hassan', status: 'Active', joined: 'Oct 06, 2023' },
    { id: 'STU-24008', name: 'Yuki Tanaka', email: 'yuki.t@example.com', class: 'Grade 7 - A', guardian: 'Ken Tanaka', status: 'Inactive', joined: 'Oct 04, 2023' },
    { id: 'STU-24009', name: 'Noah Fischer', email: 'noah.f@example.com', class: 'Grade 5 - B', guardian: 'Hannah Fischer', status: 'Active', joined: 'Oct 02, 2023' },
    { id: 'STU-24010', name: 'Isabella Cruz', email: 'isabella.c@example.com', class: 'Grade 8 - A', guardian: 'Daniel Cruz', status: 'Active', joined: 'Sep 29, 2023' },
    { id: 'STU-24011', name: 'Arjun Mehta', email: 'arjun.m@example.com', class: 'Grade 3 - A', guardian: 'Priya Mehta', status: 'Active', joined: 'Sep 26, 2023' },
    { id: 'STU-24012', name: 'Chloe Adams', email: 'chloe.a@example.com', class: 'Grade 6 - C', guardian: 'Rachel Adams', status: 'Inactive', joined: 'Sep 24, 2023' },
    { id: 'STU-24013', name: 'Kwame Mensah', email: 'kwame.m@example.com', class: 'Grade 5 - C', guardian: 'Abena Mensah', status: 'Active', joined: 'Sep 22, 2023' },
    { id: 'STU-24014', name: 'Leila Rahman', email: 'leila.r@example.com', class: 'Grade 7 - B', guardian: 'Nadia Rahman', status: 'Active', joined: 'Sep 19, 2023' },
  ]);

  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('All');

  // Modal Dialog Editing States
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  // 2. Interactive Filter Logic
  const filteredStudents = students.filter((student) => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGrade = 
      selectedGrade === 'All' || 
      student.class.toLowerCase().includes(`grade ${selectedGrade.toLowerCase()}`);

    return matchesSearch && matchesGrade;
  });

  // 3. System Action Handlers
  const handleAddStudent = () => {
    const nextId = `STU-240${students.length + 1}`;
    const newStudent = {
      id: nextId,
      name: 'New Registered Student',
      email: 'new.stu@example.com',
      class: 'Grade 5 - A',
      guardian: 'Parent Guardian',
      status: 'Active',
      joined: 'Jun 02, 2026'
    };
    setStudents([newStudent, ...students]);
  };

  const handleDelete = (id) => {
    if (confirm(`Are you sure you want to remove ${id}?`)) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const startEdit = (student) => {
    setCurrentStudent({ ...student });
    setIsEditing(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setStudents(students.map(s => s.id === currentStudent.id ? currentStudent : s));
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
      
      {/* Upper Control Row Layout */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">User Management</h2>
          <p className="text-slate-400 text-xs">Manage Students, Staffs and parents across the school system</p>
        </div>
        <button 
          onClick={handleAddStudent}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-md transition-colors"
        >
          ➕ Add Student
        </button>
      </div>

      {/* Filter and Input Controls Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Search Profile</label>
          <input 
            type="text" 
            placeholder="Search by name or student record ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Filter Grade Class</label>
          <select 
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="w-full bg-white px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="All">All Grades</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="6">Grade 6</option>
            <option value="7">Grade 7</option>
            <option value="8">Grade 8</option>
          </select>
        </div>
      </div>

      {/* Data Table Canvas */}
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <th className="p-4">Student Details</th>
              <th className="p-4">Student ID</th>
              <th className="p-4">Grade/Class</th>
              <th className="p-4">Guardian</th>
              <th className="p-4">Status</th>
              <th className="p-4">Joined Date</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-slate-900">{student.name}</div>
                    <div className="text-xs text-slate-400">{student.email}</div>
                  </td>
                  <td className="p-4 font-mono font-medium text-slate-600">{student.id}</td>
                  <td className="p-4">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-md font-semibold">
                      {student.class}
                    </span>
                  </td>
                  <td className="p-4 font-medium">{student.guardian}</td>
                  <td className="p-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      student.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-400'
                    }`}>
                      ● {student.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500">{student.joined}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-4">
                      <button onClick={() => startEdit(student)} className="text-blue-500 hover:text-blue-700 text-lg">✏️</button>
                      <button onClick={() => handleDelete(student.id)} className="text-red-400 hover:text-red-600 text-lg">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-8 text-center text-slate-400 font-medium">
                  No records match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pop-up Modals Section */}
      {isEditing && currentStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-[450px] bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Update Student Profile</h3>
            <form onSubmit={handleSaveEdit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={currentStudent.name} 
                  onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Email</label>
                <input 
                  type="email" 
                  value={currentStudent.email} 
                  onChange={(e) => setCurrentStudent({ ...currentStudent, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Class/Section</label>
                <input 
                  type="text" 
                  value={currentStudent.class} 
                  onChange={(e) => setCurrentStudent({ ...currentStudent, class: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button 
                  type="button" 
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}