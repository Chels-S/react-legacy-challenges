import React, {Component} from 'react';
import {Button} from 'reactstrap';

export default class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state={
            todoList: [],
            newItem: ""};
        this.addToDo = this.addToDo.bind(this);
    }

    
    addToDo(event) {
        event.preventDefault();
        this.setState({
            todoList: [...this.state.todoList, this.state.newItem],
            newItem: '',
        });
    };
    
    changeHandler(event){
        this.setState({newItem: event.target.value});
    }

    handleRemove = (index) => {
        const newList = [...this.state.todoList];
        newList.splice(index, 1);
      
        this.setState(state => ({
            todoList: newList
        }));
      
      }

    // handleRemoveTwo = (index) => {
    //     const newList = this.state.todoList.filter(element => element.id !== index.id);
    //     this.setState({todoList: newList});

    // }


    render(){
        return(
            <div className="main">
                <div className= "mainDiv">
                    <form onSubmit={this.addToDo}>
                        <input type="text" value={this.state.newItem}  onChange={(event) => this.changeHandler(event)} placeholder="Add to list"/>
                        <button type="submit" name="submit" value="submit">Add</button>
                    <ul>
                        {this.state.todoList.map((item, index) => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <input type="button" value="delete" onClick={() => this.handleRemove(index)}/>
                            </li>
                        ))}
                    </ul>
                        </form>
                    <UpdatedList todos={this.state.todoList} />
                    {console.log(this.state.todoList)}
                    {console.log(this.state.todoList[1])}
                
                   

                </div>
            </div>
        )
    }
}

class UpdatedList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map((todo) => {
                    return <ToDo passingTodo={todo}/>;
                })}
            </div>
        )
    }
}

const ToDo = (props) => {
    return (
        <div>
            <h3>{props.passingTodo}</h3>
        </div>
    )
}