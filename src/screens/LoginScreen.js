import React from 'react'
import { Text, View, Dimensions, ImageBackground, I18nManager, AsyncStorage, ActivityIndicator } from 'react-native'
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
            isRequired: false
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('user_id').then((item) => {
            if (item) {
                this.props.navigation.navigate('App')
            }
        })
    }

    static navigationOptions = {
        header: null
    }

    renderRequestErrorMessage(login) {
        if (login) {
            return (
                <Text style={{ alignSelf: 'center', color: 'red', fontWeight: '700', margin: 10, fontSize: 15 }}>{I18nManager.isRTL ? translation.ar.login_failed : translation.en.login_failed}</Text>
            )
        }
    }
    renderFieldErrorMessage(isRequired) {
        //check if one of the fields is empty 
        if (isRequired) {
            return (
                <Text style={{ alignSelf: 'center', color: 'red', fontWeight: '700', margin: 10, fontSize: 15 }}>{I18nManager.isRTL ? translation.ar.all_fields_are_required : translation.en.all_fields_are_required}</Text>
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
                            if (this.state.mobile_number === '' || this.state.password === '') {
                                this.setState({
                                    isRequired: true
                                })
                            } else {
                                this.setState({
                                    isLoading: true,
                                    isRequired: false
                                })
                                ApiController.sign_in(this.state.mobile_number, this.state.password).then((result) => {
                                    if (result.status === 0) {
                                        this.setState({
                                            loginFaild: true,
                                            isLoading: false,
                                            isRequired: false
                                        })
                                    } else {
                                        this.setState({
                                            isLoading: false,
                                            isRequired: false
                                        })
                                        AsyncStorage.setItem('user_id', result.userID)
                                        this.props.navigation.navigate('App')
                                    }
                                }).catch((err) => {
                                    alert(err)
                                })
                            }
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
                    <Item floatingLabel >
                        <Label style={{ color: this.state.loginFaild ? 'red' : 'white', marginTop: 5, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.mobile_number : translation.en.mobile_number}</Label>
                        <Input
                            keyboardType="numeric"
                            onChangeText={value => this.setState({ mobile_number: value, loginFaild: false, isRequired: false })}
                            style={{ fontSize: 20, padding: 10, color: this.state.loginFaild ? 'red' : 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Item floatingLabel style={{
                        marginTop: 10
                    }}>
                        <Label style={{ color: this.state.loginFaild ? 'red' : 'white', marginTop: 5, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.password : translation.en.password}</Label>
                        <Input
                            secureTextEntry
                            onChangeText={value => this.setState({ password: value, loginFaild: false, isRequired: false })}
                            style={{ fontSize: 20, padding: 10, color: this.state.loginFaild ? 'red' : 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                </View>
                {
                    this.renderRequestErrorMessage(this.state.loginFaild)
                }
                {
                    this.renderFieldErrorMessage(this.state.isRequired)

                }
                <Text
                    onPress={() => {
                        this.props.navigation.navigate('ForgetPasswordScreen')
                    }}
                    style={{ alignSelf: 'flex-end', color: 'white', borderBottomColor: 'white', borderBottomWidth: 0.5, margin: 10, fontSize: 15, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.forget_password : translation.en.forget_password}</Text>
                {
                    this.renderActivitIndicator(this.state.isLoading)
                }
            </ImageBackground>
        )
    }
}
export default LoginScreen