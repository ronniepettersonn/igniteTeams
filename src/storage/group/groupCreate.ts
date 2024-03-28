import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function GroupCreate(newGroup: string) {
    try {
        const storagedGroups = await groupsGetAll()

        const groupAlreadyExists = storagedGroups.includes(newGroup)

        if(groupAlreadyExists) {
            throw new AppError('Ja existe um grupo cadastrado com esse nome') 
        }

        const storage = JSON.stringify([...storagedGroups, newGroup])

        await AsyncStorage.setItem(GROUP_COLLECTION, storage)
    } catch (error) {
        throw error;
    }
}