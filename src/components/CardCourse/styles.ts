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
  transition: all 0.2s;

  &:hover {
    transform: translateY(-10px);
    border-color: ${(props) => props.color_theme};
  }

  background: url(${backgroundImg}) 0% 0% / cover;

  @media only screen and (max-width: 1120px) {
    background-position: center bottom;
    padding: 48px;
  }

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
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1120px) {
      margin: 50px 0px 20px;

      img {
        width: 90%;
      }
    }
  }

  p {
    text-align: center;
    color: #87868b;
    text-align: center;

    strong {
      color: ${(props) => props.color_theme};
    }

    @media only screen and (max-width: 1120px) {
      max-width: 270px;
      line-height: 26px;
    }
  }
`;
