import React, { Component } from 'react';
import todoService from '../lib/todo-service'
class Todo extends Component {
    state = {
        title: "",
        body: "",
    }
    handleSubmit = () => {
        const {title, body} = this.state;
        todoService.createTodo({title,body})
        .then( (data) => {
            this.setState({
                title: "",
                body: ""
            })
        })
        .catch( error => console.log(error) )
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const {title, body} = this.state;
        return (
            <div className="formulario">
                <input type="text" name="title" value={title} onChange={this.handleChange} />
                <input type="text" name="body" value={body} onChange={this.handleChange} />
                <button type="submit" onClick={this.handleSubmit}>Enviar</button>
            </div>
        );
    }
}
export default Todo