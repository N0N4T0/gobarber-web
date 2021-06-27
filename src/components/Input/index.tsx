import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    // React.ComponentType = recebe o componente como propriedade
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
    <Container>
        {/* Verificação, se o icon existir mostra */}
        {Icon && <Icon size={20} />}
        <input {...rest} />
    </Container>
);

export default Input;

// O IconBaseProps são as propriedades que o ícone pode ter
