import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #19181f;
  margin-bottom: 10px;
  padding: 8px;
  transition: all 0.2s;

  border-width: 2px;
  border-style: solid;
  border-color: #28272c;
  border-radius: 5px;
  height: 50px;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #7159c1;
    `}

  input {
    margin-left: 8px;
    font-size: 14px;
    color: #fff;
    background: #19181f;
    border: 0;
    width: 100%;
  }

  svg {
    color: #333040;
    transition: all 0.2s;

    ${(props) =>
      props.isFocused &&
      css`
        color: #7159c1;
      `}
  }
`;
