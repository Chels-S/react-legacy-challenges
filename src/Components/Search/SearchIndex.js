import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchTerm: '' };
      
  }
  
  searchFunction = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  dynamicSearch = () => {
    return this.state.things.filter(things => things.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }
  
  render() {
    return(
      
      <div>
       <Input type="text" value={this.state.searchTerm} onChange={this.searchFunction} placeholder='Search Here' />
       <h3>Results:</h3>
       <SearchResults things={this.dynamicSearch()} />
     </div>
    )
  }
}


class SearchResults extends Component {
  render(){
    return (
      <div>
        {this.props.things.map(things => <Things things = {things}/>)}
      </div>
    )
  }
}
 
class Things extends Component {
  render() {
    return (
      <div>
        {this.props.things}
      </div>
    )
  }
}
export default SearchIndex;
