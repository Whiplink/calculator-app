import Key from './Key';
import './KeysContainer.css';
import { useTheme } from './States';

const KeysContainer = () => {
  const { theme } = useTheme();

  return (
    <div className={`keys_container keypad${theme}`}>
      <Key value="7" />
      <Key value="8" />
      <Key value="9" />
      <Key value="DEL" styling={`accentkey1-${theme}`} font="mediumtext" />
      <Key value="4" />
      <Key value="5" />
      <Key value="6" />
      <Key value="+" />
      <Key value="1" />
      <Key value="2" />
      <Key value="3" />
      <Key value="-" />
      <Key value="." />
      <Key value="0" />
      <Key value="/" />
      <Key value="x" />
      <Key
        value="RESET"
        styling={`accentkey1-${theme} resetBtnclass`}
        font="mediumtext"
      />
      <Key
        value="="
        styling={`accentkey2-${theme} equalBtnclass`}
        font="mediumtext"
      />
    </div>
  );
};

export default KeysContainer;
