import { Link } from 'react-router-dom';
import useSidebarStore from '../useStore';

export default function Sidebar() {
  return (
    <div className="bg-[#0283AE] text-white w-70 h-screen flex flex-col p-6 transition-all duration-300 items-center rounded-md">
      
      {/* Logo + Title */}
      <div className="mb-10 text-center">
        <img
          src="./logo.png"
          alt="Logo"
          className="w-30 h-30 object-contain mx-auto mb-2"
        />
        <h2 className="text-xl font-bold">Clouditecture</h2>
      </div>

      {/* 🌐 Navigation Links */}
      <nav className="mb-10 space-y-6 w-full text-left">
        <Link to="/" className="block text-lg font-semibold hover:text-[#3DCBFF] transition">Dashboard</Link>
        <Link to="/template" className="block text-lg font-semibold hover:text-[#3DCBFF] transition">Template</Link>
        <Link to="/resources" className="block text-lg font-semibold hover:text-[#3DCBFF] transition">Resources</Link>
      </nav>

      <div className="flex-grow" />

      <div className="w-full space-y-3">
        <button className="w-full bg-[#3DCBFF] text-white font-semibold py-2 rounded-md hover:bg-white hover:text-[#0283AE] transition duration-200">
          Sign Up
        </button>
        <button className="w-full border border-white py-2 rounded-md hover:bg-white hover:text-[#0283AE] transition duration-200">
          Sign In
        </button>
      </div>
    </div>
  );
}
