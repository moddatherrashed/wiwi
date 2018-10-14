import { AsyncStorage } from 'react-native'
const pointerName = 'FavoritesItems'

let AsyncStorageController = {
    setItem: async (value) => {
        try {
            const retrievedItems = await AsyncStorage.getItem(pointerName);
            if (retrievedItems === null) {
                await AsyncStorage.setItem(pointerName, JSON.stringify([value]))
            } else {
                const item = JSON.parse(retrievedItems)
                item.push(value)
                await AsyncStorage.setItem(pointerName, JSON.stringify(item))
            }

        } catch (error) {
            alert("Error saving data === " + error)
        }
    },
    getItems: async () => {
        try {
            return JSON.parse(await AsyncStorage.getItem(pointerName))
        } catch (error) {
            alert("Error retrieving favorite items === " + error);
        }
    },
    deleteItem: (itemName) => {
        let favoritesList = AsyncStorageController.getItems()
        if (favoritesList !== null) {
            let index = favoritesList.findIndex(x => x.name == itemName);
            favoritesList.splice(index, 1)
            AsyncStorageController.setItem(JSON.stringify(favoritesList))
        }
    },
    isFavorite: async (itemId, itemName, catagoryName, resturantName) => {
        let favoritesList = JSON.parse(await AsyncStorage.getItem(pointerName))
        //alert(favoritesList)
        if (favoritesList === null) {
            // alert('inside isFavorite')
            return false
        } else {
            for (let i = 0; i < favoritesList.length; i++) {
                if (favoritesList[i].id === itemId
                    && favoritesList[i].name === itemName
                    && favoritesList[i].resturantName === resturantName
                    && favoritesList[i].catagoryName === catagoryName) {
                    alert(catagoryName)
                    return true
                }

            }
        }
        return false
    }
}

module.exports = AsyncStorageController