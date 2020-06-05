import styled from 'styled-components';

export const Content = styled.div`
  padding: 30px;
  max-width: 1426px;
  margin: 0 auto;
  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }
`;
