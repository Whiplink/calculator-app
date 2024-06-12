import { useTheme } from './States';
import './Theme.css';

const Theme = () => {
  const { theme, changeTheme } = useTheme();

  const change = (p) => {
    changeTheme(p);
  };
  return (
    <div className="theme_container">
      <h1 className={`text${theme}`}>THEME</h1>
      <div className="labelswitch_container">
        <div className={`label text${theme}`}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className={`switch switchbg${theme}`}>
          {[1, 2, 3].map((x) => {
            return (
              <div
                key={x}
                className={theme == x ? `ball ball${x}` : 'space'}
                onClick={() => change(x)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Theme;
