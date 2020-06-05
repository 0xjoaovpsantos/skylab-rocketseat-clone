import React from 'react';

import skylabImg from '../../assets/login/skylab_img.svg';

const Login = () => {
  return (
    <div>
      <div>
        <img src={skylabImg} alt="Logo do Skylab, plataforma da Rocketseat" />
        <input />
        <input />
        <a href="#">Esqueci minha senha</a>
        <button>Entrar</button>
        <div>
          Não tem uma conta? <a href="#">Registre-se</a>
        </div>
        <div>ou</div>
        <button>GitHub</button>
        <div>
          <small>Skylab versão 1.1.02</small>
          <small>Rocketseat 2020 © Todos os direitos reservados</small>
        </div>
      </div>
    </div>
  );
};

export default Login;
