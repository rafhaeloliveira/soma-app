import { ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Container } from "@/components/Container";
import { HighlightCard } from "@/components/HighlightCard";
import { Button } from "@/components/Button";
import { useState } from "react";

type Sizes = "P" | "M" | "G" | "GG";

const sizeList: {id: Sizes, label: string, available: boolean}[] = [
    { id: "P", label: "P", available: false },
    { id: "M", label: "M", available: true },
    { id: "G", label: "G", available: true },
    { id: "GG", label: "GG", available: false },
]

export default function ProductPage() {
    const { id } = useLocalSearchParams();

    const [selectedSize, setSize] = useState<Sizes>("P");

    const handleSelectSize = (size: Sizes) => {
        setSize(size);
    }

    return (
        <Container fullWidth fullHeight>
            <ScrollView>
                <HighlightCard
                    imageUri="https://lojafarm.vteximg.com.br/arquivos/ids/3279159-640-960/328440_07071_1-REGATA-QUADRADA-ESTAMPADA-FARM-RIO.jpg?v=638416136031500000"
                    title="Roupa tal"
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
                    <Button label="Comprar" variant="contained" color="primary" />
                </View>
            </ScrollView>
        </Container>
    )
}