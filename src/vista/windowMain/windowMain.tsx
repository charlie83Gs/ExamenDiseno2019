import React, { Component } from 'react'; // let's also import Component
import {Container} from 'reactstrap';
import Navigator, {SCREEN_KEYS} from "../navigator";

type WindowMainProps= {
    navigator : Navigator
}

type WindowMainState = {

}

export default class WindowMain extends Component<WindowMainProps, WindowMainState> {
  constructor(props: WindowMainProps){
      super(props);

      this.goToApartment = this.goToApartment.bind(this);
  }

  goToApartment(){
    this.props.navigator.setScreen(SCREEN_KEYS.APARTMENT);
  }
  // render will know everything!
  render() {
    var myself = this;

    return (
        <Container>
            <h1>Pantalla principal</h1>
            <button onClick={myself.goToApartment}>Buy Apartment</button>
        </Container>
    )
  }

}

