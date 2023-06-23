import React, { Component } from 'react';
import './Main.css';
// import { FaPlus } from 'react-icons/fa';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: '',
      tarefas: [],
      index: -1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  /* componentDidMount() {
    const { tarefas } = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  } */

  handleEdit(e, index) {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }

  handleDelete(e, index) {
    // console.log(e, index);
    const { tarefas } = this.state;
    const tarefasPermanentes = [...tarefas];
    tarefasPermanentes.splice(index, 1);
    this.setState({
      tarefas: tarefasPermanentes,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: '',
      });
    }
  }

  handleChange(e) {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="myForm">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">+</button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <button onClick={(e) => this.handleEdit(e, index)} className="editar" type="button">Editar</button>
                <button onClick={(e) => this.handleDelete(e, index)} className="excluir" type="button">Excluir</button>
              </span>
            </li>
          ))}
        </ul>
      </div>

    );
  }
}
