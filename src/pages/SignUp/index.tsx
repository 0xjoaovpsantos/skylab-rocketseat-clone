import React from 'react';

import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Container } from './styles';

import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const SignUp: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Realizar cadastro</h1>
        <Input Icon={FiMail} description="Digite seu e-mail" />
        <Input Icon={FiUser} description="Digite seu nome" />
        <Input Icon={FiLock} description="Sua senha secreta" />
        <Input Icon={FiLock} description="Confirme sua senha secreta" />
        <Button description="Cadastrar" />
        <small>
          <Link to="/">Voltar</Link>
        </small>
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
