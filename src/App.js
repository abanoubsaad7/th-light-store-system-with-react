
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <h1>Hello World</h1>
        <Link to="/forms">forms list</Link>
        <br />
        <Link to="/all-report">test for materials history</Link>
      </div>
      </header>
    </div>
  );
}

export default App;
