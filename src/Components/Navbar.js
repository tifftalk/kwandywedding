import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      /* https://www.w3schools.com/bootstrap/bootstrap_navbar.asp */
      <nav id="navigationBar" className="navbar navbar-inverse navbar-static-top" style={{ marginBottom: '0px' }}>

        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed themeButton" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          
          <div className="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navFont navbar-right" >
              <li><Link to='/'>The Big Day</Link></li>
              {/*<li><Link to='/party'>The BBQ</Link></li>
              <li><Link to='/schedule'>The BBQ </Link></li>
              <li><Link to='/directions'>FAQ</Link></li>
              <li><Link to='/registry'>Registry</Link></li>
              <li><Link to='/registry'>RSVP</Link></li>*/}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
