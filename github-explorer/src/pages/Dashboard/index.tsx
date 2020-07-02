import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../service/api';
import LogoImage from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

/**
Toda vez que troca o eixo no flexbox, criar uma div
 */

interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@Github-Explorer/repositories',
    );
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite Autor/Nome-do-repositório');
      return;
    }
    try {
      const response = await api.get<IRepository>(`/repos/${newRepo}`);

      const repository = response.data;
      setRepositories([repository, ...repositories]);
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Erro na busca por esse repositório');
    }
  }

  function handleNewRepoInputChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    setNewRepo(event.target.value);
  }

  useEffect(() => {
    const parsifiedRepositories = JSON.stringify(repositories);
    localStorage.setItem(
      '@Github-Explorer/repositories',
      parsifiedRepositories,
    );
  }, [repositories]);

  return (
    <>
      <Link to="/">
        <img src={LogoImage} alt="github-explorer" />
      </Link>
      <Title>Explore repositórios no github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={handleNewRepoInputChange}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link
            to={`/repository/${repository.full_name}`}
            key={repository.full_name}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
