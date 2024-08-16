import { BagCard } from "@/components/BagCard";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Divider } from "@/components/Divider";
import { changeBagSize, removeFromBag } from "@/redux/actions/bag.actions";
import { useEffect, useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

const FixedContainer = styled.View`
    width: 100%;

    padding: 10px;

    position: absolute;
    bottom: 0;
`

export default function BagScreen() {
    const dispatch = useDispatch();

    const { bag } = useSelector((state) => state.bag);

    const handleQuantity = (product, quantity) => {
        const payload = {
            ...product,
            quantity: quantity
        }

        dispatch(changeBagSize(payload));
    }

    const handleRemove = (product) => {
        dispatch(removeFromBag(product));
    }

    return (
        <Container fullWidth fullHeight>
            <ScrollView>
                <View style={{ marginTop: 20 }}>
                    <Divider color="gray" />
                </View>
                <View style={{ gap: 20, padding: 20 }}>
                    {bag?.length == 0 && (
                        <Text>Mochila vazia!</Text>
                    )}

                    {bag?.map(item => (
                        <>
                            <BagCard 
                                title={item.title}
                                productId={item.id}
                                price={item.price}
                                imageUrl={item.image}
                                size={item.size}
                                quantity={item.quantity || 1}
                                handleRemove={() => handleRemove(item.id)}
                                onQuantityChange={(quantity) => handleQuantity(item, quantity)}
                            />

                            <Divider color="gray" />
                        </>
                    ))}
                </View>

            </ScrollView>
            <FixedContainer>
                <Button label={"Finalizar compra"} variant={"contained"} />
            </FixedContainer>
        </Container>
    )
}