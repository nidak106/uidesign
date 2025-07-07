import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import useSidebarStore from './useStore';

import MainDashboard from './Components/MainDashboard';
import Template from './Components/Tempate';
import Resources from './Components/Resources';

export default function App() {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <Router>
      <div className="h-screen flex overflow-hidden bg-white">
        {/* Sidebar */}
        {isOpen && <Sidebar />}

        {/* Main Area */}
        <div className="flex-1 flex flex-col">
          {/* Header stays fixed at the top */}
          <Header />

          {/* Scrollable Main Content Area with custom scrollbar */}
          <div className="flex-1 overflow-y-auto custom-scroll">
            <Routes>
              <Route path="/" element={<MainDashboard />} />
              <Route path="/template" element={<Template />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
