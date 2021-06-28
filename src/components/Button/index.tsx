import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// ao se criar uma interface vazia, que não vai ser sobrescrito nada do ButtonHTMLAttributes
// nem criar novas propriedades, a interface pode ser convertida em um TYPE
// TYPE = forma de criar tipagens de objetos qu são compostas de outras tipagens
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    // o type do button não permite vazio
    // se por um acaso o meu "props" enviar novamente o type, ele será sobrescrito
    // o React controla isso, se tiver dois types iguais ficará só o último

    // a props children pega o conteúdo do button
    <Container type="button" {...rest}>
        {children}
    </Container>
);

export default Button;
