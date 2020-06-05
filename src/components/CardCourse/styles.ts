import styled, { css } from 'styled-components';

import backgroundImg from '../../assets/dashboard/card_background.png';

interface ContainerProps {
  color_theme: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: #0b0a0d;

  background: url(${backgroundImg}) 0% 0% / cover;

  span {
    width: 48px;
    height: 48px;
    font-size: 16px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: ${(props) => props.color_theme};
    color: ${(props) => props.color_theme};
    text-align: center;
  }

  div {
    height: 145px;
    margin: 105px 0px 55px;
  }

  p {
    text-align: center;
    color: #87868b;

    strong {
      color: ${(props) => props.color_theme};
    }
  }
`;
