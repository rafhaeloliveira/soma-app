import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { router } from "expo-router";
import { View } from "react-native";
import styled from "styled-components/native";

const BackgroundImage = styled.Image`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`;

export default function HomeScreen() {
    const handleOnClick = () => {
        router.push("/home");
    }

    return (
        <Container 
            fullWidth
            fullHeight
            direction="column"
            alignItems="center"
            justifyContent="flex-end"
        >
            <BackgroundImage source={require("@/assets/images/bg-home.jpg")} />
            <View style={{ width: "100%", padding: 20 }}>
                <Button label={`Acessar`}  variant="contained" width="100%" color="secondary" activeOpacity={0.8} onPress={handleOnClick}/>
            </View>
        </Container>
    )
}
