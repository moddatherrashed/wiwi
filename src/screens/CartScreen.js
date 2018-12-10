import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Dimensions, FlatList, TouchableOpacity, StyleSheet, AsyncStorage, I18nManager } from 'react-native'
import { NavigationEvents } from 'react-navigation'

const viewportWidth = Dimensions.get('window').width

class CartScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritesList: [],
            resturantsList: [],
            itemsSingle: [],
            isNull: null
        }
    }

    removeDuplicates = (myArr, prop) => {
        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
        })
    }


    componentDidMount() {
        this.getFavoritesItems()

    }

    async getFavoritesItems() {
        try {
            await AsyncStorage.getItem('CartItems').then((value) => {
                let values = JSON.parse(value)
                let filterdValues = []
                let itemsSingle = []
                for (let i of values) {
                    filterdValues.push({
                        id: i.id,
                        resturantName: i.resturantName,
                        resturantImage: i.resturantImage
                    })

                    itemsSingle.push({
                        id: i.id,
                        itemQuintity: i.quintity,
                        itemName: i.name,
                        itemDescreption: i.descreption,
                        itemImg: i.image,
                        itemPrice: i.price,
                        itemCategory: i.catagoryName,
                        resturnatName: i.resturantName
                    })
                }
                this.setState({
                    resturantsList: this.removeDuplicates(filterdValues, 'resturantName'),
                    favoritesList: values,
                    itemsSingle: itemsSingle,
                    isNull: false
                })

                console.log('resturnats list ==>', this.state.resturantsList)
                console.log(' VALUES ==>', values)

                if (this.state.resturantsList === undefined || (this.state.resturantsList).length == 0) {
                    this.setState({ isNull: true })
                }
            })
        } catch (error) {
            this.setState({ isNull: true })
        }
    }

    renderCartItems(isNull) {
        if (isNull) {
            return (
                <Text style={{ alignSelf: 'center', fontSize: 25, paddingTop: 10 }}>{I18nManager.isRTL ? 'لا يوجد عناصر' : 'There is not items available'}</Text>
            )
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <FlatList
                        contentContainerStyle={styles.flatListConatinerStyle}
                        data={this.state.resturantsList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => {
                                    let collecteditems = []
                                    for (let i of this.state.itemsSingle) {
                                        if (item.resturantName === i.resturnatName) {
                                            collecteditems.push({
                                                id: i.id,
                                                itemName: i.itemName,
                                                itemImg: i.itemImg,
                                                itemPrice: i.itemPrice,
                                                productQuintity: i.itemQuintity,
                                                itemDescreption: i.itemDescreption,
                                                resturantName: item.resturantName,
                                                resturantImage: item.resturantImage,
                                                catagoryName: item.catagoryName
                                            })
                                        }
                                    }
                                    this.props.navigation.navigate('ItemViewerScreen', {
                                        resturantItems: collecteditems,
                                    })
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
                </View>
            )
        }
    }
    render() {
        return (
            <ScrollView style={styles.screenStyle}>
                <NavigationEvents
                    onWillFocus={
                        () => {
                            this.getFavoritesItems()
                        }}
                />
                {
                    this.renderCartItems(this.state.isNull)
                }

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

export default CartScreen