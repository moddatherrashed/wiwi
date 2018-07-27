import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Button } from 'native-base'

const viewportWidth = Dimensions.get('window').width


class ProductViewerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1.5 }}>
                    <Image
                        resizeMode='cover'
                        source={{ uri: 'https://images5.alphacoders.com/415/415257.jpg' }}
                        style={{
                            height: null,
                            width: null,
                            flex: 1
                        }}
                    />
                </View>
                <View style={{ flex: 2.5 }}>
                    <View style={{ borderWidth: 0.5, flex: 0.6, margin: 8 }}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Text style={{ padding: viewportWidth * (5 / viewportWidth), fontSize: viewportWidth * (18 / viewportWidth), flex: 0.5 }}>5.30 JOD</Text>
                            <View style={{ padding: viewportWidth * (5 / viewportWidth), flex: 0.5 }}>
                                <TouchableOpacity style={{ height: viewportWidth * (22 / viewportWidth), width: viewportWidth * (24 / viewportWidth), alignSelf: 'flex-end' }}>
                                    <Image source={require('../../ProductIcons/addToFavo.png')} style={{ height: null, width: null, flex: 1 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ padding: viewportWidth * (5 / viewportWidth), fontSize: viewportWidth * (8 / viewportWidth) }}>burger with tomato and french fries with one cola and just bla bla bla</Text>
                    </View>
                    <Text style={{ flex: 0.2, fontSize: viewportWidth * (18 / viewportWidth), marginLeft: viewportWidth * (15 / viewportWidth) }}>Quantity</Text>
                    <View style={{ flex: 0.5, borderWidth: 0.5, margin: viewportWidth * (8 / viewportWidth), flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ padding: viewportWidth * (5 / viewportWidth), flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ height: viewportWidth * (22 / viewportWidth), width: viewportWidth * (22 / viewportWidth), alignSelf: 'center' }}>
                                <Image source={require('../../ProductIcons/addtocart.png')} style={{ height: null, width: null, flex: 1 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: viewportWidth * (18 / viewportWidth), alignSelf: 'center' }}>1</Text>
                        </View>
                        <View style={{ padding: viewportWidth * (5 / viewportWidth), flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ height: viewportWidth * (22 / viewportWidth), width: viewportWidth * (22 / viewportWidth), alignSelf: 'center' }}>
                                <Image source={require('../../ProductIcons/addtocart.png')} style={{ height: null, width: null, flex: 1 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ flex: 0.2, fontSize: viewportWidth * (18 / viewportWidth), marginLeft: viewportWidth * (15 / viewportWidth) }}>Notes</Text>
                    <View style={{ flex: 0.6, borderWidth: 0.5, margin: viewportWidth * (8 / viewportWidth) }}>

                    </View>
                    <View style={{
                        flex: 0.4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                    }}>
                        <Button rounded
                            style={{
                                backgroundColor: '#638bba',
                                borderRadius: viewportWidth * (25 / viewportWidth),
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: viewportWidth * (200 / viewportWidth),
                            }} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <Text style={{ fontWeight: '700', color: 'white', fontSize: viewportWidth * (18 / viewportWidth) }}>Add to Cart</Text>
                        </Button>
                    </View>
                </View>
            </View >
        );
    }
}

export default ProductViewerScreen;