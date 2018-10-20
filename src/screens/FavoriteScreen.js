import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Dimensions, FlatList, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'
import AsyncStorageController from '../controllers/AsyncStorageController'
import { NavigationEvents } from 'react-navigation'
const viewportWidth = Dimensions.get('window').width

class FavoriteScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritesList: [],
            resturantsList: []
        }
    }

    removeDuplicates = (myArr, prop) => {
        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }


    async  componentDidMount() {
        try {
            await AsyncStorage.getItem('FavoritesItems').then((value) => {
                let values = JSON.parse(value)

                let filterdValues = []
                let idCounter = 0
                for (let i of values) {

                    filterdValues.push({ id: idCounter, resturantName: i.resturantName, resturantImage: i.resturantImage, items: { id: idCounter, itemName: i.name, itemImg: i.image } })
                    idCounter++
                }

                this.setState({
                    resturantsList: this.removeDuplicates(filterdValues, 'resturantName'),
                    favoritesList: values
                })
                alert(JSON.stringify(filterdValues))
            })
        } catch (error) {
            alert("Error retrieving favorite items === " + error);
        }
    }
    render() {
        return (
            <ScrollView style={styles.screenStyle}>
                <NavigationEvents
                    onWillFocus={async () => {
                        try {
                            await AsyncStorage.getItem('FavoritesItems').then((value) => {
                                let values = JSON.parse(value)

                                let filterdValues = []
                                let idCounter = 0
                                for (let i of values) {

                                    filterdValues.push({ id: idCounter, resturantName: i.resturantName, resturantImage: i.resturantImage, items: { id: idCounter, itemName: i.name, itemImg: i.image } })
                                    idCounter++
                                }

                                this.setState({
                                    resturantsList: this.removeDuplicates(filterdValues, 'resturantName'),
                                    favoritesList: values
                                })
                                //alert(JSON.stringify(filterdValues))
                            })
                        } catch (error) {
                            alert("Error retrieving favorite items === " + error);
                        }
                    }}
                />
                <FlatList
                    contentContainerStyle={styles.flatListConatinerStyle}
                    data={this.state.resturantsList}
                    keyExtractor={item => (item.id).toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                for (let i of this.state.favoritesList) {
                                    if (item.resturantName === i.resturantName) {
                                        //navigate item.items to the next screen to view it 
                                    }
                                }
                            }}
                            style={styles.itemMainContainerStyle}>
                            <View style={styles.itemContainerStyle}>
                                <View style={styles.itemImageContainerStyle}>
                                    <Image
                                        style={styles.itemImageStyle}
                                        source={{ uri: item.resturantImage }}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View style={styles.itemTextContainerStyle}>
                                    <Text style={styles.itemTextStyle}>{item.resturantName}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    screenStyle: {
        flex: 3,
        backgroundColor: 'white'
    },
    flatListConatinerStyle: {
        padding: 10,
        flex: 2
    },
    itemMainContainerStyle: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        margin: 5,
        elevation: 1,
        shadowOffset: { height: 0, width: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
    itemContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 4
    },
    itemImageContainerStyle: {
        padding: 6,
        flex: 2
    },
    itemImageStyle: {
        height: viewportWidth * 0.21,
        width: viewportWidth * 0.21
    },
    itemTextContainerStyle: {
        padding: 6,
        flex: 2
    },
    itemTextStyle: {
        color: 'black',
        marginLeft: 12,
        marginTop: 10,
        marginBottom: 2,
        fontWeight: '700',
        fontSize: 20
    }
})

export default FavoriteScreen