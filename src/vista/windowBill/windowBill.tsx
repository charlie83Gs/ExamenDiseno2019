import React, { Component,Fragment } from 'react'; // let's also import Component
import {Container,Table,Button} from 'reactstrap';
import Order from '../../model/order/order';
import Bill from '../../model/order/Bill';
import OrderCointroller from '../../model/order/orderController';
import Finish from '../../model/order/finish';
import Extra from '../../model/order/extra';
import Navigator, {SCREEN_KEYS} from "../navigator";

type WindowBillProps= {
    navigator : Navigator
}

type WindowBillState = {
  order : Order | undefined,
  bill : Bill
}

export default class WindowBill extends Component<WindowBillProps, WindowBillState> {
  constructor(props: WindowBillProps){
      super(props);
      var controller = OrderCointroller.getInstance();

      this.state = {order : controller.getOrder(), bill : controller.checkIn()}
      this.finish = this.finish.bind(this);
  }

  getTotal() : number{
    var total =0;
    
    if(this.state.order){
      total += this.state.order.getApartment().getPrice();
      this.state.order.getExtra().forEach(
        (extra : Extra) =>{
          total += extra.getPrice();
        }
      )
    }

    return total;
  }

  finish(){
    this.props.navigator.setScreen(SCREEN_KEYS.MAIN);
  }

  // render will know everything!
  render() {
    var total = this.getTotal();
    var myself = this;

    return (
      <Container>
        <h2 className="my-6">Su Factura (Paso 4/4)</h2>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.order && 
            <tr>
              <td>{nameFromPrice(this.state.order.getApartment().getPrice())}</td>
              <td>{this.state.order.getApartment().getPrice()}</td>
            </tr>
          }

          {
            this.state.order && this.state.order.getFinish().map(
              (finish : Finish, key :number) =>{
                return(
                <tr key={key}>
                  <td>{finish.getName()}</td>
                  <td>{0}</td>
                </tr>
                )
              }
            )
            
          }

          {
            this.state.order && this.state.order.getExtra().map(
              (extra : Extra, key :number) =>{
                return(
                <tr key={key}>
                  <td>{extra.getName()}</td>
                  <td>{extra.getPrice()}</td>
                </tr>
                )
              }
            )  
          }

          <tr>
                  <td>Total</td>
                  <td>{total}</td>
                </tr>
          </tbody>
        </Table>

        <Button onClick={myself.finish} className="btn-success">Terminar</Button>
      </Container> 
    )
  }

}



function nameFromPrice(price: number) : string{
  if(price == 50000) return "Model A"
  if(price == 100000) return "Model B"
  if(price == 150000) return "Model C"
  return ""
}