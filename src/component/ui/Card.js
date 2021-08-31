import classes from "./Card.module.css";
//import {useContext} from 'react'
function Card(props) {
  //const context = useContext(meetupContext);
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
