import { configureStore } from '@reduxjs/toolkit';
import ThemeReducers from './slices/themeSlice';
import SidebarReducers from './slices/sidebarSlice';
import ChatListReducers from './slices/chatListSlice';

const store = configureStore({
  reducer: {
    theme: ThemeReducers,
    sidebar: SidebarReducers,
    chatList: ChatListReducers,
  },
});

export default store;
