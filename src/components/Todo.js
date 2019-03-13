import React, { Component } from 'react';
import todoService from '../lib/todo-service'
import TodoItem from './TodoItem'
import {Link} from 'react-router-dom'
class Todo extends Component {
    state = {
        collections: []
    }
    componentDidMount = () => {
        todoService.getAllTodos()
        .then( (data) => {
            this.setState({
                collections: data
            });
        })
        .catch( error => console.log(error) )
    }

    updateState = (id) => {
        console.log(id)
        const filtered = this.state.collections.filter((item => item._id !== id))
            this.setState({
                collections: filtered
            });
            console.log(this.state.collections)
    }

    render(){
        return (
            <div>
            {this.state.collections.map((item,key)=> {
            return <TodoItem key={key}  id={item._id} title={item.title} body={item.body} callback={this.updateState} />
            })}
            <div className="mas"><Link to="/new">+</Link></div>
            </div>
        );
    }
}
export default Todo