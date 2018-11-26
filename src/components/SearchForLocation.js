import React, { Component } from 'react'
import { FlatList, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import LocationAutoComplete from '../components/LocationAutoComplete'
import { Button } from 'native-base'
import Modal from 'react-native-modal'



class SearchForLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: 'nothing',
            long: null,
            lat: null,
            isSearchVisible: true
        }
        this.getLocationHandler = this.getLocationHandler.bind(this)

    }

    componentDidMount() {
        if (this.props.navigation.state.params.type === 'get') {
            let lat = this.props.navigation.state.params.lat
            let long = this.props.navigation.state.params.long
            console.log('lat', lat)
            console.log('long', long)
            fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + '+' + long + '&key=AIzaSyC8XepP6Ex4CgVcqUKJ1JhoWqe2NaAS-D4')
                .then(
                    (response) => {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            return;
                        }

                        // Examine the text in the response
                        response.json().then((data) => {
                            console.log(data.results[0].formatted_address);
                        });
                    }
                )
                .catch((err) => {
                    console.log('Fetch Error :-S', err);
                })
        }
    }

    static navigationOptions = {
        headerTitle: 'search for a location'

    }
    getLocationHandler(value, result) {
        this.setState({
            location: value,
            isSearchVisible: false,
            text: ''
        })
        result.then((res) => {
            console.log('result', res.geometry.location)

        })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {
                    this.state.isSearchVisible
                        ?
                        <LocationAutoComplete getLocation={this.getLocationHandler} />
                        :
                        <View>
                            <Text style={{
                                fontSize: 18, marginLeft: 20, marginTop: 10
                            }}>Your choosen address  : </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: 18,
                                padding: 10
                            }}>
                                {this.state.location}
                            </Text>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 10 }}>More details</Text>

                            <TextInput
                                multiline={true}
                                style={{
                                    borderWidth: 0.5, borderColor: '#B8B8B8', margin: 15,
                                }}
                                numberOfLines={10}
                                onChangeText={(text) => this.setState({ text })}
                                value={this.state.text} />
                            <Button rounded
                                onPress={() => { this.props.navigation.navigate('SearchForLocation') }}
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
                                <Text style={{ fontWeight: '700', color: 'white' }}>Add</Text>
                            </Button>
                        </View>
                }


            </View >
        )
    }

}

export default SearchForLocation