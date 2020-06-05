import React from 'react';

import rocketImg from '../../assets/dashboard/rocket.svg';
import photoUser from '../../assets/dashboard/photo_user.jpg';

import { FiBell } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <img src={rocketImg} alt="Logo Rocketseat" />
        Rocketseat
      </div>
      <div>
        <div>
          <FiBell />
        </div>
        <div>
          <span>João Victor Pereira Santos</span>{' '}
          <span>joaovictorsantoscpv@gmail.com</span>
        </div>
        <div>
          <img src={photoUser} alt="Foto usuário" />
        </div>
      </div>
    </header>
  );
};

export default Header;
