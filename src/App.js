
import './App.css';
import SideBar from './components/main_and_side_Bar/sideBar';
import MainNav from './components/main_and_side_Bar/mainNav';
function App() {
  return (
    <div >
      <header>
      <div>
        <MainNav/>
        <SideBar/>
      </div>
      </header>
    </div>
  );
}

export default App;
