import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Display from './components/Display';
import Sidebar from './components/Sidebar';
import ReduxCount from './components/ReduxCount';
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App" id="sidebar">
        {/* <Main />
            <Sidebar /> */}
        <h1>Increment Decrement Button</h1>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
        <ReduxCount />
        <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
    </div>
  );
}

export default App;
