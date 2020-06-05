import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  description: string;
  icon?: React.ComponentType;
}

const Button: React.FC<ButtonProps> = ({ description, icon: Icon }) => {
  return (
    <Container>
      {Icon && <Icon />}
      {description}
    </Container>
  );
};

export default Button;
