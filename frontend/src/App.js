import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} exact></Route>
          <Route path="/chats" component={ChatPage}></Route>
        </Switch>
      </BrowserRouter>
      Hello
    </div>
  );
}

export default App;
