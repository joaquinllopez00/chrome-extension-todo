import Navigation from './Navigation';

function Layout({ children }: { children: React.ReactNode }) {
  console.log('Layout');
  return (
    <div className='w-[400px] min-h-[300px] bg-white dark:bg-gray-800'>
      <Navigation />
      <main className='p-4'>{children}</main>
    </div>
  );
}

export default Layout;
