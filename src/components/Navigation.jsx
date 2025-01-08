import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="bg-gray-100 dark:bg-gray-900 p-4 flex justify-between align-center">
      <span className="text-2xl font-bold text-white">easytodo</span>
      <ul className="flex space-x-4 items-center">
        <li>
          <Link 
            to="/" 
            className={`${
              location.pathname === '/' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-400'
            } hover:text-blue-500`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/settings" 
            className={`${
              location.pathname === '/settings' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-400'
            } hover:text-blue-500`}
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;