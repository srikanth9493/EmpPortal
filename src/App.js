import logo from "./logo.svg";
import "./App.css";
import Employee from "./Employee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Emp_Delete from "./Emp_Delete";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Route exact path="/" component={Employee}></Route>
        <Route exact path="/employee" component={Employee}></Route>
        {/* <Route path="/employee/:id" component={Emp_Delete}></Route> */}
        {/* <Employee></Employee> */}
      </Router>
    </div>
  );
}

export default App;
