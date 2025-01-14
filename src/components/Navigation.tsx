import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaGear, FaPlus } from 'react-icons/fa6';

function Navigation() {
  const location = useLocation();

  return (
    <nav className='bg-gray-100 dark:bg-gray-900 p-2 flex justify-between align-center'>
      <Link to='/' className='flex items-center space-x-2'>
        <span className='text-lg font-bold text-white'>contextly</span>
      </Link>
      <div className='flex items-center gap-3'>
        {location.pathname !== '/create' && (
          <Link
            to='/create'
            className={`text-white bg-gray-700 border border-1 border-gray-600 rounded-md p-1 pr-2 flex items-center gap-1 hover:bg-gray-600`}>
            <FaPlus size={15} /> Create
          </Link>
        )}

        <Link
          to='/settings'
          className={`${
            location.pathname === '/settings'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400'
          } hover:text-blue-500`}>
          <FaGear size={15} />
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
