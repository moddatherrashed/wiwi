import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import AllItemsScreen from './../../screens/HomeScreens/AllItemsScreen'
import OfferItemScreen from './../../screens/HomeScreens/OfferItemScreen'
import CatagoryViewerScreen from '../../screens/HomeScreens/CatagoryViewerScreen';

const viewportWidth = Dimensions.get('window').width

class ResturantsListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            HistoryList: [
                {
                    id: '1',
                    image: 'http://www.clicksides.com/wp-content/uploads/2018/04/FireFly-Burger.png',
                    name: 'Firefly',
                    date: '20/04/2018',
                    price: '100 JOD'
                },
                {
                    id: '2',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/280px-McDonald%27s_Golden_Arches.svg.png',
                    name: 'McDonalds',
                    date: '14/03/2018',
                    price: '20 JOD'
                },
                {
                    id: '3',
                    image: 'https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/56/90/3a/56903aa7-079f-7c9f-5d75-ace99992139e/mzl.lxkstsco.jpg/246x0w.jpg',
                    name: 'Burger Makers',
                    date: '14/03/2018',
                    price: '20 JOD'
                }
            ]
        }
    }

    render() {
        return (
            <ScrollView style={{ flex: 3, backgroundColor: 'white' }}>
                <FlatList
                    contentContainerStyle={{ margin: 2 }}
                    contentContainerStyle={{
                        padding: 10,
                        flex: 2
                    }}
                    data={this.state.HistoryList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('topTabNAvigator', {
                                    resturantName: item.name
                                })
                            }
                            }
                            style={{
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF',
                                margin: 5,
                                elevation: 1,
                                shadowOffset: { height: 0, width: 0 },
                                shadowColor: 'black',
                                shadowOpacity: 0.2
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 4 }}>
                                <View style={{ padding: 6, flex: 2 }}>
                                    <Image
                                        style={{ height: viewportWidth * 0.21, width: viewportWidth * 0.21 }}
                                        source={{ uri: item.image }}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View style={{ padding: 6, flex: 2 }}>
                                    <Text style={{ color: 'black', marginLeft: 12, marginTop: 10, marginBottom: 2, fontWeight: '700', fontSize: 20 }}>{item.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
        )
    }
}


export default ResturantsListComponent

