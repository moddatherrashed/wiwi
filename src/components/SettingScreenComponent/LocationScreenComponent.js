import React, { Component } from 'react'
import { View, Text, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native'


const viewportWidth = Dimensions.get('window').width

class LocationScreenComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            locations: [
                { id: 1, name: 'Eptingerstrasse 28, 4052 Basel', age: 24 }
            ]
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: '#FFFFFF',
                    width: '100%',
                    marginBottom: 5,
                }} onPress={() => {
                    this.props.navigation.navigate('AddNewLocation')
                }}>
                    <View style={{ flexDirection: 'row', flex: 6, borderBottomColor: '#C8C8C8', marginHorizontal: 10, borderBottomWidth: 1 }}>
                        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 20, padding: 10, color: 'black', paddingHorizontal: 10 }}>Add New</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    data={this.state.locations}
                    renderItem={({ item, index }) =>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#FFFFFF',
                            width: '100%',
                            marginBottom: 5,
                        }}>
                            <View style={{ flexDirection: 'row', flex: 3, borderBottomColor: '#C8C8C8', marginHorizontal: 10, borderBottomWidth: 1 }}>

                                <Text style={{ fontSize: 20, padding: 10, color: 'black', paddingHorizontal: 10, flex: 2.5 }}>{item.name}</Text>
                                <TouchableOpacity
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flex: 0.5,
                                    }}>
                                    <Image
                                        source={require('../../Icons/Cancel.png')}
                                        style={{
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                />
                
            </View>
        )
    }
}

export default LocationScreenComponent