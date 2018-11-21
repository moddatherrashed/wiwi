import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, AsyncStorage, FlatList, I18nManager } from 'react-native'
import Image from 'react-native-remote-svg'
import Modal from 'react-native-modal'
import { Button } from 'native-base'
import { Updates } from 'expo'
import translation from './../../src/controllers/translation'


const viewportWidth = Dimensions.get('window').width

class SettingsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            settingList: [
                {
                    id: '1',
                    image: require('../Icons/Location.png'),
                    title: I18nManager.isRTL ? translation.ar.location : translation.en.location
                },
                {
                    id: '2',
                    image: require('../Icons/OrderHistory.png'),
                    title: I18nManager.isRTL ? translation.ar.order_history : translation.en.order_history
                },
                {
                    id: '3',
                    image: require('../Icons/ChangeMobileNumber.png'),
                    title: I18nManager.isRTL ? translation.ar.change_mobile_number : translation.en.change_mobile_number
                },
                {
                    id: '4',
                    image: require('../Icons/changePassword.png'),
                    title: I18nManager.isRTL ? translation.ar.change_password : translation.en.change_password
                },
                {
                    id: '5',
                    image: require('../Icons/ChangeLanguage.png'),
                    title: I18nManager.isRTL ? translation.ar.change_language : translation.en.change_language
                },
                {
                    id: '6',
                    image: require('../Icons/SendReport.png'),
                    title: I18nManager.isRTL ? translation.ar.send_report : translation.en.send_report
                },
                {
                    id: '7',
                    image: require('../Icons/ContactUs.png'),
                    title: I18nManager.isRTL ? translation.ar.contact_us : translation.en.contact_us
                },
                {
                    id: '8',
                    image: require('../Icons/Logout.png'),
                    title: I18nManager.isRTL ? translation.ar.logout : translation.en.logout
                }
            ],
            isVisible: false,
            checked: I18nManager.isRTL ? 'ar' : 'en'
        }
    }


    _languageSelector(language) {
        if (language === 'en') {
            I18nManager.forceRTL(false)
            Updates.reload()
        } else {
            I18nManager.forceRTL(true)
            Updates.reload()
        }

    }

    render() {
        return (
            <View style={styles.screenContainer}>
                <FlatList
                    contentContainerStyle={styles.contentContainerStyle}
                    data={this.state.settingList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                if (item.id === '5') {
                                    this.setState({ isVisible: true })
                                } else if (item.id === '8') {
                                    AsyncStorage.removeItem('user_id')
                                    this.props.navigation.navigate('Auth')
                                } else {
                                    this.props.navigation.navigate('SettingsViewerScreen', {
                                        id: item.id,
                                        title: item.title
                                    })
                                }
                            }}
                            style={styles.singleItemStyle}>
                            <View style={styles.singleItemInnerConatiner}>
                                <Image
                                    style={styles.imageItemStyle}
                                    source={item.image}
                                    resizeMode='contain'
                                />
                                <Text style={styles.textItemStyle}>{item.title}</Text>

                            </View>
                        </TouchableOpacity>
                    }
                />
                <View style={styles.logoBackgroundContainerStyle}>
                    <Image source={require('../BG/Pattern.png')} style={styles.logoBackgroundStyle} />
                </View>
                <Modal
                    isVisible={this.state.isVisible}
                    backdropColor='#638bba'
                    onBackdropPress={() => this.setState({ isVisible: false })}
                >
                    <View style={{ height: viewportWidth * 0.7, width: viewportWidth * 0.9, backgroundColor: 'white', borderRadius: 5, alignSelf: 'center', elevation: 5 }}>
                        <View style={{ flex: 1, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#C8C8C8', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>{I18nManager.isRTL ? 'إختر اللغة' : 'Select Language'}</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        checked: 'ar'
                                    })
                                }}
                                style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                <Image source={this.state.checked === 'en' ? require('../Icons/Uncheck.png') : require('../Icons/Check.png')} resizeMode='contain' style={{ flex: 0.2, height: 24 }} />
                                <Text style={{ fontSize: 17, flex: 0.8 }}>{I18nManager.isRTL ? 'العربية' : 'Arabic'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        checked: 'en'
                                    })
                                }} style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                <Image source={this.state.checked === 'ar' ? require('../Icons/Uncheck.png') : require('../Icons/Check.png')} resizeMode='contain' style={{ flex: 0.2, height: 24 }} />
                                <Text style={{ fontSize: 17, flex: 0.8 }}>{I18nManager.isRTL ? 'الإنجليزية' : 'English'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', borderTopColor: '#C8C8C8', borderTopWidth: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Button transparent
                                onPress={() => {
                                    this.setState({
                                        isVisible: false
                                    })
                                }}
                                style={{ margin: 15, alignSelf: 'center' }}>
                                <Text style={{ fontSize: 17, color: '#638bba' }}>{I18nManager.isRTL ? 'إلغاء' : 'Cancel'}</Text>
                            </Button>
                            <Button transparent
                                onPress={() => {
                                    this._languageSelector(this.state.checked)
                                }}
                                style={{ margin: 15, alignSelf: 'center' }}>
                                <Text style={{ fontSize: 17, color: '#638bba' }}>{I18nManager.isRTL ? 'تم' : 'Ok'}</Text>
                            </Button>

                        </View>
                    </View>
                </Modal>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainerStyle: {
        margin: 2,
    },
    singleItemStyle: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
       // elevation: 15,
       // shadowOffset: { height: 0, width: 0 },
       // shadowColor: 'black',
        //shadowOpacity: 0.3,
        width: '100%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        padding: 8
    },
    singleItemInnerConatiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageItemStyle: {
        height: viewportWidth * 0.1,
        width: viewportWidth * 0.11,
        margin: 4
    },
    textItemStyle: {
        color: 'black',
        margin: 10
    },
    logoBackgroundContainerStyle: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        right: 0,
        bottom: 0
    },
    logoBackgroundStyle: {
        width: viewportWidth * 0.55,
        height: viewportWidth * 0.4,
        padding: 5,
        alignSelf: 'flex-end',
        right: 0,
        bottom: 0
    }
})
export default SettingsScreen