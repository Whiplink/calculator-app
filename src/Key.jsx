import './Key.css';
import { useScreen, useTheme } from './States.js';
import calculate from './Calculator.js';

const Key = ({ value, styling, font }) => {
  const { screen, addToScreen, deleteLast, clearScreen } = useScreen();
  const { theme } = useTheme();

  const style = styling ? styling : '';
  const fontStyle = font ? font : '';

  const Click = () => {
    if (value === 'DEL') {
      deleteLast();
    } else if (value === 'RESET') {
      clearScreen();
    } else if (value === '=') {
      const result = calculate(screen);
      clearScreen();
      addToScreen(result);
    } else {
      addToScreen(value);
    }
  };
  return (
    <>
      <div className={`key_container key${theme} ${style}`} onClick={Click}>
        <div className={`key keyfront ${fontStyle}`}>{value}</div>
      </div>
    </>
  );
};

export default Key;
