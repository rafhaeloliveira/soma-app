import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ButtonProps, VariantTypes } from "./Button.model";

const variant = (variants: any, key: VariantTypes) => {
    return variants[key];
}

const ContainedStyle = `
    background-color: #FFFFFF;
    padding: 15px 25px;
    border-radius: 50px;
`;

const OutlinedStyle = `
    border: 2px solid #FFFFFF;
    border-radius: 50px;
    padding: 15px 25px;
`;

const TextStyle = `
    padding: 15px 25px;
`;

const ButtonBase = styled.TouchableOpacity<{ variant: VariantTypes }>`
    ${props => variant({
        contained: ContainedStyle,
        outlined:OutlinedStyle,
        text: TextStyle,
    }, props.variant)}
`

const TextBase = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
`;

function Button({
    label,
    variant = 'text',
    color = 'primary',
    activeOpacity = 0.7,
    ...props
}: ButtonProps) {
    return (
        <ButtonBase variant={variant}  activeOpacity={activeOpacity} {...props}>
            <TextBase>{label}</TextBase>
        </ButtonBase>
    )
};

export { Button };