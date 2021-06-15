import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background-color: var(--input-background);
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    font-weight: 400;
    font-size: 1rem;
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background-color: var(--green);
    border-radius: 0.25rem;
    border: 0;
    color: var(--shape);
    font-size: 1rem;
    font-weight: 600;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    transition: filter 0.2s;
    width: 100%;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
}

export const RadioBox = styled.button<RadioBoxProps>`
  align-items: center;
  background-color: ${({isActive, activeColor}) => isActive 
    ? transparentize(0.9, colors[activeColor])
    : 'transparent'
  };
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  transition: border-color 0.2s;
  height: 4rem;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    color: var(--text-title);
    display: inline-block;
    font-size: 1rem;
    margin-left: 1rem;
  }
`;