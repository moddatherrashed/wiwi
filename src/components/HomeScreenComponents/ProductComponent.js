import React, { Component } from 'react'
import { ImageBackground, Text, View, Dimensions } from 'react-native'

const viewportWidth = Dimensions.get('window').width

class ProductComponent extends Component {
    render() {
        return (
            <View style={{
                margin: 10,
                elevation: 1,
                overflow: 'hidden',
                width: viewportWidth / 2,
                height: viewportWidth / 1.5
            }}>
                <ImageBackground
                    source={{ uri: 'https://images5.alphacoders.com/415/415257.jpg' }}
                    style={{
                        flex: 2.5,
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                    }}>
                    <Text style={{ color: 'red', flex: 1.25, padding: 5 }}>Love</Text>
                    <Text style={{ color: 'blue', flex: 1.25, textAlign: 'right', padding: 10 }}>Add</Text>
                </ImageBackground>
                <View style={{
                    flex: 1.6
                }}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Text>name</Text>
                        <Text>price</Text>
                    </View>
                    <View style={{
                        flex: 1.5,
                        flexDirection: 'row'
                    }}>
                        <Text style={{ flex: 0.5 }}>+</Text>
                        <Text style={{ flex: 0.5, textAlign: 'center' }}>counter</Text>
                        <Text style={{ flex: 0.5, textAlign: 'right' }}>-</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default ProductComponent