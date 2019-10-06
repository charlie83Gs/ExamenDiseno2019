import React, { Component } from 'react'; // let's also import Component
import WindowMain from './windowMain/windowMain';
import WindowOrderApartment from './windowOrderApartment/windowOrderApartment';
import WindowOrderFinish from './windowOrderFinish/windowOrderFinish';
import WindowExtra from './windowOrderExtra/windowOrderExtra';
import WindowBill from './windowBill/windowBill';

// the clock's state has one field: The current time, based upon the
// JavaScript class Date
type NavigatorState = {
  Screen : any
}

type NavigatorProps= {
}

export const SCREEN_KEYS = {
  "MAIN" : "MAIN_WINDOW",
  "APARTMENT" : "APARTMENT_WINDOW",
  "FINISH" : "FINISH_WINDOW",
  "EXTRA" : "EXTRA_WINDOW",
  "BILL" : "BILL_WINDOW",
}

const screens : any = {};

screens["MAIN_WINDOW"] = WindowMain;
screens["APARTMENT_WINDOW"] = WindowOrderApartment;
screens["FINISH_WINDOW"] = WindowOrderFinish;
screens["EXTRA_WINDOW"] = WindowExtra;
screens["BILL_WINDOW"] = WindowBill;
// https://coolors.co/app/0d445f-0f5d82-87a8b7-b6babf-8e9298
//https://fettblog.eu/typescript-react/components/
export default class Navigator extends Component<NavigatorProps, NavigatorState> {
  constructor(props: NavigatorProps){
      super(props);
      this.state = {Screen : screens["MAIN_WINDOW"]}
  }

  public setScreen(name : string){
    if(screens[name]){
      this.setState({Screen  : screens[name]})
    }
  }
  // render will know everything!
  render() {
    var Screen = this.state.Screen;
    var myself : Navigator = this;
    return (
      <Screen navigator = {myself}/>
    )
  }

}

