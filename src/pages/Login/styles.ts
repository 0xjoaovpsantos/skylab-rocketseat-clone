import styled from 'styled-components';

import background_1 from '../../assets/login/background_1.svg';
import background_2 from '../../assets/login/background_2.svg';

export const Container = styled.section`
  display: flex;
  min-height: 100vh;
  background: url(${background_1}) center bottom no-repeat, url(${background_2});
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 520px;
  width: 100%;
  padding: 32px;
  margin: auto auto;

  img {
    width: 196px;
    margin: 0px auto 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  max-width: 360px;
  width: 100%;
  margin: 0px auto;

  a {
    text-decoration: none;
    font-size: 14px;
    color: #7159c1;
    margin: 8px 0px 18px;
    font-weight: bold;
  }
`;

export const NoAccount = styled.div`
  font-size: 14px;
  margin-top: 24px;
  text-align: center;

  color: #cccccc;
`;

export const ContainerStyle = styled.div`
  position: relative;
  font-size: 12px;
  margin: 24px 0px;
  text-align: center;
  color: #87868b;

  &::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 50%;
    width: calc(50% - 25px);
    height: 1px;
    background: #28272f;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0px;
    top: 50%;
    width: calc(50% - 25px);
    height: 1px;
    background: #28272f;
  }
`;
