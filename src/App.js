import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './screens/Welcome';
import Search from './screens/Search';
import Seat from './screens/Seat';
function App() {
  return (
    <div className="App">
    <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/booking" component={Search} />
        <Route exact path="/seat" component={Seat} />
      </Router>
    </div>
  );
}

export default App;
