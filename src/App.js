import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { isTemplateElement } from '@babel/types';
class ToDoList extends React.Component {
  constructor(props){
      super(props);
      this.state= {
        newItem:" ",
        list:[],
      }
    }
    updateInput(key,value){
      //update react state
      this.setState({
        [key]:value
      });
    }
    addItem(){
      //create item with unique id
      const newItem={
        id: 1+ Math.random(),
        value: this.state.newItem.slice()
      };
      //copy of current list items
      const list= [...this.state.list]
      //add new item to list
      list.push(newItem);
      //update state with new list and reset newItem input
      this.setState({
        list,
        newItem:""
      });
    }
    deleteItem(id){
      //delete item
      const list= [...this.state.list]
      //filter out item that being deleted
      const updateList = list.filter(item=>item.id !==id);
      this.setState({list:updateList})
    }
  render(){
    return(
      <div className="container">
          <div className="row">      
              <div className="col-sm-8">
                <h2>To Do Lists</h2>
                    <input
                        type="text" className="form-control"
                        placeholder="Type item here"
                        value={this.state.newItem}
                        onChange={e => this.updateInput("newItem", e.target.value)}
                    />
              </div>
              <div className="col-sm-4">
                  <button className="btn btn-primary" onClick={()=> this.addItem()}>
                    Add
                  </button>
              </div>
              <div className="col-sm-8">
                  <ul className="list-group list-group-flush">
                    {this.state.list.map(item => {
                      return(
                          <li className="list-group-item" key={item.id}>{item.value}
                            <button className="btn btn-danger"
                              onClick={()=> this.deleteItem(item.id)}
                            >
                              X
                            </button>
                          </li>
                      )
                    })}
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}
export default ToDoList;
