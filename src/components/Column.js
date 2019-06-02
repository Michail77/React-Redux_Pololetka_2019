import React from 'react';

export default class Column extends React.Component {
  constructor(props){ //Vytváříme state v konstruktoru
    super(props); //Musí být
    this.state = { //Vytváříme ve stateu proměnnou pro X,O
      text:"⠀",
      i:this.props.i,
      X:this.props.x,
      Y:this.props.y
    };
  }
  render(){
    return (
      <div>
        <div style={{padding:"40px", border:"1px solid black"}} onClick={(e)=>{ //
          e.preventDefault();
          if(this.state.text === "⠀"){
            if(this.props.i % 2 === 0){ //Modulo 2, pokud = 0 -> X pokud = 1 -> O
              this.setState({text:"X"}); //Nastavime promenou ve stateu na X
              console.log("X:",this.state.X);
              console.log("Y:",this.state.Y);
            }
            else{
              this.setState({text:"O"}); //Nastavime promenou ve stateu na O
              console.log("X:",this.state.X);
              console.log("Y:",this.state.Y);
            }
              this.props.changeI(this.props.i+1); //Navýšíme i o jedna
          }
          //-------------Zkouska kontroly sousednich policek---------
          for(var i = 0; i<=2; i++){
            for(var j = 0; j<=2; j++){
              var sousedX = this.i + this.state.X;
              var sousedY = this.j + this.state.Y;
              console.log(i);
          }
        }


        }}>{this.state.text}</div>
      </div>
    );
  }
}
