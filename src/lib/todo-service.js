import axios from 'axios';

class TodosService {
  constructor() {
    this.consulta = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true
    })
  }

  getAllTodos() {
    return this.consulta.get('/todos')
      .then(({ data }) => data);
  }

  getTodo(data) {
      const {id} = data
      return this.consulta.get(`/todos/${id}`)
      .then(({ data }) => data);
  }

  createTodo(data) {
    const {title, body} = data
      return this.consulta.post('/todos', { title, body })
      .then(({data}) => data);
  }

  updateTodo(data) {
    const {title, body, id} = data
    return this.consulta.put(`/todos/${id}`,{ title, body })
    .then(({ data }) => data);
  }

  deleteTodo(data) {
    const {id} = data
      return this.consulta.delete(`/todos/${id}`)
      .then(({data})=>data);
  }
}


const todosService = new TodosService(); 

export default todosService;
