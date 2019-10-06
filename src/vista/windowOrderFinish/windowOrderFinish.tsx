import React, { Component } from 'react'; // let's also import Component
import {Container, Row} from 'reactstrap';
import OrderCointroller from '../../model/order/orderController';
import PaintColor from '../../model/order/paintColor';
import Azulejo from '../../model/order/azulejo';
import KitchenFurniture from '../../model/order/kitchenFurniture';
import Navigator, {SCREEN_KEYS} from "../navigator";
import Order from '../../model/order/order';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Button
} from 'reactstrap';
import Finish from '../../model/order/finish';
import { finished } from 'stream';


type WindowOrderFinishProps= {
    navigator : Navigator
}

type WindowOrderFinishState = {
  paints :PaintColor[],
  azulejos : Azulejo[],
  furniture : KitchenFurniture[],
  finish : Finish[],
  controller : OrderCointroller
}

export default class WindowOrderFinish extends Component<WindowOrderFinishProps, WindowOrderFinishState> {
  constructor(props: WindowOrderFinishProps){
      super(props);
      var controller = OrderCointroller.getInstance();
      this.state = {
        paints : controller.getFinishCatalog().getPaintColors(),
        azulejos : controller.getFinishCatalog().getAzulejos(),
        furniture : controller.getFinishCatalog().getKitchenFurnitures(),
        "controller" : controller,
        finish : []
      }

      this.goToExtra = this.goToExtra.bind(this);

  }

  goToExtra(){
    //update order

    this.props.navigator.setScreen(SCREEN_KEYS.EXTRA);
  }
  // render will know everything!
  render() {
    var myself = this;

    return (
        <div>
            <h1>Selecciona un acabado</h1>
            <div  style={{height:"40rem", overflowY:"auto", overflowX :"hidden"}}>
            <h2>Paint</h2>
            <Row>
            {
              this.state.paints.map(
                (paint : PaintColor, index : number) =>{
                  return (<div className= "m-2" key ={index}>
                  <Col xl="4"lg="4"md="4"xs="4"sm="4">
                    <Button style={{backgroundColor: paint.getColor()}}  onClick={ ()=>{ myself.state.finish.push(paint)}} >{paint.getName() }</Button>
                  </Col>
                  </div>)
                }
              )
            }
            </Row>
            
            <h2>Paint</h2>
            <Row>
            {
              this.state.paints.map(
                (paint : PaintColor, index : number) =>{
                  return (<div className= "m-2" key ={index}>
                  <Col xl="4"lg="4"md="4"xs="4"sm="4">
                    <Button style={{backgroundColor: paint.getColor()}}  onClick={ ()=>{ myself.state.finish.push(paint)}} >{paint.getName() }</Button>
                  </Col>
                  </div>)
                }
              )
            }
            </Row>
            
            </div>
            <Button onClick={myself.goToExtra} className="btn-success">Continue</Button>
        </div>
    )
  }
}