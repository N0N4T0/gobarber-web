import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SigIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Faça o seu login</h1>

                <Input name="email" icon={FiMail} placeholder="E-mail" />

                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />

                <Button type="submit">Entrar</Button>

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
