import { Container } from "@/components/Container";
import { createContext, ReactElement, useContext, useState } from "react"
import { ActivityIndicator, Modal } from "react-native";
import styled from "styled-components/native";
import { theme } from "../Theme";

interface Props {
    children?: ReactElement
}

interface ContextProps {
    isLoading: boolean
    showLoading: () => void,
    hideLoading: () => void
}

const LoadingContext = createContext<ContextProps>({
    isLoading: false,
    showLoading: () => null,
    hideLoading: () => null
});

export const LoadingProvider = ({ children }: Props) => {
    const [isLoading, setIsLoading] = useState(false);

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => setIsLoading(false);

    return (
        <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
            {children}

            <Modal transparent animationType="fade" visible={isLoading}>
                <Container style={{ backgroundColor: "white" }} fullWidth fullHeight alignItems="center" justifyContent="center">
                    <ActivityIndicator size="large" color={theme.primary?.main} />
                </Container>
            </Modal>
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext);