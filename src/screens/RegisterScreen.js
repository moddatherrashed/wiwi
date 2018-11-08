import React, { Component } from 'react'
import { ImageBackground, View, Dimensions, Image, Text, I18nManager } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Button, Item, Input, Label } from 'native-base'
import translation from './../controllers/translation'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class RegisterScreen extends Component {

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
                        <Label style={{ color: 'white', marginTop: 5 }}>{I18nManager.isRTL ? translation.ar.email : translation.en.email}</Label>
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
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label style={{ color: 'white', marginTop: 5 }}>{I18nManager.isRTL ? translation.ar.confirm_password : translation.en.confirm_password}</Label>
                        <Input
                            keyboardType="numeric"
                            style={{ fontSize: 20, padding: 10, color: 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                </View>
                <View style={{
                    alignSelf: 'center',
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Button rounded
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 200,
                        }} >
                        <Text style={{ fontWeight: '700', color: '#638bba' }}>{I18nManager.isRTL ? translation.ar.register : translation.en.register}</Text>
                    </Button>

                    <Button rounded
                        onPress={() => { this.props.navigation.goBack() }}
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
                        <Text style={{ fontWeight: '700', color: 'white' }}>{I18nManager.isRTL ? translation.ar.cancel : translation.en.cancel}</Text>
                    </Button>
                </View>
            </ImageBackground>
        );
    }
}

export default RegisterScreen;