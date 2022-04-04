
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Usermanagement from "./components/Usermanagement";
import Schedulevisit from "./components/schedulevisit";
import React, { useEffect, useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (

    <p className="App, fill-window">
     
      <Router>
        <Switch>
          <Route path="/usr" exact component={Usermanagement} />
          <Route path="/sch" exact component={Schedulevisit} />
        </Switch>
      </Router>
      </p>
  );
}
      
        /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
export default App;
