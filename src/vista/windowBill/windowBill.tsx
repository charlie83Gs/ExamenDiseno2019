import React, { Component } from 'react'; // let's also import Component


type WindowBillProps= {
    navigator : Navigator
}

type WindowBillState = {

}

export default class WindowBill extends Component<WindowBillProps, WindowBillState> {
  constructor(props: WindowBillProps){
      super(props);
  }
  // render will know everything!
  render() {
    return <p>Bill window </p>
  }

}

