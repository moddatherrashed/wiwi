import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, AsyncStorage, I18nManager } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import ApiController from '../../controllers/ApiController'

class LocationScreenComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            locations: null,
        }
    }
    getAddresses() {
        AsyncStorage.getItem('user_id').then((item) => {
            ApiController.get_user_addresses(item)
                .then((res) => {
                    if (res.status === 1) {
                        this.setState({
                            locations: res.addresses
                        })
                    }
                })
        })
    }
    componentDidMount() {
        this.getAddresses()
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <NavigationEvents
                    onWillFocus={
                        () => {
                            this.getAddresses()
                        }}
                />
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
                            <Text style={{ fontSize: 20, padding: 10, color: 'black', paddingHorizontal: 10 }}>{I18nManager.isRTL ? 'إضافة عنوان' : 'Add New'}</Text>
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

                                <Text style={{ fontSize: 20, padding: 10, color: 'black', paddingHorizontal: 10, flex: 2.5 }}>{item.address}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        ApiController.delete_address(item.id).then((res) => {
                                            if (res.status === 1) {
                                                let locations = this.state.locations
                                                locations.splice(index, 1)
                                                this.setState({
                                                    locations
                                                })
                                                alert(res.message)
                                            } else {
                                                alert(res.message)
                                            }
                                        })
                                    }}
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