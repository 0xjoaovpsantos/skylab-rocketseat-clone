import React from 'react';

import { Container } from './styles';

const BackgroundImg: React.FC = (props) => {
  return <Container>{props.children}</Container>;
};

export default BackgroundImg;
