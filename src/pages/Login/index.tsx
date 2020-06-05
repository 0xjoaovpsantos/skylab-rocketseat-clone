import React from 'react';

import { Content, Form, NoAccount, ContainerStyle } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'react-router-dom';

import BackgroundImg from '../../components/BackgroundImg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import skylabImg from '../../assets/login/skylab_img.svg';

const Login = () => {
  return (
    <BackgroundImg>
      <Content>
        <img src={skylabImg} alt="Login Skylab - Rocketseat" />
        <Form>
          <Input Icon={FiMail} description="E-mail" />
          <Input Icon={FiLock} description="Senha" />
          <a href="#">Esqueci minha senha</a>
          <Link to="/dashboard">
            <Button description="Entrar" />
          </Link>
          <NoAccount>
            Não tem uma conta? <Link to="/signup">Registre-se</Link>
          </NoAccount>
          <ContainerStyle>ou</ContainerStyle>
          <Button description="Github" icon={GoMarkGithub} />
        </Form>
        <Footer />
      </Content>
    </BackgroundImg>
  );
};

export default Login;
