import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeActions } from '../../store/slices/themeSlice';
import { FormControlLabel, Switch } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FiMoon } from 'react-icons/fi';

const useStyles = makeStyles({
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconTextContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  icon: {
    fontSize: '20px',
  },

  input: {
    left: 0,
    width: '100%',
  },
});

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const classes = useStyles();

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, []);

  return (
    <>
      <FormControlLabel
        className='px-6 py-2 w-full flex items-center justify-between gap-4 hover:bg-chat-hover'
        style={{ margin: 0 }}
        control={
          <Switch
            checked={theme === 'dark'}
            onChange={() => dispatch(ThemeActions.toggleTheme())}
          />
        }
        labelPlacement='start'
        label={
          <div className={classes.label}>
            <div className={classes.iconTextContainer}>
              <FiMoon className={classes.icon} />
              <span>Night Mode</span>
            </div>
          </div>
        }
      />
    </>
  );
};

export default ThemeToggler;
