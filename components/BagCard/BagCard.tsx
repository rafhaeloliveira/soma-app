import { View } from "react-native"
import { Container } from "../Container"
import styled from "styled-components/native"
import { formatToCurrency } from "@/utils/formatToCurrency"
import { MinMaxInput } from "../MinMaxInput"
import { Button } from "../Button"

type Sizes = "P" | "M" | "G" | "GG";

interface Props {
    title: string
    productId: string
    price: number
    size: Sizes
    imageUrl: string
    quantity: number
    handleRemove?: () => void
    onQuantityChange: (val: number) => void
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
    imageUrl,
    handleRemove,
    onQuantityChange,
    quantity,
    size
}: Props) => {
    return (
        <Container fullWidth direction="row">
            <View>
                <ImageBagCard source={{ uri: imageUrl }} />
            </View>
            <View style={{ paddingLeft: 10 }}>
                <Title>{title}</Title>
                <Subtitle>Ref: {productId}</Subtitle>
                <SizeLabel>{size}</SizeLabel>
                <Container style={{ marginTop: "auto" }} direction="row" justifyContent="space-between">
                    <Price>{formatToCurrency(price)}</Price>
                    <MinMaxInput quantity={quantity} handleChangeSize={onQuantityChange} />
                </Container>
                <View>
                    <Button label="Remover" variant="contained" color="primary" size="small" onPress={handleRemove} />
                </View>
            </View>
        </Container>
    )
}