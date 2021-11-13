import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Error from "./components/Error/Error";
import About from "./components/About/About";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

export const courseContext = createContext();

function App() {
  const [courseitem, setCourseitem] = useState();
  useEffect(() => {
    fetch(`../.././courses.JSON`)
      .then((res) => res.json())
      .then((data) => setCourseitem(data));
  }, []);
  // console.log(courseitem);
  return (
    <div className="App">
      <courseContext.Provider value={courseitem}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/details/:courseId">
              <Details></Details>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </courseContext.Provider>
    </div>
  );
}

export default App;
