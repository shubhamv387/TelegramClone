import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/UI/Header';
import { BiLogoTelegram, BiMicrophone } from 'react-icons/bi';
import { FaRegSmile } from 'react-icons/fa';
import { ImAttachment } from 'react-icons/im';

const MessageList = () => {
  const [messageLists, setMessageLists] = useState([]);

  useEffect(() => {
    const getMessageLists = async () => {
      const result = await axios.get(
        'https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888'
      );

      setMessageLists(result.data.data);
    };

    getMessageLists();
  }, []);

  return (
    <>
      <Header />
      <div className='flex-1 w-full flex flex-col items-center justify-center mx-auto overflow-y-auto'>
        <div className='flex-1 w-full md:min-w-[580px] max-w-[728px] max-h-[calc(100vh-76px-56px)] px-4  overflow-y-auto'>
          {messageLists.map((message) => (
            <p
              key={message.id}
              className={`text-black ${
                message.sender_id === 1 ? 'chat-right' : 'chat-left'
              } `}
            >
              {message.message}
            </p>
          ))}
        </div>

        <div className='w-full md:min-w-[580px] max-w-[728px] h-[76px] px-4'>
          <hr className='mb-2' />
          <div className='mb-[20px] flex w-full items-center justify-between'>
            <div className='flex flex-1 max-w-[calc(100%-4rem)] bg-background w-full h-[3.5rem] rounded-xl rounded-br-none'>
              <button className='flex items-center justify-center p-2 h-[3.5rem] w-[3.5rem] bg-background rounded-full transition-all duration-300'>
                <FaRegSmile className='text-text-secondary ' size={22} />
              </button>

              <input
                type='text'
                placeholder='Message'
                name=''
                id=''
                className='w-full bg-transparent flex border-0 outline-none'
              />
              <button className='flex items-center justify-center p-2 h-[3.5rem] w-[3.5rem] bg-background rounded-full transition-all duration-300'>
                <ImAttachment className='text-text-secondary ' size={20} />
              </button>
            </div>
            <button className='flex items-center justify-center p-2 ml-2 h-[3.5rem] w-[3.5rem] bg-background hover:bg-primary hover:text-white rounded-full transition-all duration-300 group'>
              {/* <BiLogoTelegram className='text-text-secondary' size={30} /> */}
              <BiMicrophone
                className='text-text-secondary group-hover:text-white transition-all duration-300'
                size={30}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageList;
