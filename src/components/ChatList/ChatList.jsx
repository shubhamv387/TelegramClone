import { useDispatch } from 'react-redux';
import { SidebarActions } from '../../store/slices/sidebarSlice';
import SearchBox from '../UI/SearchBox';
import { BiArrowBack, BiMenu } from 'react-icons/bi';
import { useCallback, useEffect, useState } from 'react';
import ChatListItem from './ChatListItem';
import axios from 'axios';

const ChatList = () => {
  const dispatch = useDispatch();
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [allChats, setAllChats] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleBtnClick = () => {
    dispatch(SidebarActions.toggleSidebar());
  };
  // console.log(allChats);

  useEffect(() => {
    const getAllChats = async () => {
      if (page > 10) return;
      try {
        setLoading(true);
        const result = await axios.get(
          `https://devapi.beyondchats.com/api/get_all_chats?page=${page}`
        );

        setAllChats([...allChats, ...result.data.data.data]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllChats();
  }, []);

  const handleScroll = useCallback(() => {
    if (page >= 1 && page <= 10 && !loading) {
      const chatList = document.getElementById('chat-list');
      if (
        window.innerHeight - 56 + chatList.scrollTop >=
        chatList.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    }
  }, [page]);

  // console.log(page);

  useEffect(() => {
    document.getElementById('chat-list') &&
      document
        .getElementById('chat-list')
        .addEventListener('scroll', handleScroll);

    return () =>
      document.getElementById('chat-list') &&
      document
        .getElementById('chat-list')
        .removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='flex gap-3 h-[3.5rem] items-center justify-center px-[.8125rem] pt-[.375rem] pb-[0.5rem]'>
        {!inputIsFocused ? (
          <button
            className='flex p-2 hover:bg-input-bg rounded-full transition-all duration-300'
            onClick={handleBtnClick}
          >
            <BiMenu className='text-text-meta' size={30} />
          </button>
        ) : (
          <button
            className='flex p-2 hover:bg-input-bg rounded-full transition-all duration-300'
            onClick={() => setInputIsFocused((prev) => !prev)}
          >
            <BiArrowBack className='text-text-meta' size={30} />
          </button>
        )}

        <SearchBox
          inputIsFocused={inputIsFocused}
          setInputIsFocused={setInputIsFocused}
        />
      </div>

      {!inputIsFocused && (
        <div
          id='chat-list'
          className='w-full flex flex-col items-start px-[.4375rem] pr-[calc(.4375rem-4px)] py-[.5rem] overflow-y-hidden hover:overflow-y-auto relative'
          style={{ scrollbarGutter: 'stable' }}
        >
          {allChats.map((chat, i) => (
            <ChatListItem key={i} chat={chat} />
          ))}
        </div>
      )}
    </>
  );
};

export default ChatList;
