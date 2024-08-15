import { ColorTypes } from "@/models/colors.model";

type ThemeColor = {
    [key in ColorTypes]?: {
        main: string;
        text: string;
    };
};

const lightTheme = {
    primary: {
        main: "#17181A",
        text: "#FFFFFF",
    },
    secondary: {
        main: "#FFFFFF",
        text: "#17181A",
    },
    background: {
        main: "#D4D4D4",
    },
    white: "#FFFFFF",
    highlight: "#EA9F5A",
}

const darkTheme = {
    background: {
        main: "#2F3641"
    },
    primary: {
        main: "#232528",
        text: "#FFFFFF",
    },
    secondary: {
        main: "#FFFFFF",
        text: "232528",
    },
}

const theme: ThemeColor = lightTheme;

export { theme };