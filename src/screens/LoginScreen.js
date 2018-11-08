import React from 'react'
import { Text, View, Dimensions, ImageBackground, I18nManager } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Button, Item, Input, Label } from 'native-base'
import Image from 'react-native-remote-svg'
import translation from './../controllers/translation'


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
                style={{ flex: 1 }} >
                <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Animatable.View
                        animation="zoomIn" iterationCount={1}
                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../Icons/logowhite.png')} resizeMode='contain' style={{ height: SCREEN_HEIGHT * 0.25, width: SCREEN_WIDTH * 0.25, marginTop: 30 }} />
                    </Animatable.View>
                </View>
                <View style={{ margin: 10, paddingTop: 30 }}>
                    <Item floatingLabel>
                        <Label style={{ color: 'white', marginTop: 5 }}>{I18nManager.isRTL ? translation.ar.mobile_number : translation.en.mobile_number}</Label>
                        <Input
                            keyboardType="numeric"
                            style={{ fontSize: 20, padding: 10, color: 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label style={{ color: 'white', marginTop: 5 }}>{I18nManager.isRTL ? translation.ar.password : translation.en.password}</Label>
                        <Input
                            keyboardType="numeric"
                            style={{ fontSize: 20, padding: 10, color: 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                </View>
                <Text style={{ alignSelf: 'flex-end', color: 'white', borderBottomColor: 'white', borderBottomWidth: 0.5, margin: 10, fontSize: 15 }}>{I18nManager.isRTL ? translation.ar.forget_password : translation.en.forget_password}</Text>
                <View style={{
                    alignSelf: 'center',
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Button rounded
                        onPress={() => { this.props.navigation.navigate('HomeScreen') }}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 200,
                        }} >
                        <Text style={{ fontWeight: '700', color: '#638bba' }}>{I18nManager.isRTL ? translation.ar.login : translation.en.login}</Text>
                    </Button>

                    <Button rounded
                        onPress={() => { this.props.navigation.navigate('RegisterScreen') }}
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
                        <Text style={{ fontWeight: '700', color: 'white' }}>{I18nManager.isRTL ? translation.ar.register : translation.en.register}</Text>
                    </Button>
                </View>
            </ImageBackground>
        )
    }
}
export default LoginScreen