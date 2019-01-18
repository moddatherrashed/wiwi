import React, { Component } from 'react'
import { View, Text, Dimensions, TextInput, I18nManager, ScrollView, AsyncStorage, TouchableOpacity, Image, FlatList } from 'react-native'
import { Button } from 'native-base'
import translation from './../../controllers/translation'
import ApiController from './../../controllers/ApiController'
import { NavigationEvents } from 'react-navigation'

const viewportWidth = Dimensions.get('window').width

class CheckoutScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: [],
            slelected_location_id: null
        }
    }

    get_distance(resturant_coordiniation, user_coordiniation) {
        
        let API_KEY = 'AIzaSyD28i3GhTFA36utt_uXjUhIZfahcCVfWUQ'
        let matrix_api_url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=47.559601,7.588576&destinations=47.376888,8.541694&key=' + API_KEY
        fetch(matrix_api_url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        alert('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        alert(JSON.stringify(data));
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

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
    scalling(size) {
        return viewportWidth * (size / viewportWidth)
    }
    componentDidMount() {
        this.getAddresses()
        // this.get_distance()
    }
    static navigationOptions = () => ({
        title: 'Last Step',
        headerTintColor: '#638bba',
    })
    render() {
        //let locations_to_map = this.state.locations
        return (
            <ScrollView style={{
                flex: 1, backgroundColor: 'white'
            }}>
                <NavigationEvents
                    onWillFocus={
                        () => {
                            this.getAddresses()
                        }}
                />
                <View style={{
                    justifyContent: 'center',
                    borderTopColor: '#D3D3D3',
                    borderTopWidth: 1,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        marginBottom: 5,
                    }}>
                        <Text style={{ color: 'gray', fontSize: 18, flex: 1, textAlign: 'left', padding: 10 }}>Subtotal</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '700', flex: 1, textAlign: 'right', padding: 10 }}>10 JOD</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginBottom: 10
                    }}>
                        <Text style={{ color: 'gray', fontSize: 18, flex: 1, textAlign: 'left', padding: 10 }}>Delivery</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '700', flex: 1, textAlign: 'right', padding: 10 }}>10 JOD</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        borderTopColor: '#D3D3D3',
                        borderTopWidth: 1,
                        borderBottomColor: '#D3D3D3',
                        borderBottomWidth: 1,
                        marginBottom: 10,

                    }}>
                        <Text style={{
                            color: 'gray',
                            fontSize: 18,
                            marginTop: 10,
                            flex: 1,
                            padding: 10,
                            textAlign: 'left'
                        }}>Order Total</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: '700',
                            marginTop: 10,
                            flex: 1,
                            padding: 10,
                            textAlign: 'right'
                        }}>10 JOD</Text>
                    </View>
                </View>
                <Text style={{ color: 'gray', fontSize: 18, flex: 1, textAlign: 'left', padding: 10 }}>{I18nManager.isRTL ? translation.ar.notes : translation.en.notes}</Text>
                <TextInput
                    multiline={true}
                    style={{
                        borderWidth: 0.5,
                        borderColor: '#B8B8B8',
                        height: 100,
                        margin: 15, padding: 5
                    }}
                    numberOfLines={10}
                    onChangeText={(user_report) => this.setState({ user_report })}
                    value={this.state.user_report} />
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('AddNewLocation')
                            }}
                            style={{
                                flexDirection: 'row',
                                flex: 1,
                                padding: 10,
                                alignItems: 'center'
                            }}>
                            <Image source={require('../../ProductIcons/AddToCart.png')} resizeMode='contain' style={{ flex: 0.2, height: 24 }} />
                            <Text style={{ fontSize: 17, flex: 0.8, textAlign: 'left' }}>Add New</Text>
                        </TouchableOpacity>
                        {
                            this.state.locations.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            this.setState({
                                                slelected_location_id: item.id
                                            })
                                            //alert(this.state.slelected_location_id)
                                        }}
                                        style={{
                                            flexDirection: 'row',
                                            flex: 1,
                                            padding: 10,
                                            alignItems: 'center'
                                        }}>
                                        <Image source={this.state.slelected_location_id !== item.id ? require('../../Icons/Uncheck.png') : require('../../Icons/Check.png')} resizeMode='contain' style={{ flex: 0.2, height: 24 }} />
                                        <Text style={{ fontSize: 17, flex: 0.8, textAlign: 'left' }}>{item.address}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </View>
                    <Button rounded
                        onPress={() => {
                            if (this.state.slelected_location_id !== null) {
                                this.props.navigation.navigate('SuccessScreen')
                            } else {
                                alert('please select an address')
                            }
                        }}
                        style={{
                            backgroundColor: '#638bba',
                            borderRadius: 25,
                            borderColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            width: 200,
                            marginTop: 20,
                            marginBottom: 10,
                            borderWidth: 1
                        }} >
                        <Text style={{ fontWeight: '700', color: 'white' }}>Confirm</Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

export default CheckoutScreen