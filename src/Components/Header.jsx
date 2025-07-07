import { Menu, X } from 'lucide-react';
import useSidebarStore from '../useStore';

export default function Header() {
  const toggleSidebar = useSidebarStore((state) => state.toggle);
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-[#1668A9] text-2xl">
        {isOpen ? <X /> : <Menu />}
      </button>


      <button className="bg-[#3DCBFF] text-white px-4 py-2 rounded-lg hover:bg-[#0283AE]">
        Sign Up for full access
      </button>
    </header>
  );
}
