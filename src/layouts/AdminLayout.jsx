import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import Layout Panels
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// Import Child View Modules
import Dashboard from '../pages/Dashboard';
import UserManagement from '../pages/UserManagement';
import Academic from '../pages/Academic';
import Attendance from '../pages/Attendance';
import Fees from '../pages/Fees';
import Communication from '../pages/Communication';
import Reports from '../pages/Reports';
import Documents from '../pages/Documents';
import Settings from '../pages/Settings';
import Approvals from '../pages/Approvals';

export default function AdminLayout({ onLogout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 text-slate-800 relative">
      
      {/* 1. MOVE TOGGLE BUTTON TO TOP-LEFT CORNER (Visible only on screens below 1024px) */}
      <button 
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-11 h-11 bg-[#3B44F6] text-white rounded-xl flex items-center justify-center shadow-lg text-xl hover:bg-blue-700 focus:outline-hidden transition-all transform active:scale-95"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* 2. CORE SIDEBAR INTERFACE NODE PANEL */}
      <Sidebar 
        onLogout={onLogout} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      {/* 3. CORE VIEW CANVAS ELEMENT WRAPPER FRAMEWORK */}
      <div className="flex flex-1 flex-col overflow-hidden lg:pl-64 w-full transition-all duration-300 ease-in-out">
        
        {/* Added a tiny bit of responsive left padding (max-sm:pl-14) so your top header elements don't get covered by the button on mobile */}
        <div className="max-sm:pl-14">
          <Header />
        </div>
        
        {/* Dynamic Nested Routes Content Window Element Screen Matrix Frame */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>

      {/* 4. BLUR TRANSPARENT MOBILE BACKDROP SHEET SHIELD OVERLAY SCREENMASK */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-20 transition-opacity duration-300"
        />
      )}

    </div>
  );
}