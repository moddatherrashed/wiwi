import React from 'react'
import { Dimensions, ImageBackground, Image, NetInfo, AsyncStorage, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class SplashScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
        });
        return (
            <ImageBackground
                source={require('../BG/splash.png')}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Animatable.View
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../Icons/logo_splash.png')} resizeMode='contain' style={{ height: SCREEN_HEIGHT * 0.35, width: SCREEN_WIDTH * 0.35, marginTop: 30 }} />
                </Animatable.View>
                <ActivityIndicator size="large" color="#638bba" />
            </ImageBackground>
        )
    }
}
export default SplashScreen