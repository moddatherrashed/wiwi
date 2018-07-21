import React from 'react'
import { Text, View, Keyboard, Platform, Dimensions, Animated, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Icon, Button } from 'native-base'
import Image from 'react-native-remote-svg'


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    componentWillMount() {
        this.loginHeight = new Animated.Value(215)
        //ios keybored listenner
        this.KeyboardWillShowListener = Keyboard.addListener('KeyboardWillShow',
            this.KeyboardWillShow)
        this.KeyboardWillHideListener = Keyboard.addListener('KeyboardWillHide',
            this.KeyboardWillHide)

        //android keybored listnner
        this.KeyboardDidShowListener = Keyboard.addListener('KeyboardDidShow',
            this.KeyboardWillShow)
        this.KeyboardDidHideListener = Keyboard.addListener('KeyboardDidHide',
            this.KeyboardWillHide)

        this.keyboredHeight = new Animated.Value(0)
        this.forwardArrowOpacity = new Animated.Value(0)
        this.borderBottomWidth = new Animated.Value(0)
    }

    KeyboardWillShow = (event) => {
        Platform.OS === 'android'
            ?
            duration = 100
            :
            duration = event.duration
        Animated.parallel([
            Animated.timing(this.keyboredHeight, {
                duration: duration + 100,
                toValue: event.endCoordinates.height + 10
            }),
            Animated.timing(this.forwardArrowOpacity, {
                duration: duration,
                toValue: 1
            }),
            Animated.timing(this.borderBottomWidth, {
                duration: duration,
                toValue: 1
            })
        ]).start()
    }
    KeyboardWillHide = (event) => {
        Platform.OS === 'android'
            ?
            duration = 100
            :
            duration = event.duration
        Animated.parallel([
            Animated.timing(this.keyboredHeight, {
                duration: duration + 100,
                toValue: 0
            }),
            Animated.timing(this.forwardArrowOpacity, {
                duration: duration,
                toValue: 0
            }),
            Animated.timing(this.borderBottomWidth, {
                duration: duration,
                toValue: 0
            })
        ]).start()
    }


    increaseHeightOfLogin = () => {
        Animated.timing(this.loginHeight, {
            toValue: SCREEN_HEIGHT,
            duration: 500
        }).start(() => {
            this.refs.textInputMobile.focus()
        })
    }
    decreaseHeightOfLogin = () => {
        Keyboard.dismiss()
        Animated.timing(this.loginHeight, {
            toValue: 215,
            duration: 500
        }).start()
    }
    render() {
        const headerTextOpacity = this.loginHeight.interpolate({
            inputRange: [215, SCREEN_HEIGHT],
            outputRange: [1, 0]
        })

        const marginTop = this.loginHeight.interpolate({
            inputRange: [215, SCREEN_HEIGHT],
            outputRange: [25, 30]
        })
        const headerBackArrowOpacity = this.loginHeight.interpolate({
            inputRange: [215, SCREEN_HEIGHT],
            outputRange: [0, 1]
        })
        const backgroundColorLogo = this.loginHeight.interpolate({
            inputRange: [215, SCREEN_HEIGHT],
            outputRange: ['white', 'red']
        })
        const textColorLogo = this.loginHeight.interpolate({
            inputRange: [215, SCREEN_HEIGHT],
            outputRange: ['black', 'white']
        })
        const borderRadiusLogo = this.loginHeight.interpolate({
            inputRange: [215, SCREEN_HEIGHT],
            outputRange: [50, 25]
        })
        const logoHeight = this.loginHeight.interpolate({
            inputRange: [215, SCREEN_HEIGHT],
            outputRange: [100, 50]
        })
        const logoWidth = this.loginHeight.interpolate({
            inputRange: [215, SCREEN_HEIGHT],
            outputRange: [100, 50]
        })
        const logoFontSize = this.loginHeight.interpolate({
            inputRange: [215, SCREEN_HEIGHT],
            outputRange: [26, 15]
        })
        const GetFasterOpacity = this.loginHeight.interpolate({
            inputRange: [215, SCREEN_HEIGHT],
            outputRange: [1, 0]
        })
        const edges = this.loginHeight.interpolate({
            inputRange: [215, SCREEN_HEIGHT],
            outputRange: [25, 0]
        })

        return (
            <View style={{ flex: 1 }}>

                <Animated.View
                    style={{
                        position: 'absolute',
                        height: 60,
                        width: 60,
                        top: 30,
                        left: 25,
                        zIndex: 100,
                        opacity: headerBackArrowOpacity
                    }}>
                    <TouchableOpacity onPress={() => this.decreaseHeightOfLogin()}>
                        <Icon name='md-arrow-back' style={{ color: '#638bba' }} />
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View
                    style={{
                        position: 'absolute',
                        height: 60, width: 60,
                        right: 10,
                        bottom: this.keyboredHeight,
                        opacity: this.forwardArrowOpacity,
                        zIndex: 100,
                        backgroundColor: '#54575e',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30
                    }}>
                    <Icon name='md-arrow-forward' style={{ color: 'white' }} />
                </Animated.View>
                <ImageBackground
                    source={require('../BG/login.png')}
                    style={{ flex: 1 }}   >
                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Animatable.View
                            animation="zoomIn" iterationCount={1}
                            style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../Icons/logowhite.svg')} style={{ height: SCREEN_HEIGHT * 0.35, width: SCREEN_WIDTH * 0.35, marginTop: 30 }} />
                        </Animatable.View>
                    </View>
                    {/* BOTTOM HALF */}
                    <Animatable.View
                        animation="slideInUp"
                        iterationCount={1}
                    >
                        <Animated.View
                            style={{
                                height: this.loginHeight,
                                backgroundColor: 'white',
                                borderTopLeftRadius: edges,
                                borderTopRightRadius: edges,
                                elevation: 15,
                                shadowOffset: { height: 0, width: 0 },
                                shadowColor: 'black',
                                shadowOpacity: 0.3
                            }}>
                            <Animated.View
                                style={{ opacity: GetFasterOpacity, alignItems: 'flex-start', paddingHorizontal: 25, marginTop: marginTop }} >
                                <Text
                                    style={{
                                        fontSize: 24,
                                        color: '#638bba'
                                    }} >Get faster with WIWI</Text>
                            </Animated.View>
                            <TouchableOpacity
                                onPress={() => this.increaseHeightOfLogin()} >
                                <View style={{
                                    marginTop: 25,
                                    paddingHorizontal: 25,
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}>

                                    <Animated.View
                                        pointerEvents="none"
                                        style={{ flexDirection: 'row', flex: 1, alignItems: 'center', borderBottomWidth: this.borderBottomWidth }}>
                                        <Text style={{ fontSize: 20, paddingHorizontal: 10, color: '#000000' }}>+962</Text>
                                        <TextInput
                                            onSubmitEditing={() => this.decreaseHeightOfLogin()}
                                            keyboardType="numeric"
                                            ref='textInputMobile'
                                            style={{ flex: 1, fontSize: 20 }}
                                            placeholder="Enter your mobile number"
                                            underlineColorAndroid='transparent' />
                                    </Animated.View>
                                </View>
                            </TouchableOpacity>
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
                                    }} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                    <Text style={{ fontWeight: '700', color: 'white' }}>Login</Text>
                                </Button>
                            </View>
                        </Animated.View>

                    </Animatable.View>
                </ImageBackground>
            </View >
        )
    }
}
export default LoginScreen