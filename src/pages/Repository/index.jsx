import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepositoryIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

function Repository() {
  const { username, repository } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repository}`).then(
      async (response) => {
        setData(
          response.status === 404
            ? { error: 'Repository not found!' }
            : { repo: await response.json() },
        );
      },
    );
  }, [repository, username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.repo) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Breadcrumb>
        <RepositoryIcon />

        <Link
          className="username"
          to={`/${username}`}
        >
          {username}
        </Link>

        <span>/</span>

        <Link
          className="repository-name"
          to={`/${username}/${repository}`}
        >
          {repository}
        </Link>
      </Breadcrumb>

      <p>
        {data.repo.description}
      </p>

      <Stats>
        <li>
          <StarIcon />
          <strong>
            {data.repo.stargazers_count}
          </strong>
          <span>
            stars
          </span>
        </li>

        <li>
          <ForkIcon />
          <strong>
            {data.repo.forks}
          </strong>
          <span>
            forks
          </span>
        </li>
      </Stats>

      <LinkButton
        href={data.repo.html_url}
        target="_blank"
      >
        <GithubIcon />

        <span>
          View on Github
        </span>
      </LinkButton>
    </Container>
  );
}

export default Repository;
