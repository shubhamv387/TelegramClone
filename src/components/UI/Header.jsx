import {
  BiArrowBack,
  BiDotsVerticalRounded,
  BiSearch,
  BiX,
} from 'react-icons/bi';
import { IoCallOutline } from 'react-icons/io5';
import { ChatListActions } from '../../store/slices/chatListSlice';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { isChatListOpen } = useSelector((state) => state.chatList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className='h-[56px] bg-background custom-shadow flex gap-2 items-center justify-center py-1 px-4'>
      <div className='flex'>
        {isChatListOpen ? (
          <button
            className='flex p-2 hover:bg-input-bg rounded-full transition-all duration-300 lg:hidden lg:pointer-events-none'
            onClick={() => dispatch(ChatListActions.toggleChatList())}
          >
            <BiArrowBack className='text-text-meta' size={30} />
          </button>
        ) : (
          <button
            className='flex p-2 hover:bg-input-bg rounded-full transition-all duration-300 lg:hidden lg:pointer-events-none'
            onClick={() => navigate('/all-chats')}
          >
            <BiX className='text-text-meta' size={30} />
          </button>
        )}
      </div>

      <button className='flex-1 flex items-center justify-start w-fit'>
        <Avatar
          sx={{ width: 40, height: 40 }}
          alt='Cindy Baker'
          src='https://mui.com/static/images/avatar/1.jpg'
        />
        <div className='ms-3 flex flex-col items-start'>
          <p className='text-text text-[18px]'>Shubham Vishwakarma</p>
          <span className='text-text-secondary text-sm mt--1'>
            last seen recently
          </span>
        </div>
      </button>

      <div className='flex items-center justify-start gap-2'>
        <button className='flex p-2 hover:bg-input-bg rounded-full transition-all duration-300'>
          <BiSearch size={20} className='text-text-secondary' />
        </button>
        <button className='flex p-2 hover:bg-input-bg rounded-full transition-all duration-300'>
          <IoCallOutline size={20} className='text-text-secondary' />
        </button>
        <button className='flex p-2 hover:bg-input-bg rounded-full transition-all duration-300'>
          <BiDotsVerticalRounded size={20} className='text-text-secondary' />
        </button>
      </div>
    </header>
  );
};

export default Header;
