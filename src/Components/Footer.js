import React from 'react';

export default class Footer extends React.Component {

  // constructor(props) {
  //   super(props);
  // }c

  render() {
    return (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 back-brown whiteText text-center justify-content-center" style={{padding:'20px', color:'#111B29'}}>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <h4 className="titleFont">ADDRESS</h4>
          <hr/>
          <h5>The Lakehouse Inn</h5>
          <p>1100 Old Bethlehem Rd, Perkasie, PA</p>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <h4 className="titleFont">TAG US</h4>
          <hr/>
          <p>Use the hashtag:</p>
          <h5>#kwandylove</h5>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontSize:'10px'}}>
          <p>© Kwandy Designs 2018</p>
        </div>
      </div>
    );
  }
}
