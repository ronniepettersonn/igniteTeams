import { TextInputProps } from "react-native";
import { Container } from "./styles";

import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInputProps>
}

export function Input({ inputRef, ...rest }: Props) {
    const { COLORS } = useTheme()

    return (
        <Container
            ref={inputRef}
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    )
}