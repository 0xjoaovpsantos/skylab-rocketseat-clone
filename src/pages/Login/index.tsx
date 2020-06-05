import React from 'react';

import {
  Container,
  Content,
  Form,
  NoAccount,
  Footer,
  ContainerStyle,
} from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import { GoMarkGithub } from 'react-icons/go';

import Input from '../../components/Input';
import Button from '../../components/Button';

import skylabImg from '../../assets/login/skylab_img.svg';

const Login = () => {
  return (
    <Container>
      <Content>
        <img src={skylabImg} alt="Login Skylab - Rocketseat" />
        <Form>
          <Input Icon={FiMail} description="E-mail" />
          <Input Icon={FiLock} description="Senha" />
          <a href="#">Esqueci minha senha</a>
          <Button description="Entrar" />
          <NoAccount>
            Não tem uma conta? <a href="#">Registre-se</a>
          </NoAccount>
          <ContainerStyle>ou</ContainerStyle>
          <Button description="Github" icon={GoMarkGithub} />
        </Form>
        <Footer>
          <small>Skylab versão 1.1.02</small>
          <small>Rocketseat 2020 © Todos os direitos reservados</small>
        </Footer>
      </Content>
    </Container>
  );
};

export default Login;
