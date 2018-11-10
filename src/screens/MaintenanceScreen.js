import React from 'react'
import { Text, View, Dimensions, ImageBackground, I18nManager } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Icon } from 'native-base'
import Image from 'react-native-remote-svg'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class MaintenanceScreen extends React.Component {

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

                <Icon name='ios-construct' style={{ fontSize: SCREEN_WIDTH * 0.25, color: 'white' }} />
                <Animatable.View
                    animation="zoomIn" iterationCount={1}
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../Icons/logowhite.png')} resizeMode='contain' style={{ height: SCREEN_HEIGHT * 0.25, width: SCREEN_WIDTH * 0.25, marginTop: 30 }} />
                </Animatable.View>
                <Text style={{ fontSize: 30, fontWeight: '700', color: 'white', marginTop: 30 }}>Underconstruction</Text>
                <Text style={{ fontSize: 20, fontWeight: '700', color: 'white', marginTop: 30 }}>please come back later ! </Text>
            </ImageBackground>
        )
    }
}
export default MaintenanceScreen