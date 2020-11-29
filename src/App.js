import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import ChatBar from "./components/ChatBar/ChatBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/FirebaseFiles/Login";
import { useStateValue } from "./components/FirebaseFiles/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {
        !user ? (
          <Login />
        ) :
          (<div className="app__body">
            <Router>
              <SideBar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <ChatBar />
                </Route>
                <Route path="/">
                  <ChatBar />
                </Route>
              </Switch>
            </Router>
          </div>)
      }
    </div>
  );
}

export default App;
