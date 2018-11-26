import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import LocationAutoComplete from '../components/LocationAutoComplete'
import { Button } from 'native-base'


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
            let { lat, long } = this.props.navigation.state.params
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
                            //console.log(data.results[0].formatted_address)
                            this.setState({
                                isSearchVisible: false,
                                location: data.results[0].formatted_address,
                                lat: lat,
                                long: long
                            })
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
            let { lat, long } = res.geometry.location
            //this is the lat long for the searched data
            console.log('result', res.geometry.location)
            this.setState({
                lat: lat,
                long: lng
            })
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
                                fontSize: 18, margin: 20
                            }}>Your choosen address  : </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: 18,
                                padding: 10
                            }}>
                                {this.state.location}
                            </Text>
                            <Text style={{ fontSize: 18, margin: 20 }}>More details</Text>

                            <TextInput
                                multiline={true}
                                style={{
                                    borderWidth: 0.5, borderColor: '#B8B8B8', margin: 15,
                                }}
                                numberOfLines={10}
                                onChangeText={(text) => this.setState({ text })}
                                value={this.state.text} />
                            <Button rounded
                                onPress={() => {
                                    alert('location : ' + this.state.location + " lat " + this.state.lat + " long " + this.state.long)
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
                                <Text style={{ fontWeight: '700', color: 'white' }}>Add</Text>
                            </Button>
                        </View>
                }


            </View >
        )
    }

}

export default SearchForLocation