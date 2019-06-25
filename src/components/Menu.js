import React, { Component } from 'react';
import '../partials/nav.scss';
import basket from '../images/basket.png';

class Menu extends Component {
  state = {
    data: false,
    newDisch: [],
    newDischPrice: [],
    basket: 0,
    orderMsg: false
  };
  api = "http://localhost:3000";

  componentDidMount() {
    fetch(`${this.api}/reciepts`)
      .then(resp => {
        if (resp.ok) return resp.json();
        throw new Error("Błąd sieci!");
      })
      .then(data => this.setState({data}))
      .catch(e => console.warn(e));
  };

  handleClick = (price, name) => {
    this.setState((prevState) => ({
      newDisch: [...this.state.newDisch, name],
      newDischPrice: [...this.state.newDischPrice, price],
      basket: prevState.basket + price
    }));
  }

  handleClickDelete  = (el, price) => {

    const newLi = [...this.state.newDisch]
    const removeEl = newLi.findIndex(item => {
      return item === el;
    });
    newLi.splice(removeEl,1);

    const newPrice = [...this.state.newDischPrice]
    const removePrice = newPrice.findIndex(item => {
      return item === price;
    });

    newPrice.splice(removePrice,1);

    this.setState((prevState) => ({
      newDischPrice: newPrice,
      newDisch: newLi,
      basket: prevState.basket - price
    }));
  }

  handleOrderClick = () => {
    this.setState({
      newDisch: [],
      newDischPrice: [],
      basket: 0,
      orderMsg: true
    })
  }

  handleNewOrder = () => {
    this.setState({
      orderMsg: false
    })
  }

  render() {
    const {data} = this.state;

    const msgStyle = {
      fontFamily: "'Oswald', sans-serif",
      fontWeight: "700",
      fontSize: "25px",
      color: "white",
    }

    if (!data)
      return <h1>Ładuje...</h1>;
    return (
      <div className="menu">
        <div className="menu_container">
          <h1>Menu</h1>
          <hr/>
          <h2>Zakąski:</h2>
          {
            data.appetizers.map(({id, name, ingredients, price}) => {
              return (
                <div onClick={this.state.orderMsg === false ? () => this.handleClick(price, name) : null} key={id}><span className="name">{name}</span>
                  <p>{ingredients} <span>{price}zł</span></p>
                </div>
              )
            })
          }
          <h2>Zupy:</h2>
          {
            data.soups.map(({id, name, ingredients, price}) => {
              return (
                <div onClick={this.state.orderMsg === false ? () => this.handleClick(price, name) : null} key={id}><span className="name">{name}</span>
                  <p>{ingredients} <span>{price}zł</span></p>
                </div>
              )
            })
          }
          <h2>Dania główne:</h2>
          {
            data.mainDish.map(({id, name, ingredients, price}) => {
              return (
                <div onClick={this.state.orderMsg === false ? () => this.handleClick(price, name) : null} key={id}><span className="name">{name}</span>
                  <p>{ingredients} <span>{price}zł</span></p>
                </div>
              )
            })
          }
          <h2>Desery:</h2>
          {
            data.deser.map(({id, name, ingredients, price}) => {
              return (
                <div onClick={this.state.orderMsg === false ? () => this.handleClick(price, name) : null} key={id}><span className="name">{name}</span>
                  <p>{ingredients} <span>{price}zł</span></p>
                </div>
              )
            })
          }
        </div>
        <div className="basket">
          <div className="basket_cost">
          <img src={basket} alt="basket"/>
          Suma: {this.state.basket}zł
          <div className="list_basket">
            <ol>
              {
                this.state.newDisch.map((el, index) => {
                  return (
                    <li key={index}>{el} - {this.state.newDischPrice[index]}zł<button onClick={() => this.handleClickDelete(el, this.state.newDischPrice[index])} className="deleteBtn">Usuń</button></li>
                  )
                })
              }
            </ol>
            {this.state.newDisch.length > 0 ? <button className="orderBtn" onClick={this.handleOrderClick}>Zamów</button> : null}
            {this.state.orderMsg === true ? <p style={msgStyle}>Dziękujemy za złozenie zamówienia.</p> : null}
            {this.state.orderMsg === true ? <button className="newOrderBtn" onClick={this.handleNewOrder}>Nowe zamówienie</button> : null}
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;