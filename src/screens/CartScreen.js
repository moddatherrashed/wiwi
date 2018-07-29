import React, { Component } from 'react'
import { View, Text, Image, Dimensions, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const viewportWidth = Dimensions.get('window').width

class CartScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartMainList: [
                {
                    id: '1',
                    image: 'http://freevectorlogo.net/wp-content/uploads/2012/12/carrefour-logo-vector-400x400.png',
                    name: 'Carrefour'
                },
                {
                    id: '2',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/280px-McDonald%27s_Golden_Arches.svg.png',
                    name: 'McDonalds'
                },
                {
                    id: '3',
                    image: 'https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/56/90/3a/56903aa7-079f-7c9f-5d75-ace99992139e/mzl.lxkstsco.jpg/246x0w.jpg',
                    name: 'Burger Makers'
                }
            ]
        }
    }
    render() {
        return (
            <ScrollView style={styles.screenStyle}>
                <FlatList
                    contentContainerStyle={styles.flatListContainerStyle}
                    data={this.state.cartMainList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={styles.itemFlatListStyle}>
                            <View style={styles.itemConatinerStyle}>
                                <View style={{ padding: 6, flex: 2 }}>
                                    <Image
                                        style={styles.itemImageStyle}
                                        source={{ uri: item.image }}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View style={styles.itemTextContainerStyle}>
                                    <Text style={styles.itemTextStyle}>{item.name}</Text>
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
        flex: 1,
        backgroundColor: 'white'
    },
    flatListContainerStyle: {
        padding: 10,
        flex: 2
    },
    itemFlatListStyle: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        margin: 5,
        elevation: 1,
        shadowOffset: {
            height: 0,
            width: 0
        },
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
    itemConatinerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 4
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