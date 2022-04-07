import React, { Component } from "react";
import Card from "./CardUI";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from '../img/setup.jpg'
import img2 from '../img/code.png'
import img3 from '../img/Man.jpg'
class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc ={img1} />
          </div>
          <div className="col-md-4">
            <Card imgsrc ={img2} />
          </div>
          <div className="col-md-4">
            <Card imgsrc ={img3} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
