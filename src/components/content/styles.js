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

  @media(max-width: 980px){
    width: unset;
    margin-right: 0;
  }
`;

export const PainelCalculator = styled.div`
  width: 25vw;

  svg {
    width: 30vw;
    height: 65vh;
  }

  @media(max-width: 980px){
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    svg {
      height: 45vh;
    }
  }
`;

export const ValueCalculator = styled.div`
  text-align: right;
  font-weight: bold;
  font-size: 45px;
  letter-spacing: 1.5px;

  @media(max-width: 980px){
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const GroupCalculator = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;
  width: 100%;
  padding-left: 50px;

  @media(max-width: 980px){
    width: 254px;
    padding-left: 0;
    margin: 20px 0;
  }
`;
