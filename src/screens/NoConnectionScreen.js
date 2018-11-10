import React from 'react'
import { Text, View, Dimensions, TouchableOpacity, ImageBackground, I18nManager } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Icon } from 'native-base'
import Image from 'react-native-remote-svg'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class NoConnectionScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mobile_number: '',
            password: ''
        }
    }


    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <ImageBackground
                source={require('../BG/login.png')}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

                <Icon name='ios-wifi' style={{ fontSize: SCREEN_WIDTH * 0.50, color: 'red' }} />

                <Text style={{ fontSize: 30, fontWeight: '700', color: 'white', marginTop: 30 }}>NO INTERNET CONNECTION</Text>
                <TouchableOpacity>
                    <Icon name='ios-refresh' style={{ fontSize: SCREEN_WIDTH * 0.30, color: 'white', marginTop: 30 }} />
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}
export default NoConnectionScreen