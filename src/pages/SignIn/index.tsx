import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SigIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Faça o seu login</h1>

                <input placeholder="E-mail" />

                <input type="password" placeholder="Senha" />

                <button type="submit">Entrar</button>

                <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="create-account">
                <FiLogIn />
                Criar conta
            </a>
        </Content>

        <Background />
    </Container>
);

export default SigIn;