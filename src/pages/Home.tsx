import React from 'react';

function Home() {
  return (
    <div className='space-y-2'>
      <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
        Welcome to Your Extension
      </h1>
      <div className='bg-white dark:bg-gray-700 rounded-lg p-4 shadow'>
        <p className='text-gray-600 dark:text-gray-300'>
          This is your React-powered Chrome extension.
        </p>
      </div>
    </div>
  );
}

export default Home;
