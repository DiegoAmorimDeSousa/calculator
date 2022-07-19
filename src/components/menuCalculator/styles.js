import styled from 'styled-components';

export const Container = styled.div`
  width: 15vw;
  background: #17191a;
  height: 100%;
  padding: 45px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 980px){
    height: 15%;
    width: 100%;
    flex-direction: initial;
  }

  @media (max-width: 592px) {
    flex-direction: inherit;
  }
`;

export const Title = styled.div`
  color: white;
  width: 90%;
  text-align: center;
  font-family: var(--font-family-rubik);
  font-size: 20px;
  letter-spacing: 1.5px;
  display: flex;

  svg {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }

  @media(max-width: 980px){
    width: 70%;
  }
`;

export const ButtomGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;
  width: 90%;

  @media (max-width: 1168px) {
    flex-direction: column;
    align-items: center;
  }

  @media(max-width: 980px){
    width: unset;
    flex-direction: initial;
    width: 140px;
  }
`;