import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import TeacherLayout from './layouts/TeacherLayout';
import Login from './pages/Login'; // Points directly to your existing login view

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('admin'); // 'admin' or 'teacher'

  // 1. If not authenticated, render your original login screen page
  if (!isAuthenticated) {
    return (
      <Login 
        onLogin={(selectedRole) => {
          setRole(selectedRole); // Sets 'admin' or 'teacher' dynamically
          setIsAuthenticated(true); // Logs them in
        }} 
      />
    );
  }

  // 2. Once authenticated, switch the layout framework wrapper cleanly
  return (
    <BrowserRouter basename="/Schools">
      <Routes>
   <Route 
          path="*" 
          element={
            role === 'teacher' ? (
              <TeacherLayout onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <AdminLayout onLogout={() => setIsAuthenticated(false)} />
            )
          } 
        />
    </Routes>
    </BrowserRouter>
  );
}
