import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./componentsBW/Navbar/Navbar";
import Home from "./componentsBW/pages/Home/Home";
import Projects from "./componentsBW/pages/Projects/Projects";
import Experience from "./componentsBW/pages/Experience/Experience";
import Nappies from "./componentsBW/pages/Nappies/Nappies";
import Footer from "./componentsBW/pages/Footer/Footer";
import NotFound from "./componentsBW/NotFound";

class App extends Component {
  render() {
    return (
      <div className="Pages">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path='/projects' component={Projects} />
            <Route path='/experience' component={Experience} />
            <Route path='/nappies' component={Nappies} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
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

