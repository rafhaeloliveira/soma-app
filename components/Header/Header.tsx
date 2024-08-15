import { calcScreenSize } from "@/utils/calcScreenSize"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Container } from "../Container"
import { useNavigation } from "expo-router"
import { theme } from "@/config/Theme"

const ViewBase = styled.View<{ fixed: boolean }>`
    width: 100%;
    ${props => props.fixed ? `position: absolute;` : 'height: 50px;'}
    top: ${calcScreenSize(3).height}px;
    padding: 10px 20px;
`

export const Header = ({ darkColor = false, fixed = false  }) => {
    const { goBack } = useNavigation();

    const iconColor = darkColor ? theme.primary?.main : theme.primary?.text;

    return (
        <ViewBase fixed={fixed}>
            <Container fullWidth fullHeight direction="row" justifyContent="space-between">
                <TouchableOpacity onPress={goBack}>
                    <Ionicons name="arrow-back" size={24} color={iconColor} />
                </TouchableOpacity>

                <Container direction="row" gap="20">
                    <TouchableOpacity>
                        <Ionicons name="filter-sharp" size={24} color={iconColor} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <FontAwesome name="search" size={24} color={iconColor} />
                    </TouchableOpacity>
                </Container>
            </Container>
        </ViewBase>
    )
}