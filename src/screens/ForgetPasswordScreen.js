import React, { Component } from 'react'
import { View, Text, ImageBackground, I18nManager, Dimensions } from 'react-native'
import translation from './../controllers/translation'
import { Item, Input, Label, Button } from 'native-base'
import validationController from './../controllers/validationController'
import ApiController from './../controllers/ApiController'
import Modal from 'react-native-modal'

const viewportWidth = Dimensions.get('window').width

class ForgetPasswordScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_email: '',
            isNotValid: false,
            isVisible: false,
            serverMessage: ''
        }
    }

    static navigationOptions = {
        header: null
    }


    renderRequestErrorMessage(login) {
        if (login) {
            return (
                <Text style={{ alignSelf: 'center', color: 'red', fontWeight: '700', margin: 10, fontSize: 15 }}>{I18nManager.isRTL ? translation.ar.email_not_valid : translation.en.email_not_valid}</Text>
            )
        }
    }
    render() {
        return (
            <ImageBackground
                source={require('../BG/login.png')}
                style={{ flex: 1 }} >

                <Text
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20,
                        paddingTop: 40,
                        paddingBottom: 15,
                        fontWeight: '700'
                    }}
                >{I18nManager.isRTL ? translation.ar.enter_your_email_to_request_a_new_password : translation.en.enter_your_email_to_request_a_new_password}</Text>
                <View style={{ margin: 10, paddingTop: 30 }}>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label style={{ color: 'white', marginTop: 5 }}>{I18nManager.isRTL ? translation.ar.email : translation.en.email}</Label>
                        <Input
                            onChangeText={value => { this.setState({ user_email: value, isNotValid: false }) }}
                            style={{ fontSize: 20, padding: 10, color: 'white' }}
                            underlineColorAndroid='transparent' />
                    </Item>
                </View>
                {
                    this.renderRequestErrorMessage(this.state.isNotValid)
                }
                <View style={{
                    alignSelf: 'center',
                    paddingTop: 10,
                    justifyContent: 'center'
                }}>
                    <Button rounded
                        onPress={() => {
                            if (validationController.EMAIL_VALIDATOR(this.state.user_email)) {
                                //make the request
                                ApiController.forget_password(this.state.user_email).then((res) => {
                                    this.setState({
                                        isVisible: true,
                                        serverMessage: res.message
                                    })
                                })
                            } else {
                                this.setState({
                                    isNotValid: true
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
                        <Text style={{ fontWeight: '700', color: '#638bba' }}>{I18nManager.isRTL ? translation.ar.request_password : translation.en.request_password}</Text>
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
                <Modal
                    isVisible={this.state.isVisible}
                    backdropColor='#638bba'
                    onBackdropPress={() => this.setState({ isVisible: false })}
                >
                    <View style={{ height: viewportWidth * 0.7, width: viewportWidth * 0.9, backgroundColor: 'white', borderRadius: 5, alignSelf: 'center', elevation: 5 }}>
                        <View style={{ flex: 1, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#C8C8C8', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Request for new password</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center', paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, alignSelf: 'center' }}>{this.state.serverMessage}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', borderTopColor: '#C8C8C8', borderTopWidth: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Button transparent
                                onPress={() => {
                                   // this.setState({ isVisible: false })
                                    this.props.navigation.goBack()
                                }}
                                style={{ margin: 15, alignSelf: 'center' }}>
                                <Text style={{ fontSize: 17, color: '#638bba' }}>{I18nManager.isRTL ? 'تم' : 'Ok'}</Text>
                            </Button>

                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        )
    }
}

export default ForgetPasswordScreen