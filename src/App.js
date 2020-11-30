import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./componentsBW/Navbar/Navbar";
import Home from "./componentsBW/pages/Home/Home";
import Projects from "./componentsBW/pages/Projects/Projects";
import Experience from "./componentsBW/pages/Experience/Experience";
import Photography from "./componentsBW/pages/Photography/Photography";
import Story from "./componentsBW/pages/Story/Story";
import Contact from "./componentsBW/pages/Contact/Contact";
import Footer from "./componentsBW/pages/Footer/Footer";
import Nappies from "./componentsBW/pages/Nappies/Nappies";

class App extends Component {
  render() {
    return (
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/projects' component={Projects} />
        <Route path='/experience' component={Experience} />
        <Route path='/photography' component={Photography} />
        <Route path='/story' component={Story} />
        <Route path='/contact' component={Contact} />
        <Route path='/nappies' component={Nappies} />
      </Switch>
      <Footer />
    </Router>
    );
  }
}

export default App;






// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./components/pages/HomePage/Home";
// import Work from "./components/pages/Work/Work";
// import About from "./components/pages/About/About";
// import Contact from "./components/pages/Contact/Contact";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/" exact component={Home}/>
//         <Route path='/work' component={Work} />
//         <Route path='/about' component={About} />
//         <Route path='/contact' component={Contact} />
//       </Switch>
//     </Router>
//   );
// }

