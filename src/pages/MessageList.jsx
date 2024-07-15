import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/UI/Header';

const MessageList = () => {
  const [messageLists, setMessageLists] = useState([]);

  useEffect(() => {
    const getMessageLists = async () => {
      const result = await axios.get(
        'https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888'
      );

      setMessageLists(result.data.data);
    };

    // getMessageLists();
  }, []);

  // console.log(messageLists);

  return (
    <>
      <Header />
      <div className='flex-1 flex items-center justify-center mx-auto'>
        messages
      </div>
      <div>
        <div>All messages</div>
        <div className='w-[728px] h-[76px] border'>input box</div>
      </div>
    </>
  );
};

export default MessageList;
