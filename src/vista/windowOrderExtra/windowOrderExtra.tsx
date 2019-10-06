import React, { Component } from 'react'; // let's also import Component
import Extra from '../../model/order/extra';
import OrderCointroller from '../../model/order/orderController';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Button,Row
} from 'reactstrap';
import Navigator, {SCREEN_KEYS} from "../navigator";

type WindowExtraProps= {
    navigator : Navigator
}

type WindowExtraState = {
  extras :Extra[],
  selected :Extra[],
  controller : OrderCointroller
}

export default class WindowExtra extends Component<WindowExtraProps, WindowExtraState> {
  constructor(props: WindowExtraProps){
      super(props);
      var controller = OrderCointroller.getInstance();
      this.state = {"controller" : controller, extras : controller.getExtraCatalog().getExtras(),selected : []}

      this.goToBill = this.goToBill.bind(this);

  }

  goToBill(){
    var order = this.state.controller.getOrder()
    if(order){
      order.setExtra(this.state.selected);
      this.props.navigator.setScreen(SCREEN_KEYS.BILL);
    }
  }

  // render will know everything!
  render() {
    var myself = this;
    return (  
    <div>
      <h1>Selecciona una caracteristica extra (Paso 3/4)</h1>
      <h2>Azulejos</h2>
            <Row className="justify-content-center align-items-center">
            {
              this.state.extras.map(
                (extra : Extra, index : number) =>{
                  return (<div className= "m-2" key ={index}>
                  <Col xl="4"lg="4"md="4"xs="4"sm="4">
                    <Button onClick={ ()=>{ myself.state.selected.push(extra); myself.setState({selected:myself.state.selected})}} >
                      <p>{extra.getName() }</p> 
                      <p>Price: {extra.getPrice()}</p>
                    </Button>
                  </Col>
                  </div>)
                }
              )
            }
            </Row>

            <div style={{position:"absolute", top:"20px", left: "20px"}}> 
              {this.state.selected.map(
                (extra : Extra , key: number) =>{
                  return <p className="my-0" key={key}>{extra.getName()}</p>
                }

              )}
            </div>

            <Button onClick={myself.goToBill} className="btn-success">Continue</Button>

    </div>
    )
  }

}