import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
        <div className="">
          <Navbar />
        </div>
        <div className="main-content mb-auto">
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
