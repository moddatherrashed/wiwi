import React, { Component } from 'react'
import { View, Text, Dimensions, TextInput, Image, I18nManager } from 'react-native'
import { Button } from 'native-base'
import translation from './../../controllers/translation'

const viewportWidth = Dimensions.get('window').width

class ChangeNumberComponent extends Component {

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
                            style={{ flex: 1, fontSize: 20 }}
                            placeholder={I18nManager.isRTL ? translation.ar.enter_your_mobile_number : translation.en.enter_your_mobile_number}
                            underlineColorAndroid='transparent' />
                    </View>
                </View>
                <View style={{
                    alignSelf: 'center',
                }}>
                    <Button rounded
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
        )
    }
}

export default ChangeNumberComponent


