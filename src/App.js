import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

//pages
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <div className="test">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
