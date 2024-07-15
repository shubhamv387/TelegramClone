import { createSlice } from '@reduxjs/toolkit';

const initialState = { theme: localStorage.getItem('theme') || 'dark' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme
        ? state.theme === 'light'
          ? 'dark'
          : 'light'
        : 'light';

      document.querySelector('html').setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const ThemeActions = themeSlice.actions;

export default themeSlice.reducer;
