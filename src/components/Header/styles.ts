import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 80px;
  position: fixed;
  padding: 0px 30px;
  background: #111116;
`;

export const Content = styled.div`
  max-width: 1366px;
  width: 100%;
  padding: 12px 0px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div:not(:first-of-type) {
    display: flex;

    img {
      width: 56px;
      height: 56px;
      border-width: 3px;
      border-style: solid;
      border-color: #7159c1;
      border-radius: 50%;
    }
  }
`;

export const UserInformation = styled.div`
  display: flex;
  align-items: center;
  text-align: end;

  div:first-of-type {
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    span:first-of-type {
      color: #fff;
      font-weight: bold;
      margin-bottom: 6px;
    }

    span:last-child {
      color: #87868b;
      font-size: 12px;
    }
  }
`;

export const Notifications = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  margin: auto 20px;
  align-items: center;
  justify-content: center;
  background-color: #19181f;
  border-radius: 5px;
  cursor: pointer;

  svg {
    color: #fff;
  }
`;
