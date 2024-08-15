import { CSSProperties, ReactNode } from "react";
import styled from "styled-components/native"

interface ViewBaseProps {
    fullWidth?: boolean
    fullHeight?: boolean
    direction?: CSSProperties['flexDirection']
    justifyContent?: CSSProperties['justifyContent']
    justifyItems?: CSSProperties['justifyItems']
    alignItems?: CSSProperties['alignItems']
    gap?: CSSProperties['gap']
}

const ViewBase = styled.View<ViewBaseProps>`
    ${props => `
        ${props.fullWidth ? 'width: 100%;' : ''}
        ${props.fullHeight ? 'height: 100%;' : ''}
        ${props.direction ? `flex-direction: ${props.direction};` : ''}
        ${props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
        ${props.justifyItems ? `justify-items: ${props.justifyItems};` : ''}
        ${props.alignItems ? `alignItems: ${props.alignItems};` : ''}
        ${props.gap ? `gap: ${props.gap}px;` : ''}
    `}
`;

type ContainerProps = {
    children: ReactNode;
} & React.ComponentProps<typeof ViewBase>;

export const Container = (
    {
        children,
        ...props
    }: ContainerProps
) => {
    return (
        <ViewBase {...props}>
            {children}
        </ViewBase>
    )
}