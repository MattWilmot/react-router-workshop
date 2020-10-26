import {
    BrowserRouter as Router,
    Switch,
    Route   
  } from "react-router-dom";
import Navbar from "./Navbar";
import HTML from "./HTML";
import JS from "./JS";
import Home from "./Home";
import CSS from "./CSS"


function Routerfunc() {
    return(
<Router>
        <Navbar/>
        <Switch>
          <Route path="/HTML" component={HTML}/>
          <Route path="/CSS" component={CSS}/>
          <Route path="/JS" component={JS}/>
          <Route exact path="/" component={Home}/>

        </Switch>
      
    </Router>
    )
}

export default Routerfunc