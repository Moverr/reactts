import React, {
  Component
} from 'react';
// import { isString } from 'postcss-selector-parser';

import Utitlities from './Utitlities';

class Hello extends Component {



  //todo: YOu initialize  in the state in the constructor: :: 


  constructor(props) {
    super(props)
    this.util = new Utitlities();

    this.state = {

      name: "Muyinda Rogers",
      date: this.util.initDate(),
      isToggled:true
    }

    this.stopInterval = this.stopInterval.bind(this);
    this.startInterval = this.startInterval.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    
  }

  playmealert(){
    alert("play Me Alert");
  }
  handleToggle(){
    this.setState({
      isToggled:!this.state.isToggled
    })
  }
  
  
  startInterval() {
    this.timeId = setInterval(() => this.tick(), 1000);
  }
  stopInterval() {
    clearInterval(this.timeId);
  }

  
  componentDidMount() {
    // this.startInterval();
  }
  
  componentWillUnmount() {
     this.stopInterval();
  }
  



  /*
  componentDidCatch(){

  }
  componentWillReceiveProps(){

  }

  componentDidUpdate(){

  }
  componentWillMount(){

  }
  componentWillUpdate(){

  }
   */

  handleStart(e) {    
    this.startInterval();
    
  }

  handleStop(e) {    
    this.stopInterval();
  }
  

  tick() {
    this.setState({
      date: this.util.initDate()
    })
  }
  player(name) {

    return <h1 > Play me a sound {
      name
    } < /h1>;

    // return "N/A";
  }


  render() {
    // const user = {
    //     "name":"movers",
    //     "age":23
    // }

    return ( 
      
      <div> {
        this.player(this.props.name)
      } 
      
      <h2> New Date: { this.state.date.toLocaleTimeString()} </h2> 
      
      <button onClick = {this.handleStart } > START </button> 
      <button onClick = {this.handleStop } > STOP </button> 
      
      <button onClick = {this.handleToggle } > {this.state.isToggled ? "ON" : "OFF" } </button> 
      <button onClick = {(e) => this.playmealert() } > PLAY ME </button> 
      
      </div>
    )
  }


   
}


export default Hello;