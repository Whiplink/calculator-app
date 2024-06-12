import './Screen.css';
import { useScreen, useTheme } from './States.js';

const Screen = () => {
  const { screen } = useScreen();
  const { theme } = useTheme();
  return (
    <div className={`screen screen${theme}`}>
      <div className={`t2-${theme}`}>{screen}</div>
    </div>
  );
};

export default Screen;
