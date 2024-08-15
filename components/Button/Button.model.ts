import { ColorTypes } from "@/models/colors.model"
import { TouchableOpacity } from "react-native"

export type VariantTypes = "outlined" | "contained" | "text"

export type Size = "small"

export interface ButtonProps extends React.ComponentPropsWithRef<typeof TouchableOpacity> {
    label: string,
    variant: VariantTypes,
    color?: ColorTypes,
    width?: string
    size?: Size
}