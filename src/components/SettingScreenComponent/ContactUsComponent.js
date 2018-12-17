import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, I18nManager, Clipboard, SafeAreaView } from 'react-native'
import translation from './../../controllers/translation'
import Toast from 'react-native-easy-toast'
import call from 'react-native-phone-call'


const viewportWidth = Dimensions.get('window').width

class ChangeNumberComponent extends Component {

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: '700', padding: 20, fontSize: 18, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.mobile_number : translation.en.mobile_number}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            const args = {
                                number: '962774044019', // String value with the number to call
                                prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
                              }
                            call(args).catch(console.error)
                        }}
                    >
                        <Text style={{ marginLeft: 24, marginRight: 24, paddingBottom: 15, fontSize: 18, borderBottomColor: 'gray', borderBottomWidth: 0.5, textAlign: 'left' }}>00962774044019</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: '700', padding: 20, fontSize: 18, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.email : translation.en.email}</Text>
                    <TouchableOpacity onPress={() => {
                        Clipboard.setString("support@wiwijo.com");
                        this.refs.toast.show('Email Copied');
                    }}>
                        <Text style={{ marginLeft: 24, marginRight: 24, paddingBottom: 15, fontSize: 18, borderBottomColor: 'gray', borderBottomWidth: 0.5, textAlign: 'left' }}>support@wiwijo.com</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }} >
                    <Text style={{ fontWeight: '700', padding: 20, fontSize: 18, textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.our_social_media : translation.en.our_social_media}</Text>
                    <View style={{ flexDirection: 'row', flex: 3 }}>
                        <TouchableOpacity 
                            onPress={()=>{
                                this.props.navigation.navigate('CustomWebView',{
                                    url : 'https://www.facebook.com/'
                                })
                            }}
                        style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../Icons/Facebook.png')}
                                style={{ height: 40, width: 40 }} />
                            <Text style={{ color: 'gray' }}>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate('CustomWebView',{
                                url : 'https://www.facebook.com/'
                            })
                        }}
                        style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../Icons/Instagram.png')}
                                style={{ height: 40, width: 40 }} />
                            <Text style={{ color: 'gray' }}>Instagram</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{
                            this.props.navigation.navigate('CustomWebView',{
                                url : 'https://www.facebook.com/'
                            })
                        }}
                        style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../Icons/Web.png')}
                                style={{ height: 40, width: 40 }} />
                            <Text style={{ color: 'gray' }}>Website</Text>
                        </TouchableOpacity>
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
                <Toast
                    style={{
                        backgroundColor: '#638bba'
                    }}
                    positionValue={200}
                    ref="toast" />
            </View>
        )
    }
}

export default ChangeNumberComponent


