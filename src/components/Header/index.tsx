import React from 'react';

import { Container, Content, UserInformation, Notifications } from './styles';

import rocketImg from '../../assets/dashboard/rocket.svg';
import photoUser from '../../assets/dashboard/photo_user.jpg';

import { FaBell } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <img src={rocketImg} alt="Logo Rocketseat" />
        </div>
        <div>
          <Notifications>
            <FaBell />
          </Notifications>
          <UserInformation>
            <div>
              <span>João Victor Pereira Santos</span>
              <span>joaovictorsantoscpv@gmail.com</span>
            </div>
            <div>
              <img src={photoUser} alt="Foto usuário" />
            </div>
          </UserInformation>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
