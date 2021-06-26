
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
function App() {
  return ( 
  <Router>

    <div>
      <Header/>
      <Switch>
        <Route path="/"  component={Home} />
      </Switch>
      <Footer/>

    </div>
  </Router>
  );
}

export default App;
