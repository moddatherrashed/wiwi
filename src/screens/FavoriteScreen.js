import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Dimensions, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

const viewportWidth = Dimensions.get('window').width

class FavoriteScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FavoritesList: [
                {
                    id: '1',
                    image: 'http://freevectorlogo.net/wp-content/uploads/2012/12/carrefour-logo-vector-400x400.png',
                    name: 'Carrefour'
                },
                {
                    id: '2',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/280px-McDonald%27s_Golden_Arches.svg.png',
                    name: 'McDonalds'
                }
            ]
        }
    }
    render() {
        return (
            <ScrollView style={styles.screenStyle}>

                <FlatList
                    contentContainerStyle={styles.flatListConatinerStyle}
                    data={this.state.FavoritesList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={styles.itemMainContainerStyle}>
                            <View style={styles.itemContainerStyle}>
                                <View style={styles.itemImageContainerStyle}>
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