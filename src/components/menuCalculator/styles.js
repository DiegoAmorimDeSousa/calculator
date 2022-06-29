import styled from 'styled-components';

export const Container = styled.div`
  width: 15vw;
  background: #17191a;
  height: 100%;
  padding: 45px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const ButtomGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;
  width: 90%;
`;