import styled from 'styled-components';

export const Container = styled.div`
  width: 60vw;
  height: 80vh;
  background: #485058;
  display: flex;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    height: 60vh;
  }

  @media (max-width: 592px) {
    height: 80%;
  }

  @media (max-width: 472px) {
    width: 90vw;
  }
`;
