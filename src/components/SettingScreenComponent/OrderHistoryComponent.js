import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'

const viewportWidth = Dimensions.get('window').width

class OrderHistoryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            HistoryList: [
                {
                    id: '1',
                    image: 'http://freevectorlogo.net/wp-content/uploads/2012/12/carrefour-logo-vector-400x400.png',
                    name: 'Carrefour',
                    date: '20/04/2018',
                    price: '100 JOD'
                },
                {
                    id: '2',
                    image: 'http://d701vexhkz032.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png',
                    name: 'McDonalds',
                    date: '14/03/2018',
                    price: '20 JOD'
                },
                {
                    id: '3',
                    image: 'http://d701vexhkz032.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png',
                    name: 'McDonalds',
                    date: '14/03/2018',
                    price: '20 JOD'
                },
                {
                    id: '4',
                    image: 'http://freevectorlogo.net/wp-content/uploads/2012/12/carrefour-logo-vector-400x400.png',
                    name: 'Carrefour',
                    date: '20/04/2018',
                    price: '100 JOD'
                }
            ]
        }
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                    contentContainerStyle={{
                        padding: 10,
                        backgroundColor: 'white'
                    }}
                    data={this.state.HistoryList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF',
                                margin: 5,
                                elevation: 1,
                                shadowOffset: { height: 0, width: 0 },
                                shadowColor: 'black',
                                shadowOpacity: 0.2
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ padding: 6, borderRightWidth: 0.5, borderColor: '#E0E0E0' }}>
                                    <Image
                                        style={{ height: viewportWidth * 0.2, width: viewportWidth * 0.2 }}
                                        source={{ uri: item.image }}
                                        resizeMode='contain'
                                    />
                                </View>

                                <View>

                                    <Text style={{ color: 'black', marginLeft: 12, marginTop: 10, marginBottom: 2, fontWeight: '700', fontSize: 20 }}>{item.name}</Text>
                                    <Text style={{ color: 'black', marginLeft: 12, color: 'grey', fontWeight: 'bold' }}>{item.date}</Text>
                                    <Text style={{ color: 'black', margin: 12, fontWeight: '700', fontSize: 18, color: '#638bba' }}>{item.price}</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    }
                />
                <View style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    right: 0,
                    bottom: 0
                }}>
                    <Image source={require('../../BG/Pattern.png')} style={{
                        width: viewportWidth * 0.55,
                        height: viewportWidth * 0.4,
                        padding: 5,
                        alignSelf: 'flex-end',
                        right: 0,
                        bottom: 0
                    }} />
                </View>
            </ScrollView>
        )
    }
}

export default OrderHistoryComponent