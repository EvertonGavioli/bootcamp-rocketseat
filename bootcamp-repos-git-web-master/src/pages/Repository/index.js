import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import * as ParseLink from 'parse-link-header';

import api from '../../services/api';

import Container from '../../components/Container';
import {
  Loading,
  Owner,
  IssueList,
  StateFilter,
  IssueButton,
  Pagination,
} from './styles';

const IssueFilter = {
  ALL: 'all',
  OPEN: 'open',
  CLOSED: 'closed',
};

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loadingPage: true,
    issueFilter: IssueFilter.ALL,
    loadingIssue: false,
    page: 1,
    lastPage: 0,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { issueFilter, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issueFilter,
          page,
          per_page: 5,
        },
      }),
    ]);

    const parsed = ParseLink(issues.headers.link);
    const lastPage = parsed.last.page;

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loadingPage: false,
      lastPage,
    });
  }

  async componentDidUpdate(_, prevState) {
    const { issueFilter, page } = this.state;

    if (prevState.issueFilter !== issueFilter || prevState.page !== page) {
      await this.funcIssueFilter();
    }
  }

  funcIssueFilter = async () => {
    this.setState({
      loadingIssue: true,
    });

    const { issueFilter, page, lastPage } = this.state;
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issueFilter,
          page,
          per_page: 5,
        },
      }),
    ]);

    const parsed = ParseLink(issues.headers.link);
    const { last } = parsed;

    let updatedLastPage = lastPage;

    if (last) {
      updatedLastPage = parsed.last.page;
    }

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loadingIssue: false,
      lastPage: updatedLastPage,
    });
  };

  handleIssueButtonFilter = e => {
    const { issueFilter } = this.state;

    if (issueFilter !== e) {
      this.setState({
        issueFilter: e,
        page: 1,
      });
    }
  };

  handlePreviousPage = () => {
    const { page } = this.state;
    if (page > 1) {
      const previousPage = page - 1;

      this.setState({
        page: previousPage,
      });
    }
  };

  handleNextPage = () => {
    const { page, lastPage } = this.state;

    if (page < lastPage) {
      const nextPage = page + 1;

      this.setState({
        page: nextPage,
      });
    }
  };

  render() {
    const {
      repository,
      issues,
      loadingPage,
      issueFilter,
      loadingIssue,
      page,
      lastPage,
    } = this.state;

    if (loadingPage) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <StateFilter loadingissue={loadingIssue}>
          {loadingIssue && <FaSpinner />}
          <strong>Issues:</strong>

          <IssueButton
            selected={issueFilter === IssueFilter.ALL}
            onClick={() => this.handleIssueButtonFilter(IssueFilter.ALL)}
            loadingissue={loadingIssue}
          >
            Todas
          </IssueButton>
          <IssueButton
            selected={issueFilter === IssueFilter.OPEN}
            onClick={() => this.handleIssueButtonFilter(IssueFilter.OPEN)}
            loadingissue={loadingIssue}
          >
            Abertas
          </IssueButton>
          <IssueButton
            selected={issueFilter === IssueFilter.CLOSED}
            onClick={() => this.handleIssueButtonFilter(IssueFilter.CLOSED)}
            loadingissue={loadingIssue}
          >
            Fechadas
          </IssueButton>
        </StateFilter>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>

        <Pagination>
          <button
            type="button"
            onClick={() => this.handlePreviousPage()}
            disabled={String(page) === '1'}
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => this.handleNextPage()}
            disabled={String(page) === String(lastPage)}
          >
            Proxima
          </button>
        </Pagination>
      </Container>
    );
  }
}
