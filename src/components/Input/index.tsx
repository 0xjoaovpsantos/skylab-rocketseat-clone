import React from 'react';

import { Container } from './styles';

interface InputProps {
  description: string;
  Icon: React.ComponentType;
}

const Input: React.FC<InputProps> = ({ description, Icon }) => {
  return (
    <Container>
      {<Icon />}
      <input placeholder={description} />
    </Container>
  );
};

export default Input;
