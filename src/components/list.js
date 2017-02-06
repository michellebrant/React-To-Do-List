import React, { Component } from 'react';
import ListItem from './list_item'

class List extends Component {
  render(){
  return (
    <div>
      <ListItem renderList = { this.props.renderList } />
    </div>
    )}
}


export default List;




