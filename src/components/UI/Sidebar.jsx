import { useDispatch, useSelector } from 'react-redux';
import { SidebarActions } from '../../store/slices/sidebarSlice';
import ThemeToggler from './ToggleTheme';
import ListItem from './ListItem';
import { GoPeople, GoGear } from 'react-icons/go';
import { LiaBullhornSolid } from 'react-icons/lia';
import { PiUserCircleLight } from 'react-icons/pi';
import { IoCallOutline } from 'react-icons/io5';
import { FiMoon } from 'react-icons/fi';
import { Avatar } from '@mui/material';

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const options = [
    { id: 1, text: 'New Group', icon: GoPeople },
    { id: 2, text: 'New Channel', icon: LiaBullhornSolid },
    { id: 3, text: 'Contact', icon: PiUserCircleLight },
    { id: 4, text: 'Call', icon: IoCallOutline },
    { id: 5, text: 'Saved Messages', icon: FiMoon },
    { id: 6, text: 'Setting', icon: GoGear },
  ];

  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={() => dispatch(SidebarActions.toggleSidebar())}
          className='fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.35)] z-[15] overflow-hidden transition-all '
        />
      )}

      <aside
        className={`w-[300px] flex flex-col items-start justify-between fixed top-0 bottom-0 z-20 bg-background transition-all ${
          isSidebarOpen ? 'left-[0]' : 'left-[-300px]'
        }`}
      >
        <div className='min-h-[9rem] border-b border-b-primary/25 w-full p-4 pl-6 pt-5'>
          <Avatar
            className='mb-4'
            sx={{ width: 56, height: 56 }}
            alt='Cindy Baker'
            src='https://mui.com/static/images/avatar/1.jpg'
          />
          <p className='text-text text-sm'>Shubham Vishwakarma</p>
          <span className='text-primary text-sm cursor-pointer'>
            Set Emoji Status
          </span>
        </div>

        <div className='flex-1 py-2 w-full'>
          {options.map((opt) => (
            <ListItem key={opt.id} icon={opt.icon} text={opt.text} />
          ))}
          <ThemeToggler />
        </div>

        <div className='p-4 pl-6'>
          <p className='text-sm text-text-meta'>Telegram Clone</p>
          <span className='text-sm text-primary hover:underline cursor-pointer'>
            Version 5.2.3
          </span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
