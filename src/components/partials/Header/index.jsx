import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container, GithubLogo, SearchForm,
} from './styles';

function Header({ themeName, setThemeName }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    navigate(`/${search.toLowerCase().trim()}`);
  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />

      <SearchForm onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Enter Username or Repo..."
          type="text"
          value={search}
        />
      </SearchForm>
    </Container>
  );
}

export default Header;
