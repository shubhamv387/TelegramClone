import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatList from '../ChatList/ChatList';
import chatBgPatternDark from '../../assets/chat-bg-pattern-dark.png';
import chatBgPatternLight from '../../assets/chat-bg-pattern-light.png';
import { useSelector } from 'react-redux';

const Layout = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <Sidebar />
      <div className='flex w-full relative'>
        <div className='fixed top-0 left-0 w-screen sm:w-[346px] bg-background max-h-screen h-screen flex flex-col transition-all z-10 border-r border-text/15'>
          <ChatList />
        </div>
        <main
          className='flex-1 flex flex-col bg-theme-bg min-h-screen fixed top-0 w-full lg:w-[calc(100%-346px)] ms-[346px]'
          style={{
            backgroundImage: `url(${
              theme === 'dark' ? chatBgPatternDark : chatBgPatternLight
            })`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'top left',
          }}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
