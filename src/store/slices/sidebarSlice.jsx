import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
};

const sidebarSLice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const SidebarActions = sidebarSLice.actions;
export default sidebarSLice.reducer;
