import React, { Component } from 'react'; // let's also import Component


type WindowExtraProps= {
    navigator : Navigator
}

type WindowExtraState = {
}

export default class WindowExtra extends Component<WindowExtraProps, WindowExtraState> {
  constructor(props: WindowExtraProps){
      super(props);
  }
  // render will know everything!
  render() {
    return <p>extra window</p>
  }

}