import React from 'react';
import '../index.css';

export default class Welcome extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="banner row">
        <img src="/images/main-tall.jpg" className="col-xl-7 col-lg-7 col-md-7 col-sm-6 col-xs-12" />
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6 col-xs-12 text-center back-brown">
          <h1>The Wedding of Kristin Kwasnik & Andy Tiffany</h1>
          <h3>Friday, August 17th, 2018</h3>
          <h4><a href="https://www.google.com/maps/place/1100+Old+Bethlehem+Rd,+Perkasie,+PA+18944/@40.4273354,-75.2577536,17z/data=!3m1!4b1!4m5!3m4!1s0x89c4195c720c634b:0xf2b218cb1e967492!8m2!3d40.4273313!4d-75.2555649" target="_new">The Lake House Inn</a></h4>
          <h4>Perkasie, PA</h4>
        </div>
      </div>
    );
  }
}
