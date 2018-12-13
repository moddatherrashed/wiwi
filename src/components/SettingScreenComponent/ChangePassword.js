import React, { Component } from 'react'
import { Button, Label, Input, Item } from 'native-base'
import { View, Text, Image, Dimensions, I18nManager } from 'react-native'
import translation from './../../controllers/translation'

const viewportWidth = Dimensions.get('window').width

class ChangePassword extends Component {

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ margin: 10, paddingTop: 30 }}>
                    <Item floatingLabel>
                        <Label style={{ marginTop: 5, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.old_password : translation.en.old_password}</Label>
                        <Input
                            keyboardType="numeric"
                            style={{ fontSize: 20, padding: 10 }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label style={{ marginTop: 5, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.new_password : translation.en.new_password}</Label>
                        <Input
                            keyboardType="numeric"
                            style={{ fontSize: 20, padding: 10 }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label style={{ marginTop: 5, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.confirm_password : translation.en.confirm_password}</Label>
                        <Input
                            keyboardType="numeric"
                            style={{ fontSize: 20, padding: 10 }}
                            underlineColorAndroid='transparent' />
                    </Item>
                </View>
                <View style={{
                    alignSelf: 'center',
                    flex: 1
                }}>
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
                        <Text style={{ fontWeight: '700', color: 'white' }}>{I18nManager.isRTL ? translation.ar.change : translation.en.change}</Text>
                    </Button>
                </View>

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
        );
    }
}

export default ChangePassword;
