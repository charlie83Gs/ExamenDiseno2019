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

      this.goBack = this.goBack.bind(this);
      this.goToExtra = this.goToExtra.bind(this);

  }

  goBack(){
    this.props.navigator.setScreen(SCREEN_KEYS.APARTMENT);
    
  }

  goToExtra(){
    //update order
    var order = this.state.controller.getOrder();
    if(order){
      order.setFinish(this.state.finish); 
      this.props.navigator.setScreen(SCREEN_KEYS.EXTRA);

    }


  }
  // render will know everything!
  render() {
    var myself = this;

    return (
        <div>
            <h1>Selecciona un acabado (Paso 2/4)</h1>
            <div  style={{height:"40rem", overflowY:"auto", overflowX :"hidden"}}>
            <h2>Paint</h2>
            <Row className="justify-content-center align-items-center">
            {
              this.state.paints.map(
                (paint : PaintColor, index : number) =>{
                  return (<div className= "m-2" key ={index}>
                  <Col xl="4"lg="4"md="4"xs="4"sm="4">
                    <Button style={{backgroundColor: paint.getColor()}}  onClick={ ()=>{ myself.state.finish.push(paint); myself.setState({finish:myself.state.finish})}} >{paint.getName() }</Button>
                  </Col>
                  </div>)
                }
              )
            }
            </Row>
            
            <h2>Azulejos</h2>
            <Row className="justify-content-center align-items-center">
            {
              this.state.azulejos.map(
                (azulejo : Azulejo, index : number) =>{
                  return (<div className= "m-2" key ={index}>
                  <Col xl="4"lg="4"md="4"xs="4"sm="4">
                    <Button   onClick={ ()=>{ myself.state.finish.push(azulejo);myself.setState({finish:myself.state.finish})}} ><p>{azulejo.getName() }</p><p>{azulejo.getDescription()}</p></Button>
                  </Col>
                  </div>)
                }
              )
            }
            </Row>

            <h2>Kitchen</h2>
            <Row className="justify-content-center align-items-center">
            {
              this.state.furniture.map(
                (furniture : KitchenFurniture, index : number) =>{
                  return (<div className= "m-2" key ={index}>
                  <Col xl="4"lg="4"md="4"xs="4"sm="4">
                    <Button   onClick={ ()=>{ myself.state.finish.push(furniture);myself.setState({finish:myself.state.finish})}} ><p>{furniture.getName() }</p><p>{furniture.getDescription()}</p></Button>
                  </Col>
                  </div>)
                }
              )
            }
            </Row>

            </div>
            <div style={{position:"absolute", top:"20px", left: "20px"}}> 
              {this.state.finish.map(
                (finis : Finish , key: number) =>{
                  return <p className="my-0" key={key}>{finis.getName()}</p>
                }

              )}
            </div>
              <Button onClick={myself.goBack} className="btn-secondary mx-5">Volver</Button>
              <Button onClick={myself.goToExtra} className="btn-success">Continue</Button>

        </div>
    )
  }
}