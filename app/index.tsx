import { Button } from "@/components/Button";
import { Text, View } from "react-native";
import styled from "styled-components";

const Container = styled(View)`
    widht: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function HomeScreen() {
    return (
        <Container>
            <Button label="Contained" variant="contained" />
            <Button label="Outlined" variant="outlined" />
            <Button label="Text" variant="text" />
        </Container>
    )
}
