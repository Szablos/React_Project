import React, { Component } from 'react';
import Slider from './Slider';

class Start extends Component {
  state = {  }
  render() {
    return (
      <div className="start">
        <Slider/>
        <div className="news">
          <span>Coś z naszego ogródka w niecodziennej formie :</span>
          <br/>
          <br/>
          <p> <strong><u>1: Marchewki Królika Bugsa</u></strong>
            <br/>
            <br/>
            Konfitowane młode marchewki, emulsja parmezanowa, czarnuszka, grzanka z palonym masłem.
            <br/>
            <br/>
            <strong><u>2: Zbastowana Cykoria</u></strong>
            <br/>
            <br/>
            Cykoria bastowana masłem, polędwiczka wieprzowa sous vide, kawior agrestowy, pure pietruszkowe.
            <br/>
            <br/>
            <strong><u>3: Ni z gruszki, ni z pietruszki</u></strong>
            <br/>
            <br/>
            Krem z gruszki i pietruszki.
          </p>
        </div>
      </div>
    );
  }
}

export default Start;