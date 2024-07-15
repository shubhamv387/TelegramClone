import { Avatar } from '@mui/material';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

const ChatListItem = (props) => {
  const params = useParams();

  const { chat } = props;
  const [avatarUrl, setAvatarUrl] = useState(
    'https://api.dicebear.com/9.x/personas/svg?seed=ei3ryv36h05e6wu6xwwmf5'
  );

  // console.log(params.id === chat.id.toString());
  const generateAvatarUrl = () => {
    const styles = [
      'adventurer',
      'adventurer-neutral',
      'avataaars',
      'avataaars-neutral',
      'big-ears',
      'big-ears-neutral',
      'big-smile',
      'bottts',
      'micah',
      'miniavs',
      'open-peeps',
      'personas',
      'pixel-art',
      'pixel-art-neutral',
    ];
    const style = styles[Math.floor(Math.random() * styles.length)];
    const seed =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15); // Generate a random seed
    const url = `https://api.dicebear.com/9.x/${style}/svg?seed=${seed}`;
    return url;
  };

  const setNewAvatar = () => {
    setAvatarUrl(generateAvatarUrl());
  };

  useEffect(() => {
    setNewAvatar();
  }, []);

  const textStr = 'To make the border color change';
  const classes =
    params.id === chat.id.toString() ? 'bg-primary' : 'hover:bg-chat-hover';

  return (
    <Link
      to={`/all-chats/${chat.id}`}
      className={`p-[0.6rem] rounded-[0.75rem] w-full flex items-center justify-center ${classes}`}
    >
      <Avatar
        className='mr-2.5'
        sx={{ width: 56, height: 56 }}
        alt='Cindy Baker'
        src={avatarUrl}
      />

      <div className='flex flex-1 flex-col'>
        <div className='flex items-center justify-between'>
          <h3
            className={`text-[16px] ${
              params.id === chat.id.toString() ? 'text-white' : 'text-text'
            }`}
          >
            {chat.creator.name ? chat.creator.name : 'Unknown User'}
          </h3>
          <span
            className={`text-[.75rem] ${
              params.id === chat.id.toString() ? 'text-white' : 'text-text-meta'
            }`}
          >
            09:14&nbsp;PM
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <div className=' max-w-[200px] overflow-hidden'>
            <p
              className={`${
                params.id === chat.id.toString()
                  ? 'text-white'
                  : 'text-text-meta'
              } me-1 text-nowrap flex-1`}
            >
              {textStr.substring(0, 25)}...
            </p>
          </div>
          {!params.id === chat.id.toString() && (
            <span className='px-2 text-white flex rounded-full bg-primary'>
              1
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

// ChatListItem.propTypes = {};

export default ChatListItem;
