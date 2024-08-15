import { Text } from "react-native"
import { Container } from "../Container"
import styled from "styled-components/native"
import { Feather } from "@expo/vector-icons";

const QuantityText = styled.Text`
    font-size: 18px;
    padding: 5px 10px;
`;

const ActionButton = styled.TouchableOpacity`

`;

export const MinMaxInput = () => {
    return (
        <Container style={{ marginLeft: "20%" }} direction="row" alignItems="center">
            <ActionButton>
                <Feather name="minus-circle" size={24} color="black" />
            </ActionButton>
            <QuantityText>1</QuantityText>
            <ActionButton>
                <Feather name="plus-circle" size={24} color="black" />
            </ActionButton>
        </Container>
    )
}