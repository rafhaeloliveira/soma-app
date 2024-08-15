import { View } from "react-native"
import { Container } from "../Container"
import styled from "styled-components/native"
import { formatToCurrency } from "@/utils/formatToCurrency"
import { MinMaxInput } from "../MinMaxInput"

type Sizes = "P" | "M" | "G" | "GG";

interface Props {
    title: string
    productId: string
    price: number
    size: Sizes
    onQuantityChange?: (val: string) => void
}

const ImageBagCard = styled.Image`
    width: 125px;
    height: 125px;
`

const Title = styled.Text`
    font-size: 21px;
    font-weight: bold;
`

const Subtitle = styled.Text`
    font-size: 14px;
    color: gray;
`
const SizeLabel = styled.Text`
    font-size: 14px;
    font-weight: bold;
`

const Price = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-top: auto;
`

export const BagCard = ({
    title,
    productId,
    price,
    size
}: Props) => {
    return (
        <Container fullWidth direction="row">
            <View>
                <ImageBagCard source={{ uri: "https://lojafarm.vteximg.com.br/arquivos/ids/3279159-640-960/328440_07071_1-REGATA-QUADRADA-ESTAMPADA-FARM-RIO.jpg?v=638416136031500000"}} />
            </View>
            <View style={{ paddingLeft: 10 }}>
                <Title>{title}</Title>
                <Subtitle>Ref: {productId}</Subtitle>
                <SizeLabel>{size}</SizeLabel>
                <Container style={{ marginTop: "auto" }} direction="row" justifyContent="space-between">
                    <Price>{formatToCurrency(price)}</Price>
                    <MinMaxInput />
                </Container>
            </View>
        </Container>
    )
}