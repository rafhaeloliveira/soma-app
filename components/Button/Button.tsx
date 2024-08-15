import styled from "styled-components/native";
import { ButtonProps, Size, VariantTypes } from "./Button.model";
import { theme } from "@/config/Theme";
import { ColorTypes } from "@/models/colors.model";

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

    border-color: ${theme.primary?.main};
`;

const TextStyle = `
    padding: 15px 25px;
`;

const ButtonBase = styled.TouchableOpacity<Omit<ButtonProps, "label">>`
    ${props => variant({
        contained: ContainedStyle,
        outlined:OutlinedStyle,
        text: TextStyle,
    }, props.variant)};
    ${props => `
        width: ${props.width || "auto"};
    `}

    ${props => props.size ? `
        padding: 7px 10px;
    ` : ''}

    ${props => `
        border-color: ${theme[props.color || 'primary']?.main};
        ${props.variant === "contained" ? `background-color: ${theme[props.color || 'primary']?.main};` : '' }
    `}
`

const TextBase = styled.Text<{ size?: Size, color: ColorTypes, variant: VariantTypes }>`
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;

    ${props => props.variant === "contained" 
        ? `color: ${theme[props.color]?.text};`
        : `color: ${theme[props.color]?.main};`
    }

    ${props => props.size === "small" ? `
        font-size: 12px;
    ` : ''}
`;

function Button({
    label,
    variant = 'text',
    color = 'primary',
    activeOpacity = 0.7,
    size,
    ...props
}: ButtonProps) {
    return (
        <ButtonBase 
            variant={variant}
            activeOpacity={activeOpacity}
            size={size}
            color={color}
            {...props}
        >
            <TextBase size={size} color={color} variant={variant}>{label}</TextBase>
        </ButtonBase>
    )
};

export { Button };