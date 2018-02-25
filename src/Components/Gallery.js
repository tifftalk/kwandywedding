import React from 'react';

export default class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state={
    	mypics:[
    	"./images/barrels-small.jpg",
    	"./images/karrett.jpg",
      "./images/barrels.jpg",
      "./images/barrels.jpg",
    	"./images/karrett.jpg",
    	],
    	pic1:0,
    	pic2:1,
			pic3:2,
			myInt: null
    }
    this.rotate = this.rotate.bind(this);
  }

  componentDidMount(){
  	//this.myInt= setInterval(this.rotate,3000);
	}
	
	componentWillUnmount(){
		//clearInterval(this.myInt);
	}

  rotate(){
  	let Len = this.state.mypics.length;

  	if(this.state.pic1+1 <Len){
  		this.setState({
  			pic1: this.state.pic1+1
  		})
  	}
  	else{
  		this.setState({
  			pic1:0
  		})
  	}
  	if(this.state.pic2+1 <Len){
  		this.setState({
  			pic2: this.state.pic2+1
  		})
  	}
  	else{
  		this.setState({
  			pic2:0
  		})
  	}
  	if(this.state.pic3+1 <Len){
  		this.setState({
  			pic3: this.state.pic3+1
  		})
  	}
  	else{
  		this.setState({
  			pic3:0
  		})
  	}
  }
  

  render() {
    return (
      <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center blueText titleFont">
        <hr/>
				<h2>GALLERY</h2>
				<hr/>
      </div>
      	<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
      		<img src={this.state.mypics[this.state.pic1]} alt="gallery" className="galleryItem partyPhoto"/>
      	</div>
      	<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
      		<img src={this.state.mypics[this.state.pic2]} alt="gallery" className="galleryItem partyPhoto"/>
      	</div>
      	<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
      		<img src={this.state.mypics[this.state.pic3]} alt="gallery" className="galleryItem partyPhoto"/>
      	</div>
      </div>
    );
  }
}
