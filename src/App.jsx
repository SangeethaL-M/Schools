import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import TeacherLayout from './layouts/TeacherLayout';
import Login from './pages/Login'; // Points directly to your existing login view

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState('admin'); // 'admin' or 'teacher'

    // 1. Core Mock Data - Placed right here at line 8
    const [students, setStudents] = useState([
        { id: 'STU-24001', name: 'Alex Johnson', email: 'alex.j@example.com', class: 'Grade 5 - A', guardian: 'Michael Johnson', status: 'Active', joined: 'Oct 24, 2023' },
        { id: 'STU-24002', name: 'Sarah Williams', email: 'sarah.w@example.com', class: 'Grade 6 - B', guardian: 'Emma Williams', status: 'Inactive', joined: 'Oct 22, 2023' },
        { id: 'STU-24003', name: 'David Chen', email: 'david.c@example.com', class: 'Grade 4 - A', guardian: 'Robert Chen', status: 'Active', joined: 'Oct 18, 2023' },
        { id: 'STU-24004', name: 'Maya Patel', email: 'maya.p@example.com', class: 'Grade 7 - C', guardian: 'Sanjay Patel', status: 'Active', joined: 'Oct 15, 2023' },
        { id: 'STU-24005', name: 'Lucas Silva', email: 'lucas.s@example.com', class: 'Grade 5 - A', guardian: 'Maria Silva', status: 'Active', joined: 'Oct 10, 2023' },
        { id: 'STU-24006', name: 'Amina Okafor', email: 'amina.o@example.com', class: 'Grade 6 - A', guardian: 'Chinedu Okafor', status: 'Active', joined: 'Oct 08, 2023' },
        { id: 'STU-24007', name: 'Omar Hassan', email: 'omar.h@example.com', class: 'Grade 7 - B', guardian: 'Layla Hassan', status: 'Active', joined: 'Oct 05, 2023' },
        { id: 'STU-24008', name: 'Yuki Tanaka', email: 'yuki.t@example.com', class: 'Grade 7 - A', guardian: 'Ken Tanaka', status: 'Inactive', joined: 'Oct 03, 2023' },
        { id: 'STU-24009', name: 'Noah Fischer', email: 'noah.f@example.com', class: 'Grade 5 - B', guardian: 'Hannah Fischer', status: 'Active', joined: 'Oct 01, 2023' },
        { id: 'STU-24010', name: 'Isabella Cruz', email: 'isabella.c@example.com', class: 'Grade 8 - A', guardian: 'Daniel Cruz', status: 'Active', joined: 'Sep 28, 2023' },
        { id: 'STU-24011', name: 'Arjun Mehta', email: 'arjun.m@example.com', class: 'Grade 3 - A', guardian: 'Priya Mehta', status: 'Active', joined: 'Sep 25, 2023' },
        { id: 'STU-24012', name: 'Chloe Adams', email: 'chloe.a@example.com', class: 'Grade 6 - C', guardian: 'Rachel Adams', status: 'Inactive', joined: 'Sep 22, 2023' },
        { id: 'STU-24013', name: 'Kwame Mensah', email: 'kwame.m@example.com', class: 'Grade 5 - C', guardian: 'Abena Mensah', status: 'Active', joined: 'Sep 19, 2023' },
        { id: 'STU-24014', name: 'Leila Rahman', email: 'leila.r@example.com', class: 'Grade 7 - B', guardian: 'Nadia Rahman', status: 'Active', joined: 'Sep 15, 2023' }
    ]);

    // Calculate dynamic dashboard total (Base 1236 historical records + the actual length of your array)
    const totalStudentsDynamic = 1236 + students.length;

    // 1. If not authenticated, render your original login screen page
    if (!isAuthenticated) {
        return (
            <Login 
                onLogin={(selectedRole) => {
                    setRole(selectedRole);
                    setIsAuthenticated(true);
                }}
            />
        );
    }

  // 2. Once authenticated, switch the layout framework wrapper cleanly
  return (
    <Router>
      {role === 'teacher' ? (
        <TeacherLayout onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <AdminLayout onLogout={() => setIsAuthenticated(false)} />
      )}
    </Router>
  );
}
