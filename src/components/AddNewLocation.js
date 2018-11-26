import React, { Component } from 'react'
import { Platform, Text, View, ActivityIndicator } from 'react-native'
import { Constants, Location, Permissions } from 'expo';
import LocationAutoComplete from '../components/LocationAutoComplete'
import { Button } from 'native-base'
import Modal from 'react-native-modal'



class AddNewLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: null,
            isLoading: true
        }
    }

    static navigationOptions = {
        headerTitle: 'Add New Location'

    }

    componentDidMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        alert(JSON.stringify(location))
        this.setState({
            location: location,
            isLoading: false
        });
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text style={{ color: 'black', fontWeight: '700', alignSelf: 'center', padding: 5 }}>
                    please select the method to set a new location:
                 </Text>
                {!this.state.isLoading ? <View style={{ alignItems: "center" }}>
                    <Button rounded
                        onPress={() => {
                            this.props.navigation.navigate('SearchForLocation', {
                                type: 'get',
                                lat: this.state.location.coords.latitude,
                                long: this.state.location.coords.longitude
                            })
                        }}
                        style={{
                            backgroundColor: '#638bba',
                            borderRadius: 25,
                            borderColor: 'white',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            alignItems: 'center',
                            width: 300,
                            marginTop: 20,
                            borderWidth: 1
                        }} >
                        <Text style={{ fontWeight: '700', color: 'white' }}>Get current location</Text>
                    </Button>
                    <Button rounded
                        onPress={() => {
                            this.props.navigation.navigate('SearchForLocation', {
                                type: 'search'
                            })
                        }}
                        style={{
                            backgroundColor: '#638bba',
                            borderRadius: 25,
                            borderColor: 'white',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            alignItems: 'center',
                            width: 300,
                            marginTop: 20,
                            borderWidth: 1
                        }} >
                        <Text style={{ fontWeight: '700', color: 'white' }}>Search for a location</Text>
                    </Button>
                </View>
                    : <ActivityIndicator size="large" color="#638bba" />
                }
            </View >
        )
    }

}

export default AddNewLocation