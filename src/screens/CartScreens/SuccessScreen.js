import React from 'react';
import { Button, SafeAreaView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { DangerZone } from 'expo';

const { Lottie } = DangerZone;
const { height, width } = Dimensions.get('window')
const sourceWidth = 1875 // the width of the animation
const sourceHeight = 10005 // the height of the animation

export default class SuccessScreen extends React.Component {
    state = {
        animation: null,
    };

    componentDidMount() {
        this._playAnimation();
    }
    static navigationOptions = () => ({
        header: null
    })
    render() {
        return (
            <SafeAreaView style={{
                backgroundColor: '#fff',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View
                    style={{
                        width: 200,
                        height: 200,
                    }}>
                    {this.state.animation &&
                        <Lottie
                            resizeMode='cover'
                            ref={animation => {
                                this.animation = animation;
                            }}
                            loop={false}
                            style={{
                                height: null,
                                width: null,
                                flex: 1,
                                backgroundColor: '#fff',
                            }}
                            source={this.state.animation}
                        />}
                </View>
                <Text
                    style={{
                        color: 'gray',
                        textAlign: 'center',
                        fontSize: 20
                    }}
                >Your order has been sent successfully</Text>
                <TouchableOpacity
                    style={{
                        //backgroundColor: '#44bd32',
                        borderColor: '#44bd32',
                        borderWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        width: 200,
                        margin: 40
                    }}>
                    <Text style={{
                        color: '#44bd32',
                        fontSize: 18,
                        padding: 10,
                    }}>Done</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    _playAnimation = () => {
        if (!this.state.animation) {
            this._loadAnimationAsync();
        } else {
            // this.animation.reset();
            this.animation.play();
        }
    };

    _loadAnimationAsync = async () => {
        let result = await fetch(
            'https://assets.lottiefiles.com/datafiles/8UjWgBkqvEF5jNoFcXV4sdJ6PXpS6DwF7cK4tzpi/Check%20Mark%20Success/Check%20Mark%20Success%20Data.json'
        )
            .then(data => {
                return data.json();
            })
            .catch(error => {
                console.error(error);
            });
        this.setState({ animation: result },
            this._playAnimation
        );
    };
}
