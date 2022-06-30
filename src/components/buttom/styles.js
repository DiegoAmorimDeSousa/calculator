import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.length ? '131px' : '60px'};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-roboto);
  color: var(--color-white);
  letter-spacing: 2px;
  background: ${props => props.background};
  cursor: pointer;
  transition: background 1s;
  margin-bottom: 12px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};

  &:hover {
    background: var(--color-purple-hover);
  }
`;
