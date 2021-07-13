import './App.css';
import CreateUser from './pages/User/CreateUser'
import   Login  from './pages/User/Login'
import ToDo from "./pages/ToDo";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <p></p>
    <Login></Login>
      <NavBar />
      <ToDo />
    </div>
  );
}

export default App;
