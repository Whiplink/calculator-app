import './App.css';
import Screen from './Screen';
import KeysContainer from './KeysContainer';
import Theme from './Theme';
import { useTheme } from './States';

function App() {
  const { theme } = useTheme();
  return (
    <div className={`bg bg${theme}`}>
      <div className="calculator_container">
        <div className="header">
          <h1 className={`text${theme}`}>calc</h1>
          <Theme />
        </div>
        <Screen />
        <KeysContainer />
      </div>
    </div>
  );
}

export default App;
