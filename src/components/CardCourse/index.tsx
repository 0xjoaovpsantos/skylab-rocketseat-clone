import React from 'react';

import { Container } from './styles';

interface CardCourseProps {
  number: string;
  logo: string;
  description_highlighted: string;
  description_not_highlighted: string;
  color_theme: string;
}

const CardCourse: React.FC<CardCourseProps> = ({
  number,
  logo,
  description_highlighted,
  description_not_highlighted,
  color_theme,
}) => {
  return (
    <Container color_theme={color_theme}>
      <span>{number}</span>
      <div>
        <img src={logo} alt="Starter Cursos" />
      </div>
      <p>
        <strong>{description_highlighted}</strong> {description_not_highlighted}
      </p>
    </Container>
  );
};

export default CardCourse;
