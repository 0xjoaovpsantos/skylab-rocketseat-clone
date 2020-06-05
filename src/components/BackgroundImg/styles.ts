import styled from 'styled-components';

import background_1 from '../../assets/login/background_1.svg';
import background_2 from '../../assets/login/background_2.svg';

export const Container = styled.section`
  display: flex;
  min-height: 100vh;
  background: url(${background_1}) center bottom no-repeat, url(${background_2});

  @media only screen and (max-width: 768px) {
    background-size: 2000px, 1000px;
  }
`;
