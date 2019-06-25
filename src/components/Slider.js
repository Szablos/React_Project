import React, { Component } from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

class Slider extends Component {
  state = {
    images: [img1, img2, img3],
    activeImg: 0
   }

   componentDidMount() {
    this.intervalId = setInterval(() => {
      if(this.state.activeImg === 2) {
        this.setState({
          activeImg: 0
        })
      } else {
        this.setState({
          activeImg: this.state.activeImg + 1
        })
      }
    }, 4000);
  }

  componentWillUnmount() {
      clearInterval(this.intervalId)
  }

  render() {
    return (
      <div className='carousel_container'>
          <button>Zobacz więcej</button>
          <img src={this.state.images[this.state.activeImg]} alt="obrazek" />
          <div className="text">To są potrawy sezonowe naszych kucharzy.</div>
      </div>
    );
  }
}

export default Slider;