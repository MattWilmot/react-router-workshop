import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/HTML">HTML</Link>
            </li>
            <li>
              <Link to="/CSS">CSS</Link>
            </li>
            <li>
              <Link to="/JS">JS</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/HTML" component={HTML}/>
          <Route path="/CSS" component={CSS}/>
          <Route path="/JS" component={JS}/>
          <Route path="/" component={Home}/>

        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>
    <h2>Home</h2>
    <p>Front-End Definition: Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.</p>
    </div>;
}

function HTML() {
  return <div>
    <h2>HTML</h2>
    <p>HTML Definition: Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.</p>
    </div>;
}

function CSS() {
  return <div>
    <h2>CSS</h2>
    <p>CSS Definition: Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
    </div>;
}

function JS() {
  return <div>
    <h2>JS</h2>
    <p>JS Definition: JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
    </div>;
}




export default App;
