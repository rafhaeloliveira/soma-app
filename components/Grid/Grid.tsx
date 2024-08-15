import { ReactNode } from "react"
import styled from "styled-components/native"

interface Props {
    children: ReactNode
}

const ViewBase = styled.View`
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 20px;

    justify-content: space-between;
    gap: 20px;
`

export const Grid = ({ children }: Props) => {
    return (
        <ViewBase>
            {children}
        </ViewBase>
    )
}