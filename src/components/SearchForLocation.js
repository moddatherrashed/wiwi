import React, { Component } from 'react'
import { Text, View, TextInput, AsyncStorage, I18nManager } from 'react-native'
import LocationAutoComplete from '../components/LocationAutoComplete'
import { Button } from 'native-base'
import ApiController from '../controllers/ApiController'


class SearchForLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: 'nothing',
            long: null,
            lat: null,
            user_id: null,
            isSearchVisible: true
        }
        this.getLocationHandler = this.getLocationHandler.bind(this)
    }

    componentDidMount() {
        AsyncStorage.getItem('user_id').then((item) => {
            this.setState({
                user_id: item
            })
        })
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
        headerTitle: I18nManager.isRTL ? 'بحث' : 'search',
        headerTintColor: '#638bba',

    }
    getLocationHandler(value, result) {
        this.setState({
            location: value,
            isSearchVisible: false,
            text: ''
        })
        result.then((res) => {
            let { lat, lng } = res.geometry.location
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
                                fontSize: 18,
                                textAlign: I18nManager.isRTL && 'left',
                                margin: 20
                            }}>{I18nManager.isRTL ? 'العنوان الذي اخترته:' : 'Your chosen address:'}</Text>
                            <Text style={{
                                color: 'black',
                                textAlign: I18nManager.isRTL && 'left',
                                margin: 20
                            }}>
                                {this.state.location}
                            </Text>
                            <Text style={{
                                fontSize: 18,
                                textAlign: I18nManager.isRTL ? 'left' : 'right',
                                margin: 20
                            }}>{I18nManager.isRTL ? 'المزيد من التفاصيل' : 'More details'}</Text>

                            <TextInput
                                multiline={true}
                                style={{
                                    borderWidth: 0.5,
                                    borderColor: '#B8B8B8',
                                    textAlign: I18nManager.isRTL ? 'left' : 'right',
                                    margin: 15,
                                    padding: 5
                                }}
                                numberOfLines={10}
                                onChangeText={(text) => this.setState({ text })}
                                value={this.state.text} />
                            <Button rounded
                                onPress={() => {
                                    ApiController.send_location(
                                        {
                                            "user_id": this.state.user_id,
                                            "long": this.state.long,
                                            "lat": this.state.lat,
                                            "address": this.state.location
                                        }
                                    ).then((res) => {
                                        alert(JSON.stringify(res))
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
                                <Text style={{
                                    fontWeight: '700',
                                    textAlign: I18nManager.isRTL && 'left',
                                    color: 'white'
                                }}>{I18nManager.isRTL ? 'إضافة' : 'Add'}</Text>
                            </Button>
                        </View>
                }


            </View >
        )
    }

}

export default SearchForLocation