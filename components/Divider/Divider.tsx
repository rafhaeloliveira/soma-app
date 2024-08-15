import { View } from "react-native"
import styled from "styled-components/native"

const DividerBase = styled.View<{ color: string }>`
    width: 100%;
    height: 1px;
    background-color: ${props => props.color};

    margin-top: 10px;
    margin-bottom: 10px;
`

export const Divider = ({ color = "black" }) => {
    return (
        <DividerBase color={color} />
    )
}