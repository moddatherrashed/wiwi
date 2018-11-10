import React from 'react'
import { Text, View, Dimensions, ImageBackground, I18nManager, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Button, Item, Input, Label } from 'native-base'
import Image from 'react-native-remote-svg'
import translation from './../controllers/translation'
import ApiController from './../controllers/ApiController'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mobile_number: '',
            password: '',
            loginFaild: false,
            isLoading: false,
            isRequired : false
        }
    }


    static navigationOptions = {
        header: null
    }

    renderRequestErrorMessage(login) {
        if (login) {
            return (
                <Text style={{ alignSelf: 'center', color: 'red', fontWeight: '700', margin: 10, fontSize: 15 }}>Login Faild</Text>
            )
        }
    }
    renderFieldErrorMessage(mobile_number, password) {
        //check if one of the fields is empty 
        if (mobile_number === '' || password === '') {
            return (
                <Text style={{ alignSelf: 'center', color: 'red', fontWeight: '700', margin: 10, fontSize: 15 }}>All Fields are required</Text>
            )
        }
    }
    renderActivitIndicator(isLoading) {
        if (isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            )
        } else {
            return (
                <View style={{
                    alignSelf: 'center',
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Button rounded
                        onPress={() => {
                            this.setState({
                                isLoading: true
                            })
                            ApiController.sign_in(this.state.mobile_number, this.state.password).then((result) => {
                                if (result.status === 0) {
                                    this.setState({
                                        loginFaild: true,
                                        isLoading: false
                                    })
                                } else {
                                    this.setState({
                                        isLoading: false
                                    })
                                    this.props.navigation.navigate('App')
                                }
                            })
                        }}
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
                        onPress={() => { this.props.navigation.navigate('App') }}
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
            )
        }
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
                        <Label style={{ color: this.state.loginFaild ? 'red' : 'white', marginTop: 5 }}>{I18nManager.isRTL ? translation.ar.mobile_number : translation.en.mobile_number}</Label>
                        <Input
                            keyboardType="numeric"
                            onChangeText={value => this.setState({ mobile_number: value, loginFaild: false })}
                            style={{ fontSize: 20, padding: 10, color: this.state.loginFaild ? 'red' : 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label style={{ color: this.state.loginFaild ? 'red' : 'white', marginTop: 5 }}>{I18nManager.isRTL ? translation.ar.password : translation.en.password}</Label>
                        <Input
                            secureTextEntry
                            onChangeText={value => this.setState({ password: value, loginFaild: false })}
                            style={{ fontSize: 20, padding: 10, color: this.state.loginFaild ? 'red' : 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                </View>
                {
                    this.renderRequestErrorMessage(this.state.loginFaild)
                }
                {
                    this.renderFieldErrorMessage(this.state.mobile_number, this.state.password)

                }
                <Text style={{ alignSelf: 'flex-end', color: 'white', borderBottomColor: 'white', borderBottomWidth: 0.5, margin: 10, fontSize: 15 }}>{I18nManager.isRTL ? translation.ar.forget_password : translation.en.forget_password}</Text>
                {
                    this.renderActivitIndicator(this.state.isLoading)
                }
            </ImageBackground>
        )
    }
}
export default LoginScreen