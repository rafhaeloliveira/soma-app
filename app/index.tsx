import { Button } from "@/components/Button";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled(View)`
    widht: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
    position: relative;
`

const BackgroundImage = styled.Image`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`;

export default function HomeScreen() {
    return (
        <Container>
            <BackgroundImage source={require("@/assets/images/bg-home.jpg")} />
            <Text>Teste 123</Text>
            <Button label="Contained" variant="contained" />
            <Button label="Outlined" variant="outlined" />
            <Button label="Text" variant="text" />
        </Container>
    )
}
