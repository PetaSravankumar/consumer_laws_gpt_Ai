// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ChatBox from '../components/ChatBox';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // 🔐 Remove token
    navigate('/login');               // 🔁 Redirect to login page
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Pass logout function to Navbar */}
      <Navbar onLogout={handleLogout} />
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-semibold mb-4">Welcome to the Chatbot</h1>
        <ChatBox />
      </main>
    </div>
  );
};

export default Home;
