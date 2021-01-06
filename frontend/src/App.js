import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Register />
      </header>
    </div>
  );
}

export default App;
