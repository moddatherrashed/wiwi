import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Dimensions, FlatList, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'
import { NavigationEvents } from 'react-navigation'
const viewportWidth = Dimensions.get('window').width

class FavoriteScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartList: [],
            resturantsList: [],
            itemsSingle: []
        }
    }

    removeDuplicates = (myArr, prop) => {
        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }


    async  componentDidMount() {
        try {
            await AsyncStorage.getItem('CartItems').then((value) => {
                let values = JSON.parse(value)

                let filterdValues = []
                let itemsSingle = []
                let idCounter = 0
                console.log(values)
                for (let i of values) {

                    filterdValues.push({
                        id: idCounter,
                        resturantName: i.resturantName,
                        resturantImage: i.resturantImage
                    })

                    itemsSingle.push({
                        id: idCounter,
                        itemName: i.name,
                        itemImg: i.image,
                        itemPrice: i.price,
                        resturnatName: i.resturantName
                    })
                    idCounter++
                }
                console.log(filterdValues)
                this.setState({
                    resturantsList: this.removeDuplicates(filterdValues, 'resturantName'),
                    cartList: values,
                    itemsSingle: itemsSingle
                })
                console.log(this.state.resturantsList)
            })
        } catch (error) {
            alert("Error retrieving favorite items === " + error);
        }
    }
    render() {
        return (
            <ScrollView style={styles.screenStyle}>
                <NavigationEvents
                    onWillFocus={
                        async () => {
                            try {
                                await AsyncStorage.getItem('CartItems').then((value) => {
                                    let values = JSON.parse(value)

                                    let filterdValues = []
                                    let itemsSingle = []
                                    let idCounter = 0
                                    console.log(values)
                                    for (let i of values) {

                                        filterdValues.push({
                                            id: idCounter,
                                            resturantName: i.resturantName,
                                            resturantImage: i.resturantImage
                                        })

                                        itemsSingle.push({
                                            id: idCounter,
                                            itemName: i.name,
                                            itemImg: i.image,
                                            itemPrice: i.price,
                                            resturnatName: i.resturantName
                                        })
                                        idCounter++
                                    }
                                    console.log(filterdValues)
                                    this.setState({
                                        resturantsList: this.removeDuplicates(filterdValues, 'resturantName'),
                                        cartList: values,
                                        itemsSingle: itemsSingle
                                    })
                                    console.log(this.state.resturantsList)
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
                                let collecteditems = []
                                let idCounter = 0
                                for (let i of this.state.itemsSingle) {
                                    if (item.resturantName === i.resturnatName) {
                                        console.log('it is true !!!!!!!!!')
                                        collecteditems.push({
                                            id: idCounter,
                                            itemName: i.itemName,
                                            itemImg: i.itemImg,
                                            itemPrice: i.itemPrice,
                                            resturantName: item.resturantName,
                                            catagoryName: item.catagoryName

                                        })

                                    }
                                    idCounter++
                                }
                                console.log('here for the clock listener ==============================')
                                console.log(this.state.itemsSingle)
                                console.log('here for the clock listener ==============================')


                                this.props.navigation.navigate('FavoritesViewerScreen', {
                                    resturantItems: collecteditems,

                                })
                                // alert('on press event ' + JSON.stringify(item.items) + 'this is i.items' + JSON.stringify(this.state.cartList.items))
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