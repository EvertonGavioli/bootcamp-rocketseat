import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGitAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    errorInput: false,
    errorInputMsg: '',
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, errorInput: false });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      this.setState({ loading: true, errorInput: false });

      const { newRepo, repositories } = this.state;

      if (newRepo === '') {
        throw new Error('Error: Invalid repository');
      }

      const repoDuplicated = repositories.filter(repo => repo.name === newRepo);

      if (repoDuplicated.length > 0) {
        throw new Error('Error: Duplicated repository');
      }

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
      });
    } catch (error) {
      if (error.response) {
        this.setState({
          loading: false,
          errorInput: true,
          errorInputMsg: `Error: ${error.response.status} - ${error.response.data.message}`,
        });
      } else {
        this.setState({
          loading: false,
          errorInput: true,
          errorInputMsg: error.message,
        });
      }
    }
  };

  render() {
    const {
      newRepo,
      repositories,
      loading,
      errorInput,
      errorInputMsg,
    } = this.state;

    return (
      <Container>
        <h1>
          <FaGitAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit} errorinput={errorInput}>
          <div>
            <input
              type="text"
              placeholder="Adicionar repositório"
              value={newRepo}
              onChange={this.handleInputChange}
            />

            <SubmitButton loading={loading ? 1 : undefined}>
              {loading ? (
                <FaSpinner color="#FFF" size={14} />
              ) : (
                <FaPlus color="#FFF" size={14} />
              )}
            </SubmitButton>
          </div>
          <span>{errorInputMsg}</span>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
