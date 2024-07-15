import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line react-refresh/only-export-components
export const STATUS = Object.freeze({
  SHOW: 'show',
  HIDE: 'hide',
});

const initialState = {
  chatListStatus: STATUS.SHOW,
};

const chatListSLice = createSlice({
  name: 'chatList',
  initialState,
  reducers: {
    toggleChatListStatus: (state, action) => {
      // state.chatListStatus = !state.chatListStatus;
      switch (action.payload) {
        case STATUS.HIDE:
          state.chatListStatus = STATUS.HIDE;
          break;
        case STATUS.SHOW:
          state.chatListStatus = STATUS.SHOW;
          break;

        default:
          break;
      }
    },
  },
});

export const ChatListActions = chatListSLice.actions;
export default chatListSLice.reducer;
