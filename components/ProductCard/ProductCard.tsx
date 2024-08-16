import { calcWidth } from "@/utils/calcWidth"
import { formatToCurrency } from "@/utils/formatToCurrency"
import { Text, View } from "react-native"
import styled from "styled-components/native"
import { Button } from "../Button"
import { Container } from "../Container"
import { router } from "expo-router"

interface Props {
    title: string
    price?: number
    callToAction?: string
    productId: string
    imageUrl: string
}

const ViewBase = styled.View`
    width: ${calcWidth(50, 30)};
`

const ProductImage = styled.Image`
    width: 100%;
    height: 200px;
`

const Title = styled.Text`
    width: 80px;
    font-size: 16px;
`

const Price = styled.Text`
    font-size: 14px;
`

export const ProductCard = ({
    title,
    price,
    productId,
    imageUrl
}: Props) => {
    const handleBuy = () => {
        return (
            router.push(`/${productId}`)
        )
    }

    return (
        <ViewBase>
            <ProductImage source={{ uri: imageUrl }}/>
            <Container fullWidth direction="row" alignItems="center" justifyContent="space-between">
                <View style={{ marginTop: 10 }}>
                    <Title>{title}</Title>
                    {price && (
                        <Price>{formatToCurrency(price)}</Price>
                    )}
                </View>

                <Button variant="outlined" label="Comprar" size="small" color="primary" onPress={handleBuy} />
            </Container>
        </ViewBase>
    )
}