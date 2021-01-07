import "./App.css";
import Routes from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes />
        </header>
      </div>
    </Router>
  );
}

export default App;
