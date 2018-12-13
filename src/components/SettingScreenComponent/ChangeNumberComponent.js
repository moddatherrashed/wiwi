import React, { Component } from 'react'
import { View, Text, Dimensions, TextInput, Image, I18nManager, ActivityIndicator, AsyncStorage } from 'react-native'
import { Button } from 'native-base'
import translation from './../../controllers/translation'
import validationController from '../../controllers/validationController'
import ApiController from '../../controllers/ApiController'

const viewportWidth = Dimensions.get('window').width

class ChangeNumberComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mobile_number: '',
            isValid: true,
            isLoading: false,
            user_id: null
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('user_id').then((item) => {
            this.setState({
                user_id: item
            })

        })

    }

    renderActivityIndicator(isLoading) {
        if (isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#638bba" />
                </View>
            )
        } else {
            return (
                <View style={{
                    alignSelf: 'center',
                }}>
                    <Button rounded
                        onPress={() => {
                            //alert(this.state.user_id)
                            this.setState({
                                isLoading: true
                            })
                            if (validationController.MOBILE_NUMBER_VALIDATOR(this.state.mobile_number)) {
                                // alert('valid')
                                ApiController.change_mobile_number(
                                    this.state.user_id,
                                    this.state.mobile_number
                                ).then((res) => {
                                    if (res.status === 1) {
                                        this.setState({
                                            isLoading: false
                                        })
                                        alert('mobile number changed')
                                    } else {
                                        this.setState({
                                            isLoading: false
                                        })
                                        alert('something went wrong')
                                    }
                                })
                            } else {
                                this.setState({
                                    isLoading: false,
                                    isValid: false
                                })
                            }
                        }}
                        style={{
                            backgroundColor: '#638bba',
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 200,
                            marginTop: 20
                        }} >
                        <Text style={{ fontWeight: '700', color: 'white' }}>{I18nManager.isRTL ? translation.ar.change : translation.en.change}</Text>
                    </Button>
                </View >
            )
        }
    }
    renderFieldErrorMessage(isValid) {
        if (isValid === false) {
            return (
                <Text style={{ alignSelf: 'center', color: 'red', fontWeight: '700', margin: 10, fontSize: 15 }}>{I18nManager.isRTL ? translation.ar.mobile_number_not_valid : translation.en.mobile_number_not_valid}</Text>
            )
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{
                    marginTop: 25,
                    paddingHorizontal: 25,
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderBottomColor: '#D3D3D3',
                    borderBottomWidth: 0.5,
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    <View
                        style={{ flexDirection: 'row', flex: 1, alignItems: 'center', padding: 5 }}>
                        <Text style={{ fontSize: 20, paddingHorizontal: 10, color: '#000000' }}>+962</Text>
                        <TextInput
                            keyboardType="numeric"
                            onChangeText={(mobile_number) => this.setState({ mobile_number, isValid: true })}
                            style={{ flex: 1, fontSize: 20 }}
                            placeholder={I18nManager.isRTL ? translation.ar.enter_your_mobile_number : translation.en.enter_your_mobile_number}
                            underlineColorAndroid='transparent' />
                    </View>
                </View>

                {
                    this.renderFieldErrorMessage(this.state.isValid)
                }
                {
                    this.renderActivityIndicator(this.state.isLoading)
                }

                <View style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    right: 0,
                    bottom: 0
                }}>
                    <Image source={require('../../BG/Pattern.png')} style={{
                        width: viewportWidth * 0.55,
                        height: viewportWidth * 0.4,
                        padding: 5,
                        alignSelf: 'flex-end',
                        right: 0,
                        bottom: 0
                    }} />
                </View>
            </View>
        )
    }
}

export default ChangeNumberComponent


