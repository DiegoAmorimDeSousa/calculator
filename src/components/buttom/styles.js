import styled from 'styled-components';

export const Container = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-roboto);
  color: var(--color-white);
  letter-spacing: 2px;
  background: var(--color-purple);
  cursor: pointer;
  transition: background 1s;

  &:hover {
    background: var(--color-purple-hover);
  }
`;
