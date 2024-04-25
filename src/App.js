
import './App.css';
import { Link } from 'react-router-dom';
import FormsList from './pages/formsList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <h1>Hello World</h1>
        <FormsList/>
        <br />
        <Link to="/all-report">test for materials history</Link>
      </div>
      </header>
    </div>
  );
}

export default App;
