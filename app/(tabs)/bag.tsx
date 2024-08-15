import { BagCard } from "@/components/BagCard";
import { Container } from "@/components/Container";
import { Divider } from "@/components/Divider";
import { ScrollView, View } from "react-native";

export default function BagScreen() {

    const handleQuantity = ({ productId }) => {
        console.log(productId)
    }

    return (
        <Container fullWidth fullHeight>
            <ScrollView>
                <View style={{ marginTop: 20 }}>
                    <Divider color="gray" />
                </View>
                <View style={{ padding: 20 }}>
                    <BagCard 
                        title={"Aquela roupa"} 
                        productId={"123"}
                        price={666}
                        size={"P"}
                        onQuantityChange={() => handleQuantity({productId: 1})}
                    />
                </View>
            </ScrollView>
        </Container>
    )
}