import React, { Component } from 'react'; // let's also import Component
import {Container, Row,Button} from 'reactstrap';
import Navigator, {SCREEN_KEYS} from "../navigator";
import Apartment from '../../model/building/apartment';
import ApartmentController from '../../model/building/ApartmentController';
import { ApartmentContainer } from './ApartmentContainer';
import Order from '../../model/order/order';
import OrderCointroller from '../../model/order/orderController';

type WindowOrderApartmentProps= {
    navigator : Navigator
}

type WindowOrderApartmentState = {
    apartments : Apartment[],
    selected : Apartment,
    apartmentController : ApartmentController
}

export default class WindowOrderApartment extends Component<WindowOrderApartmentProps, WindowOrderApartmentState> {
  constructor(props: WindowOrderApartmentProps){
      super(props);
      var controller = ApartmentController.getInstance()
      var allApartments = controller.getBuilding().getApartments();
      this.state = {apartmentController : controller, apartments : allApartments, selected : allApartments[0]};

      this.goToFinish = this.goToFinish.bind(this);
      this.onSelectApartment = this.onSelectApartment.bind(this);
  }
  // render will know everything!
  goToFinish(){
    //update order
    if(this.state.apartmentController.buyByApartment(this.state.selected)){
      OrderCointroller.getInstance().setApartment(this.state.selected);
      this.props.navigator.setScreen(SCREEN_KEYS.FINISH);
    }
  }

  onSelectApartment(apartment : Apartment){
    this.setState({selected : apartment})
  }

  // render will know everything!
  render() {
    var myself = this;

    return (
        <Container>
            <h1>Selecciona un apartamento (Paso 1/4)</h1>
            <div  style={{height:"40rem", overflowY:"auto", overflowX :"hidden"}}>
            <Row>
            {
              this.state.apartments.map(
                (apartment : Apartment, index : number) =>{
                  return <ApartmentContainer key={index} apartment={apartment} choosen={myself.state.selected == apartment} onClick={()=>{myself.onSelectApartment(apartment)}}/>
                }
              )
            }
            </Row>
            </div>
            {this.state.selected && <Button onClick={myself.goToFinish} className="btn-success">Seleccionar</Button>}
        </Container>
    )
  }

}

