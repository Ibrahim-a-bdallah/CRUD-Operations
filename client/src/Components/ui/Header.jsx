import { FaTh, FaBell, FaEnvelope, FaCog } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex flex-col md:flex-row justify-between items-center">

      <div className="flex items-center mb-4 md:mb-0">
        <FaTh className="text-2xl" />
        <h1 className="ml-3 text-xl font-semibold">Basic CRUD UI</h1>
      </div>

      <div className="flex flex-col items-center md:items-end space-y-2">
        <span className="text-sm md:text-base">David Gomez</span>
        <div className="flex space-x-4">
          <FaBell className="text-xl hover:text-gray-300 cursor-pointer" />
          <FaEnvelope className="text-xl hover:text-gray-300 cursor-pointer" />
          <FaCog className="text-xl hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
