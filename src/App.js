import logo from './logo.svg';
import './App.css';
// import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Footer } from './components'
import { Home, About, Error, Contact } from './pages'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contactus" exact component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
