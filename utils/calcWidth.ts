import { Dimensions } from "react-native";

export const calcWidth = (percentage: number, size: number) => {
    const { width } = Dimensions.get('window');

    return (width * (percentage / 100)) - size;
}