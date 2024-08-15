import { Dimensions } from "react-native";

export const calcScreenSize = (percentage: number) => {
    const { width, height } = Dimensions.get('window');

    return {
        width: width * (percentage / 100),
        height: height * (percentage / 100),
    };
};
