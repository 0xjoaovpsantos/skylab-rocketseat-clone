import React from 'react';

import { FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Content, Form } from './styles';

import BackgroundImg from '../../components/BackgroundImg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const SignUp: React.FC = () => {
  return (
    <BackgroundImg>
      <Content>
        <h1>Realizar cadastro</h1>
        <Form>
          <Input Icon={FiMail} description="Digite seu e-mail" />
          <Input Icon={FiUser} description="Digite seu nome" />
          <Input Icon={FiLock} description="Sua senha secreta" />
          <Input Icon={FiLock} description="Confirme sua senha secreta" />
          <Button description="Cadastrar" />
        </Form>
        <small>
          <Link to="/">Voltar</Link>
        </small>
        <Footer />
      </Content>
    </BackgroundImg>
  );
};

export default SignUp;
