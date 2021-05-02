import './App.css';
import Home from './component/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Shows</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/movies">
            <About />
          </Route>
          <Route path="/people">
            <Users />
          </Route>
          <Route path="/">
            <div className="App">
              <Home /></div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>Movies...</h2>;
}

function Users() {
  return <h2>People</h2>;
}

export default App;
