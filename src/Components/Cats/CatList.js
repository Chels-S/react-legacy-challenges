import React, { Component } from 'react';

 
class CatList extends Component {
  render(){
    return(
      <div>
        {this.props.cats.map((cat)=>{
          return <Cat passingCat={cat}/>;
          
        }
        )}
      </div>
    )
    }
  }


  const Cat = (props) => {
    return (
      <div>
        <h3>{props.passingCat}</h3>
      </div>
    )
  }
  

export default CatList;