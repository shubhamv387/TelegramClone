import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatList from '../ChatList/ChatList';
import chatBgPatternDark from '../../assets/chat-bg-pattern-dark.png';
import chatBgPatternLight from '../../assets/chat-bg-pattern-light.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ChatListActions, STATUS } from '../../store/slices/chatListSlice';

const Layout = () => {
  const { theme } = useSelector((state) => state.theme);
  const { chatListStatus } = useSelector((state) => state.chatList);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === '/all-chats')
      dispatch(ChatListActions.toggleChatListStatus(STATUS.SHOW));
    else if (window.innerWidth < 1024)
      dispatch(ChatListActions.toggleChatListStatus(STATUS.HIDE));
  }, [pathname]);

  return (
    <>
      <Sidebar />
      <div className='flex w-full relative'>
        {chatListStatus === STATUS.SHOW && (
          <div className='fixed top-0 left-0 w-screen sm:w-[346px] bg-background max-h-screen h-screen flex flex-col transition-all z-10 border-r border-text/15'>
            <ChatList />
          </div>
        )}

        <main
          className={`flex-1 flex flex-col bg-theme-bg min-h-screen fixed top-0 w-full ${
            chatListStatus === STATUS.SHOW
              ? 'lg:w-[calc(100%-346px)] ms-[346px]'
              : ''
          }`}
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
