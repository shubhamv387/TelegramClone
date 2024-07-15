import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isChatListOpen: false,
};

const chatListSLice = createSlice({
  name: 'chatList',
  initialState,
  reducers: {
    toggleChatList: (state) => {
      state.isChatListOpen = !state.isChatListOpen;
    },
  },
});

export const ChatListActions = chatListSLice.actions;
export default chatListSLice.reducer;
