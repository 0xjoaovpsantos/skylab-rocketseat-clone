import React, { useState, useCallback } from 'react';

import { Container } from './styles';

interface InputProps {
  description: string;
  Icon: React.ComponentType;
}

const Input: React.FC<InputProps> = ({ description, Icon }) => {
  const [isFocused, setFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      {<Icon />}
      <input
        placeholder={description}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export default Input;
