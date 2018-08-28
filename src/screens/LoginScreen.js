import React from 'react'
import { Text, View, Keyboard, Platform, Dimensions, Animated, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Icon, Button } from 'native-base'
import Image from 'react-native-remote-svg'


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <ImageBackground
                source={require('../BG/login.png')}
                style={{ flex: 1 }}   >
                <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Animatable.View
                        animation="zoomIn" iterationCount={1}
                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../Icons/logowhite.png')} resizeMode='contain' style={{ height: SCREEN_HEIGHT * 0.25, width: SCREEN_WIDTH * 0.25, marginTop: 30 }} />
                    </Animatable.View>
                </View>
                <TextInput
                    keyboardType="numeric"
                    style={{ fontSize: 20, margin: 10, marginTop: 80, borderBottomColor: 'white', borderBottomWidth: 1 }}
                    placeholder="Enter your number"
                    underlineColorAndroid='transparent' />
                <TextInput
                    secureTextEntry
                    style={{ fontSize: 20, margin: 10, marginTop: 30, borderBottomColor: 'white', borderBottomWidth: 1 }}
                    placeholder="Enter your password"
                    underlineColorAndroid='transparent' />

                <Text style={{ alignSelf: 'flex-end', color: 'white', borderBottomColor: 'white', borderBottomWidth: 0.5, margin: 10, fontSize: 15 }}>Forget Password?</Text>
                <View style={{
                    alignSelf: 'center',
                    flex: 1,
                    marginBottom: 50,
                    justifyContent: 'flex-end'
                }}>
                    <Button rounded
                        onPress={() => { this.props.navigation.navigate('HomeScreen') }}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 200,
                            marginTop: 20
                        }} >
                        <Text style={{ fontWeight: '700', color: '#638bba' }}>Login</Text>
                    </Button>

                    <Button rounded
                        style={{
                            backgroundColor: '#638bba',
                            borderRadius: 25,
                            borderColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 200,
                            marginTop: 20,
                            borderWidth: 1
                        }} >
                        <Text style={{ fontWeight: '700', color: 'white' }}>Register</Text>
                    </Button>
                </View>
            </ImageBackground>
        )
    }
}
export default LoginScreen