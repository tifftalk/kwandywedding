import React from 'react';
import '../index.css';

export default class Welcome extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      /* Main header*/
      <div className="tileback col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center whiteText jumbotron noMargin noRounded" 
        style={{paddingTop:'300px', paddingBottom:'300px', borderRadius:'0px'}}>
      
        {/*<h1>August 17th, 2018</h1>*/}
      	{/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      	<img className="flip-in-hor-top" src="./images/shield.svg" alt="shield" width="60%"/>
        <h1 className="blueText cookiesFont shadow">Conor &amp; Marco</h1>
        <h1 className="whiteText titleFont heartbeat shadow">May 19, 2018</h1>
      	</div>
          <div className="backGradient padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <hr/>
            <h3 className="titleFont bold">WELCOME!</h3>
            <p className="jello-horizontal"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span> We are so excited to celebrate our union with you! <br/>Please mark your calendar and get ready to partyyyyy!</p>
            <hr/>
          </div> */}
      </div>
      
    );
  }
}
