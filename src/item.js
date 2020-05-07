import React, { Component } from 'react'

export class Item extends Component {
render() {



return (
  
 
    <div className="App col-6 ">
      <div
        style={{ height:260, textAlign:"center" }}
        className="shadow styling "
      >
        <img className="mb-1 " src={this.props.Img} />
        <span className="my-1">{this.props.dish}</span>
        <span className="my-1">{this.props.price}</span>
      </div>
    </div>
  
);
}
}

export default Item
