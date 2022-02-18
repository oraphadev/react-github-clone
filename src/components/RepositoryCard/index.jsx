import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  TopSide,
  RepositoryIcon,
  BotSide,
  StarIcon,
  ForkIcon,
} from './styles';

function RepositoryCard({
  username,
  repositoryName,
  description,
  language,
  stars,
  forks,
}) {
  const languageClass = language ? String(language).toLowerCase() : 'other';

  return (
    <Container>
      <TopSide>
        <header>
          <RepositoryIcon />

          <Link to={`/${username}/${repositoryName}`}>
            {repositoryName}
          </Link>
        </header>

        <p>
          {description}
        </p>
      </TopSide>

      <BotSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />

            <span>{language}</span>
          </li>

          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>

          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BotSide>
    </Container>
  );
}

export default RepositoryCard;
