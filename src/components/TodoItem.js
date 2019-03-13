import React, { Component } from 'react';
import todoService from '../lib/todo-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Todo extends Component {
    state = {
        isEditing: false,
        id: "",
        title: "",
        body: ""
    }

    componentDidMount = () => {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            body: this.props.body
        })
    }

    changeEdit = () => {
        this.setState({
            isEditing: true
        })
    }

    handleDelete = async () => {
        const {id} = this.state;
        console.log(id)
        await todoService.deleteTodo({id})
        .then( (data) => {
        })
        .catch( error => console.log(error) )
        await this.props.callback(id);
    }

    renderTodo = () => {
        const {isEditing, id, title, body} = this.state
        return (
            <div>
                <p>{title}</p>
                <p>{body}</p>
                <span onClick={this.changeEdit}>editar</span>
            </div>
        )
    }

    renderTodoForm = () => {
        const {isEditing, id, title, body} = this.state
        return (
            <div>
                <input type="text" name="title" value={title} onChange={this.handleChange} />
                <input type="text" name="body" value={body} onChange={this.handleChange} />
                <button type="submit" onClick={this.handleSubmit}>Enviar</button>
            </div>
        );
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = () => {
        const {title, body, id} = this.state;
        todoService.updateTodo({title,body,id})
        .then( (data) => {
            this.setState({
                isEditing: false,
            })
        })
        .catch( error => console.log(error) )
    }

    render(){
        const {isEditing, id, title, body} = this.state
        {
            if(isEditing){
                return (
                    <div className="formulario">
                        <input type="text" name="title" value={title} onChange={this.handleChange} />
                        <input type="text" name="body" value={body} onChange={this.handleChange} />
                        <button type="submit" onClick={this.handleSubmit}>Enviar</button>
                    </div>
                )
            }else {
                return (
                    <div className="todo">
                        <h3>{title}</h3>
                        <p>{body}</p>
                        <div className="icons-box">
                            <FontAwesomeIcon onClick={this.changeEdit} className="icons" icon="pen-square"/>
                            <FontAwesomeIcon onClick={this.handleDelete} className="icons" icon="times"/>
                        </div>
                    </div>
                )
            }
        }
    }
}
export default Todo