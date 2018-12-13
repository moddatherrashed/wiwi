import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, I18nManager } from 'react-native'
import translation from './../../controllers/translation'
const viewportWidth = Dimensions.get('window').width

class ChangeNumberComponent extends Component {

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: '700', padding: 20, fontSize: 18, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.mobile_number : translation.en.mobile_number}</Text>
                    <TouchableOpacity>
                        <Text style={{ marginLeft: 24, marginRight: 24, paddingBottom: 15, fontSize: 18, borderBottomColor: 'gray', borderBottomWidth: 0.5, textAlign: 'left' }}>00962774044019</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: '700', padding: 20, fontSize: 18, textAlign: 'left'  }}>{I18nManager.isRTL ? translation.ar.email : translation.en.email}</Text>
                    <TouchableOpacity>
                        <Text style={{ marginLeft: 24, marginRight: 24, paddingBottom: 15, fontSize: 18, borderBottomColor: 'gray', borderBottomWidth: 0.5, textAlign: 'left' }}>support@wiwijo.com</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={{ fontWeight: '700', padding: 20, fontSize: 18, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.our_social_media : translation.en.our_social_media}</Text>
                    <View style={{ flexDirection: 'row', flex: 3 }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../Icons/Facebook.png')}
                                style={{ height: 40, width: 40 }} />
                            <Text style={{ color: 'gray' }}>Facebook</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../Icons/Instagram.png')}
                                style={{ height: 40, width: 40 }} />
                            <Text style={{ color: 'gray' }}>Instagram</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../Icons/Web.png')}
                                style={{ height: 40, width: 40 }} />
                            <Text style={{ color: 'gray' }}>Website</Text>
                        </View>
                    </View>
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


