import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Display from './components/Display';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {
        // <Main />
        <Sidebar />
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      }
    </div>
  );
}

export default App;
