import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = {
    title: string;
    type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    )
}