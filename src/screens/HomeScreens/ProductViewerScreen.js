import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { Button } from 'native-base'

const viewportWidth = Dimensions.get('window').width


class ProductViewerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productQuintity: 1
        }
    }

    scalling(size) {
        return viewportWidth * (size / viewportWidth)
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.productName}`
    })
    render() {
        const { navigation } = this.props
        return (
            <ScrollView style={styles.scrollScreenContainerStyle}>
                <View style={styles.screenViewContainerStyle}>
                    <Image
                        resizeMode='cover'
                        source={{ uri: navigation.getParam('productImage') }}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={{ borderWidth: 0.5, borderColor: '#B8B8B8', height: this.scalling(100), margin: this.scalling(15) }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{ padding: this.scalling(5), fontSize: this.scalling(18), flex: 0.5 }}>{navigation.getParam('productPrice')} JOD</Text>
                        <View style={{ padding: this.scalling(5), flex: 0.5 }}>
                            <TouchableOpacity style={{ height: this.scalling(22), width: this.scalling(24), alignSelf: 'flex-end' }}>
                                <Image source={require('../../ProductIcons/addToFavo.png')} style={{ height: null, width: null, flex: 1 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ padding: this.scalling(5), fontSize: this.scalling(12) }}>Burger with tomato and onions with some french fries</Text>
                </View>
                <Text style={{ fontSize: this.scalling(18), marginLeft: this.scalling(20) }}>Quantity</Text>
                <View style={{ height: this.scalling(50), borderWidth: 0.5, borderColor: '#B8B8B8', margin: this.scalling(15), flexDirection: 'row', flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                productQuintity: this.state.productQuintity + 1
                            })
                        }}
                        style={{ height: this.scalling(24), width: this.scalling(24), alignSelf: 'center' }}
                    >
                        <Image source={require('../../Icons/Plus.png')} style={{ height: null, width: null, flex: 1 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: this.scalling(18), textAlign: 'center', flex: 0.5 }}>{this.state.productQuintity}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            if (this.state.productQuintity > 1)
                                this.setState({
                                    productQuintity: this.state.productQuintity - 1
                                })
                        }}
                        style={{ height: this.scalling(24), width: this.scalling(24), alignSelf: 'center' }}>
                        <Image source={require('../../Icons/Minus.png')} style={{ height: null, width: null, flex: 1 }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: this.scalling(18), marginLeft: this.scalling(20) }}>Notes</Text>
                <View style={{ borderWidth: 0.5, borderColor: '#B8B8B8', height: this.scalling(90), margin: this.scalling(15) }}>

                </View>
                <View style={{
                    alignSelf: 'center',
                    margin: this.scalling(10)
                }}>
                    <Button rounded
                        style={{
                            backgroundColor: '#638bba',
                            borderRadius: this.scalling(25),
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: this.scalling(200),
                        }} onPress={() => { }}>
                        <Text style={{ fontWeight: '700', color: 'white' }}>Add To Cart</Text>
                    </Button>
                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    scrollScreenContainerStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    screenViewContainerStyle: {
        width: viewportWidth,
        height: viewportWidth / 1.5
    },
    imageStyle: {
        height: null,
        width: null,
        flex: 1
    }
})
export default ProductViewerScreen;
