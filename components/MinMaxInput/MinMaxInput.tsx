import { Text, TouchableOpacity } from "react-native"
import { Container } from "../Container"
import styled from "styled-components/native"
import { Feather } from "@expo/vector-icons";

const QuantityText = styled.Text`
    font-size: 18px;
    padding: 5px 10px;
`;

export const MinMaxInput = ({ quantity, handleChangeSize }: { quantity: number, handleChangeSize: (val: number) => void }) => {
    return (
        <Container style={{ marginLeft: "20%" }} direction="row" alignItems="center">
            <TouchableOpacity onPress={() => handleChangeSize(quantity - 1)}>
                <Feather name="minus-circle" size={24} color="black" />
            </TouchableOpacity>
            <QuantityText>{quantity}</QuantityText>
            <TouchableOpacity onPress={() => handleChangeSize(quantity + 1)}>
                <Feather name="plus-circle" size={24} color="black" />
            </TouchableOpacity>
        </Container>
    )
}