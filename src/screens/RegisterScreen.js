import React, { Component } from 'react'
import { ImageBackground, View, Dimensions, Image, Text, ActivityIndicator, AsyncStorage, I18nManager } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Button, Item, Input, Label } from 'native-base'
import translation from './../controllers/translation'
import validationController from './../controllers/validationController'
import ApiController from './../controllers/ApiController'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class RegisterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile_number: '',
            user_email: '',
            password: '',
            confirm_password: '',
            errorMsg: '',
            isLoading: false
        }
    }
    static navigationOptions = {
        header: null
    }

    fieldsValidation(mobile_number, user_email, password, confirm_password) {
        this.setState({
            isLoading: true
        })
        if (validationController.MOBILE_NUMBER_VALIDATOR(mobile_number)) {
            if (validationController.EMAIL_VALIDATOR(user_email)) {
                if (validationController.PASSWORD_VALIDATOR(password, confirm_password)) {
                    ApiController.sign_up(this.state.mobile_number, this.state.user_email, this.state.password).then((result) => {
                        if (result.status === 1) {
                            this.setState({
                                isLoading: false
                            })
                            AsyncStorage.setItem('user_id', JSON.stringify(result.user_id))
                            this.props.navigation.navigate('App')
                        } else {
                            this.setState({
                                errorMsg: result.message,
                                isLoading: false
                            })
                        }
                    }).catch((err) => {
                        alert(err)
                    })
                } else {
                    this.setState({
                        errorMsg: 'your password does not match',
                        isLoading: false
                    })
                }
            } else {
                this.setState({
                    errorMsg: 'your email is not valid',
                    isLoading: false
                })
            }
        } else {
            this.setState({
                errorMsg: 'your number is not valid',
                isLoading: false
            })
        }
    }

    renderActivityIndicator(isLoading) {
        if (!isLoading) {
            return (
                <View style={{
                    alignSelf: 'center',
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Button rounded
                        onPress={() => {
                            this.fieldsValidation(this.state.mobile_number, this.state.user_email, this.state.password, this.state.confirm_password)
                        }}
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
            )
        } else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="white" />
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
                        <Label style={{ color: 'white', marginTop: 5, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.mobile_number : translation.en.mobile_number}</Label>
                        <Input
                            keyboardType="numeric"
                            onChangeText={value => { this.setState({ mobile_number: value }) }}
                            style={{ fontSize: 20, padding: 10, color: 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label style={{ color: 'white', marginTop: 5, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.email : translation.en.email}</Label>
                        <Input
                            onChangeText={value => { this.setState({ user_email: value }) }}
                            style={{ fontSize: 20, padding: 10, color: 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label style={{ color: 'white', marginTop: 5, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.password : translation.en.password}</Label>
                        <Input
                            onChangeText={value => { this.setState({ password: value }) }}
                            style={{ fontSize: 20, padding: 10, color: 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label style={{ color: 'white', marginTop: 5, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.confirm_password : translation.en.confirm_password}</Label>
                        <Input
                            onChangeText={value => { this.setState({ confirm_password: value }) }}
                            style={{ fontSize: 20, padding: 10, color: 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                </View>
                <Text style={{ color: 'red', fontWeight: '700', padding: 20 }}>{this.state.errorMsg}</Text>
                {
                    this.renderActivityIndicator(this.state.isLoading)
                }
            </ImageBackground>
        );
    }
}

export default RegisterScreen;