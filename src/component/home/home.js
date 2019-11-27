import React, { Component } from 'react'
import {} from "react-router-dom";
import './home.css';

 

export class home extends Component {
 



 random_3 = () =>{
  var myrandom=Math.round(Math.random()*2)
  var link1="https://docs.google.com/forms/d/1g-0ueBu_aSXCJbcKgS5i1YgliGMCROiXMnwj_3nkTGA/prefill"
  var link2="https://docs.google.com/forms/d/1mORlbCO40nWANbSdYKG8UdTJBsszk13DxcFv1S9w1Eg/prefill"
  var link3="https://docs.google.com/forms/d/15LMb_jGna78HlhQEuMf3yLGiyE9loLR6ED3OS4wjfrw/prefill"
  if (myrandom===0)
      window.location=link1
  else if (myrandom===1)
      window.location=link2
  else if (myrandom===2)
      window.location=link3


};



  render() {
    return (
      <div>
       

{/* <div className="container"> */}
  <div className="row">
    <div className="col-sm">
     {/* <img src="robotics/src/assets/imges/Robo.jpeg" alt="Delhi Metro"/> */}
     
     <div className="body"> </div>
        </div>
        
    <div className="col-sm">
    <div className="button"> 

<input type="button"  value="start survey" onClick={this.random_3}/>

{/* <button className="button" style={{verticalalign:'middle'}}><span>Hover </span></button> */}
 {/* <button class="button button1"><Link to={this.random_3} class="home_button"> <b>Quick Start</b> </Link></button> */}
  </div>
    <div className="font">
  <b>Welcome to Robotics World!</b></div>
  <h3 style={{color:'Tomato'}}>
  <b>I declare that I am over 18 years of age. I agree with these conditions and I am willing to participate</b></h3>
    


    </div></div>
    
  

{/* <div className="container"> */}
  

  </div>
  
       
      
    )
  }
}

export default home
