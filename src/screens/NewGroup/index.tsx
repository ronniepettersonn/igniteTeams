import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import React, { useState } from "react";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { GroupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
    const [group, setGroup] = useState('')

    const navigation = useNavigation()

    async function handleNew() {
        try {
            if (group.trim().length === 0) {
                return Alert.alert('Novo Grupo', 'Informe o nome da turma!')
            }

            await GroupCreate(group)
            navigation.navigate('players', { group })
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message)
            } else {
                Alert.alert('Novo Grupo', "Nao foi possivel criar um grupo.")
                console.log(error)
            }
        }
    }
    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />

                <Highlight
                    title="Nova turma"
                    subtitle="crie a turma para adicionar pessoas"
                />

                <Input
                    placeholder="Nome da Turma"
                    onChangeText={setGroup}
                />

                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}