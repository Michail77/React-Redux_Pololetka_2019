import React from 'react';

export default class Column extends React.Component {
  constructor(props){ //Vytváříme state v konstruktoru
    super(props); //Musí být
    this.state = { //Vytváříme ve stateu proměnnou pro X,O
      text:"-",
      i:0 //Proměnná pro střídání X,O (kazde sude bude O například)
    };
  }
  render(){
    return (
      <div>
        <div style={{padding:"40px", border:"1px solid black"}} onClick={()=>{ //
          if(this.state.i % 2 == 0){ //Modulo 2, pokud = 0 -> O pokud = 1 -> X
            this.setState({text:"O"}); //Nastavime promenou ve stateu na X 
          }
          else{
            this.setState({text:"X"}); //Nastavime promenou ve stateu na O
          }
          this.setState({i:this.state.i+1}); //Zvýšíme



        }}>{this.state.text}</div>
      </div>
    );
  }
}
