import React from 'react'; // we need this to make JSX compile
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Button
} from 'reactstrap';

import Apartment from '../../model/building/apartment';

type CardProps = {
  apartment: Apartment,
  choosen: boolean,
  onClick: any,
}

export const ApartmentContainer = ({ apartment, choosen, onClick }: CardProps) => {
    var color : string = choosen ? "#4d51c9" : "#FFFFFF";
    return (
      
      <div>

      <button className = "mx-2 my-2" style= {{backgroundColor :color}} onClick={onClick} >
        <Card style = {{width : "40erm"}}>
        <CardTitle>{"Price: " + apartment.getPrice()}</CardTitle>
        <CardBody>
          <CardText  className="my-0">{"Rooms : " + apartment.getRooms()}</CardText>
          <CardText  className="my-0">{"BathRooms : " + apartment.getBathRooms()}</CardText>
          <CardText  className="my-0">{"DinningRooms : " + apartment.getDinningRooms()}</CardText>
          <CardText  className="my-0">{"Laundries : " + apartment.getLaundry()}</CardText>
          <CardText  className="my-0">{"Balcones : " + apartment.getBalcone()}</CardText>
        </CardBody>
        </Card>
        </button>

      </div>
    )
}