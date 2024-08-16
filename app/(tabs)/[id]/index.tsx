import { ScrollView, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Container } from "@/components/Container";
import { HighlightCard } from "@/components/HighlightCard";
import { Button } from "@/components/Button";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBag } from "@/redux/actions/bag.actions";
import { useLoading } from "@/config/context/LoadingContext";

type Sizes = "P" | "M" | "G" | "GG";

const sizeList: {id: Sizes, label: string, available: boolean}[] = [
    { id: "P", label: "P", available: false },
    { id: "M", label: "M", available: true },
    { id: "G", label: "G", available: true },
    { id: "GG", label: "GG", available: false },
]

export default function ProductPage() {
    const { id } = useLocalSearchParams();
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
    const { loading } = useSelector((state) => state.bag);

    const { showLoading, hideLoading } = useLoading()

    const product = products.find(item => item.id === id);

    const [selectedSize, setSize] = useState<Sizes>("P");

    useEffect(() => {
        if(loading) {
            showLoading();
        } else {
            hideLoading();
        }
    }, [loading])

    const handleSelectSize = (size: Sizes) => {      
        setSize(size);
    }

    const handleBuy = () => {
        const payload = {
            ...product,
            size: selectedSize,
            quantity: 1
        }

        dispatch(addToBag(payload));

        router.push("/bag");
    }

    return (
        <Container fullWidth fullHeight>
            <ScrollView>
                <HighlightCard
                    imageUri={product.image}
                    title={product.title}
                />

                <View style={{ width: "80%", padding: 10 }}>
                    <Container fullWidth direction="row" justifyContent="space-between">
                        {sizeList?.map(size => (
                            <Button 
                                key={`btn-size-${size.id}`}
                                label={size.label}
                                variant="contained"
                                color={selectedSize === size.id ? "primary" : "secondary"}
                                onPress={() => handleSelectSize(size.id)}
                            />    
                        ))}
                    </Container>                    
                </View>

                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Descrição: </Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit in mauris ac suscipit. Maecenas facilisis non mauris at dictum. Donec eget sapien erat. In at quam nec nunc tincidunt consequat. Morbi sodales ipsum sed diam pharetra, eu finibus purus tristique. Nullam nec turpis ac nulla luctus ullamcorper eu a sem. Fusce dictum facilisis odio, sed ultrices magna tempor in. Morbi convallis leo tellus, ut feugiat est rhoncus eu. Vestibulum eleifend nibh in quam volutpat, eget ultrices felis faucibus. Nulla ultricies felis non sollicitudin ultrices. Nulla id facilisis orci, dignissim interdum orci.
                    </Text>
                </View>

                <View style={{ padding: 10 }}>
                    <Button label="Comprar" variant="contained" color="primary" onPress={handleBuy} />
                </View>
            </ScrollView>
        </Container>
    )
}