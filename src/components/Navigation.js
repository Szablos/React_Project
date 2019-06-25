import React from 'react';
import {HashRouter, Switch, Route, NavLink} from "react-router-dom";
import '../partials/nav.scss';
import Start from './Start';
import Menu from './Menu';

const About = () => {
  return(
    <div className="about">

    </div>
  )
}

const Gallery = () => {
  return(
    <div className="onas">

    </div>
  )
}

const Contact = () => {
  return(
    <div className="onas">

    </div>
  )
}

const Navigation = () => {

  const activeStyle = {
    fontWeight: "bold",
    color: "#29ce00",
    // borderBottom: "5px solid #29ce00"
  }

  const style = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.3rem"
  }

  return (
    <HashRouter>
      <>
        <nav>
          <div className="nav_container">
            <ul>
              <li><NavLink to="/" style={style} activeStyle={activeStyle}>Start</NavLink></li>
              <li><NavLink to="/onas" style={style} activeStyle={activeStyle}>O Nas</NavLink></li>
              <li><NavLink to="/menu" style={style} activeStyle={activeStyle}>Menu</NavLink></li>
              <li><NavLink to="/galeria" style={style} activeStyle={activeStyle}>Galeria</NavLink></li>
              <li><NavLink to="/kontakt" style={style} activeStyle={activeStyle}>Kontakt</NavLink></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Start}/>
          <Route path="/onas" component={About}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/galeria" component={Gallery}/>
          <Route path="/kontakt" component={Contact}/>
        </Switch>
      </>
    </HashRouter>
  )
}

export default Navigation;