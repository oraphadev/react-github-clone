import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 16px 32px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity .2s ease-out;

  &:hover {
    opacity: .8;
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  input {
    background: var(--search);
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    transition: width .2s ease-out;
    color: #c9d1d9;

    &:focus {
      width: 318px;
    }
  }
`;
