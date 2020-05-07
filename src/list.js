import React, { Component } from 'react'

import Item from './item'
export class list extends Component {
    render() {
        const arr = [
          {
            dish: "cousocus",
            arrImg:
              "https://www.moroccoworldnews.com/wp-content/uploads/2012/04/Tunisian-Couscous-A-Family-Tradition.jpg ",
            price: "20000 Dt",
          },
          {
            dish: "Pizza",
            arrImg:
              "https://adressesdugout.files.wordpress.com/2016/06/pizza-couverture.jpg?w=1200 ",
            price: "15000 Dt",
          },
          {
            dish: "Mixed Grill",
            arrImg:
              "https://media-cdn.tripadvisor.com/media/photo-s/06/f1/74/e3/grillade-mixte.jpg  ",
            price: "30000 Dt",
          },
          {
            dish: "Sea Food",
            arrImg:
              "https://i.pinimg.com/736x/64/1e/7b/641e7b7cb3007cf9ca67c334a70096eb.jpg",
            price: "45000 Dt",
          },
        ];
        return (
            <div className="element" >
                {arr.map((element, index)=><Item key={index} Img={element.arrImg} dish={element.dish} price={element.price} />)}
            </div>
        )
    }
}

export default list
