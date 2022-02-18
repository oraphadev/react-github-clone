import React from 'react';

import { Container, RepositoryIcon } from './styles';

function TabContent({ number = 0 }) {
  return (
    <Container>
      <div className="content">
        <RepositoryIcon />

        <span className="label">
          Repositories
        </span>

        <span className="number">
          {number}
        </span>
      </div>
    </Container>
  );
}

export default TabContent;
