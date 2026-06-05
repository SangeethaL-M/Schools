import { useState } from 'react';

export default function Login({ onLogin }) {
  const [role, setRole] = useState('admin'); // Tracks active purple pill selection
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
     if (onLogin) {
    onLogin(role); // ◄ Pass the 'role' state variable here, NOT a hardcoded "admin"!
  } // Logs user into the master layout system shell
    } else {
      alert("Please fill out mock account details to test.");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200')` }}>
      <div className="w-[450px] rounded-3xl bg-[#FAF6EE] p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
        <p className="text-slate-500 mb-6">Sign into your careerwave account</p>

        {/* Role Segment Control Toggles */}
        <div className="grid grid-cols-2 gap-3 mb-6 p-1 border border-purple-200 rounded-full bg-white/50">
          <button 
            onClick={() => setRole('admin')}
            className={`py-3 rounded-full font-medium transition-all ${role === 'admin' ? 'bg-[#6366F1] text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}`}
          >
            Admin
          </button>
          <button 
            onClick={() => setRole('teacher')}
            className={`py-3 rounded-full font-medium transition-all ${role === 'teacher' ? 'bg-[#6366F1] text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}`}
          >
            Teacher
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">Email</label>
            <input 
              type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">Password</label>
            <input 
              type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <button type="submit" className="w-full bg-[#6366F1] text-white font-bold py-3.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg mt-4">
            Sign in as {role}
          </button>
        </form>
      </div>
    </div>
  );
}