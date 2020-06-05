import React from 'react';

import starterCursosImg from '../../assets/dashboard/rocket_purple.svg';
import launchBaseImg from '../../assets/dashboard/rocket_launchbase.svg';
import gostackImg from '../../assets/dashboard/rocket_gostack.svg';

import Header from '../../components/Header';
import BackgroundImg from '../../components/BackgroundImg';

const Dashboard: React.FC = () => {
  return (
    <BackgroundImg>
      <Header />
      <div>
        <div>
          <div>
            <span>01</span>
            <div>
              <img src={starterCursosImg} alt="Starter Cursos" />
            </div>
            <p>
              <strong>Torne-se um programador desejado</strong> no mercado com
              esses cursos gratuitos
            </p>
          </div>
          <div>
            <span>02</span>
            <div>
              <img src={launchBaseImg} alt="LaunchBase" />
            </div>
            <p>
              <strong>Domine programação do zero</strong> e tenha acesso às
              melhores oportunidades do mercado
            </p>
          </div>
          <div>
            <span>03</span>
            <div>
              <img src={gostackImg} alt="GoStack" />
            </div>
            <p>
              <strong>Treinamento imersivo</strong> nas tecnologias mais
              modernas de desenvolvimento web e mobile
            </p>
          </div>
        </div>
      </div>
    </BackgroundImg>
  );
};

export default Dashboard;
