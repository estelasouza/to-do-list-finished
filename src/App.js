import "./App.css";
import ToDo from "./pages/ToDo";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ToDo />
    </div>
  );
}

export default App;
