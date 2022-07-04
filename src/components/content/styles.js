import styled from 'styled-components';

export const Container = styled.div`
  width: 85vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-roboto);
  color: var(--color-white);
  font-size: 25px;
  margin-right: 50px;
`;

export const PainelCalculator = styled.div`
  width: 25vw;
  height: 55vh;

  svg {
    width: 30vw;
    height: 65vh;
  }
`;

export const ValueCalculator = styled.div`
  text-align: right;
  font-weight: bold;
  font-size: 45px;
  letter-spacing: 1.5px;
`;

export const GroupCalculator = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;
  width: 100%;
  padding-left: 50px;
`;
