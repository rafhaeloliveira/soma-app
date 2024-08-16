import styled from "styled-components/native"
import { Container } from "../Container";
import { Entypo } from "@expo/vector-icons";
import { calcScreenSize } from "@/utils/calcScreenSize";

interface Props {
    imageUri: string
    title?: string
    callToAction?: string
}

const ViewBase = styled.View`
    width: 100%;
    height: ${calcScreenSize(70).height}px;
    position: relative;
`

const ImageBase = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
`

const Title = styled.Text`
  color: ${props => props.theme.primary.text};

  font-size: 28px;
  font-weight: bold;

  position: relative;
  z-index: 1;

  margin-left: 20px;
`;

const Subtitle = styled.Text`
    color: ${props => props.theme.primary.text};

  font-size: 16px;

  position: relative;
  z-index: 1;

  margin-bottom: 20px;
  margin-left: 20px;

  text-transform: uppercase;
`

export const HighlightCard = ({
    imageUri,
    title,
    callToAction
}: Props) => {
    return (
        <ViewBase>
            <Container fullWidth fullHeight direction="column" justifyContent="flex-end">
                <ImageBase source={{ uri: imageUri }} />
                <Title>{title}</Title>
                {callToAction && (
                    <Subtitle>
                        {callToAction}
                        <Entypo name="chevron-right" size={18} color="white" />
                    </Subtitle>
                )}
            </Container>
        </ViewBase>
    )
} 