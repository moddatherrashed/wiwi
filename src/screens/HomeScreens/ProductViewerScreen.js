import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Button } from 'native-base'

class ProductViewerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1.5 }}>
                    <Image
                        resizeMode='contain'
                        source={{ uri: 'https://images5.alphacoders.com/415/415257.jpg' }}
                        style={{
                            height: null,
                            width: null,
                            flex: 1
                        }}
                    />
                </View>
                <View style={{ flex: 2.5 }}>
                    <View style={{ borderWidth: 0.5, flex: 0.6, margin: 10 }}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Text style={{ padding: 5, fontSize: 18, flex: 0.5 }}>5.30 JOD</Text>
                            <View style={{ padding: 5, flex: 0.5 }}>
                                <TouchableOpacity style={{ height: 22, width: 24, alignSelf: 'flex-end' }}>
                                    <Image source={require('../../ProductIcons/addToFavo.png')} style={{ height: null, width: null, flex: 1 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ padding: 5, fontSize: 12 }}>burger with tomato and french fries with one cola and just bla bla bla</Text>
                    </View>
                    <Text style={{ flex: 0.2, fontSize: 18, marginLeft: 15 }}>Quantity</Text>
                    <View style={{ flex: 0.5, borderWidth: 0.5, margin: 10, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ padding: 5, flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ height: 22, width: 22, alignSelf: 'center' }}>
                                <Image source={require('../../ProductIcons/addtocart.png')} style={{ height: null, width: null, flex: 1 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, alignSelf: 'center' }}>1</Text>
                        </View>
                        <View style={{ padding: 5, flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ height: 22, width: 22, alignSelf: 'center' }}>
                                <Image source={require('../../ProductIcons/addtocart.png')} style={{ height: null, width: null, flex: 1 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ flex: 0.2, fontSize: 18, marginLeft: 15 }}>Notes</Text>
                    <View style={{ flex: 0.6, borderWidth: 0.5, margin: 10 }}>

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
                                borderRadius: 25,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 200,
                            }} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <Text style={{ fontWeight: '700', color: 'white', fontSize: 18 }}>Add to Cart</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView >
        );
    }
}

export default ProductViewerScreen;