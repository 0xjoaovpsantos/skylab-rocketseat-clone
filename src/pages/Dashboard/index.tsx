import React from 'react';

import starterCursosImg from '../../assets/dashboard/rocket_purple.svg';
import launchBaseImg from '../../assets/dashboard/rocket_launchbase.svg';
import gostackImg from '../../assets/dashboard/rocket_gostack.svg';

import { Content } from './styles';

import Header from '../../components/Header';
import BackgroundImg from '../../components/BackgroundImg';
import CardCourse from '../../components/CardCourse';

const Dashboard: React.FC = () => {
  return (
    <BackgroundImg>
      <Header />
      <Content>
        <div>
          <CardCourse
            number="01"
            logo={starterCursosImg}
            description_highlighted="Torne-se um programador desejado"
            description_not_highlighted="no mercado com esses
        cursos gratuitos"
            color_theme="#7159c1"
          />
          <CardCourse
            number="02"
            logo={launchBaseImg}
            description_highlighted="Domine programação do zero"
            description_not_highlighted="e tenha acesso às
            melhores oportunidades do mercado"
            color_theme="#FD951F"
          />
          <CardCourse
            number="03"
            logo={gostackImg}
            description_highlighted="Treinamento imersivo"
            description_not_highlighted="nas tecnologias mais
            modernas de desenvolvimento web e mobile"
            color_theme="#04D361"
          />
        </div>
      </Content>
    </BackgroundImg>
  );
};

export default Dashboard;
