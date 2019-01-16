import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Dimensions, TextInput, ScrollView, StyleSheet, I18nManager } from 'react-native'
import { Button } from 'native-base'
import { Header } from 'react-navigation'
import FavoritesController from '../../controllers/FavoritesController'
import CartController from '../../controllers/CartController'
import translation from '../../controllers/translation'

const viewportWidth = Dimensions.get('window').width


class ProductViewerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productQuintity: this.props.navigation.state.params.productQuantity,
            isFavo: null,
            isInCart: null,
            text: ''

        }
    }

    componentDidMount() {
        const { productId } = this.props.navigation.state.params
        FavoritesController.isFavorite(productId).then((value) => {
            value
                ? this.setState({ isFavo: require('../../ProductIcons/addToFavo.png') })
                : this.setState({ isFavo: require('../../ProductIcons/Favo.png') })
        })

        CartController.isFavorite(productId).then((value) => {
            value
                ? this.setState({ isInCart: I18nManager.isRTL ? translation.ar.remove_from_cart : translation.en.remove_from_cart })
                : this.setState({ isInCart: I18nManager.isRTL ? translation.ar.add_to_cart : translation.en.add_to_cart })
        })
    }

    scalling(size) {
        return viewportWidth * (size / viewportWidth)
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.productName}`,
        headerTintColor: '#638bba',
    })
    render() {
        const { catagoryName, resturantName, resturantImage, productName, resturantId, productImage, productPrice, productId, productDescription, productQuantity } = this.props.navigation.state.params
        return (

            <ScrollView style={styles.scrollScreenContainerStyle}>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={Header.HEIGHT + 20} // adjust the value here if you need more padding
                    behavior='position'>
                    <View style={styles.screenViewContainerStyle}>
                        <Image
                            resizeMode='cover'
                            source={{ uri: 'http://160.153.245.10/img/uploads/products/' + productImage }}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: '#B8B8B8', height: this.scalling(100), margin: this.scalling(15) }}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Text style={{ padding: this.scalling(5), fontSize: this.scalling(18), flex: 0.5, textAlign: 'left' }}>{productPrice} {I18nManager.isRTL ? translation.ar.jod : translation.en.jod}</Text>
                            <View style={{ padding: this.scalling(5), flex: 0.5 }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (this.state.isFavo === require('../../ProductIcons/Favo.png')) {
                                            this.setState({ isFavo: require('../../ProductIcons/addToFavo.png') })
                                            FavoritesController.setItem(
                                                {
                                                    id: productId,
                                                    name: productName,
                                                    descreption: productDescription,
                                                    image: productImage,
                                                    price: productPrice,
                                                    catagoryName: catagoryName,
                                                    quintity: this.state.productQuintity,
                                                    resturantName: resturantName,
                                                    resturantImage: resturantImage
                                                }
                                            )
                                        } else {
                                            this.setState({ isFavo: require('../../ProductIcons/Favo.png') })
                                            FavoritesController.deleteItem(productId)
                                        }
                                    }}
                                    style={{ height: this.scalling(22), width: this.scalling(24), alignSelf: 'flex-end' }}>
                                    <Image source={this.state.isFavo} style={{ height: null, width: null, flex: 1 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ padding: this.scalling(5), fontSize: this.scalling(12), textAlign: 'left' }}>{productDescription}</Text>
                    </View>
                    <Text style={{ fontSize: this.scalling(18), marginLeft: this.scalling(20), textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.quantity : translation.en.quantity}</Text>
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
                    <Text style={{ fontSize: this.scalling(18), marginLeft: this.scalling(20), textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.notes : translation.en.notes}</Text>
                    <TextInput
                        multiline={true}
                        autoCorrect={false}
                        style={{
                            borderWidth: 0.5, borderColor: '#B8B8B8', margin: 15, padding: 5
                        }}
                        numberOfLines={6}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text} />

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
                            }}
                            onPress={() => {
                                if (this.state.isInCart === (I18nManager.isRTL ? translation.ar.add_to_cart : translation.en.add_to_cart)) {
                                    this.setState({ isInCart: I18nManager.isRTL ? translation.ar.remove_from_cart : translation.en.remove_from_cart })
                                    CartController.setItem(
                                        {
                                            id: productId,
                                            name: productName,
                                            descreption: productDescription,
                                            image: productImage,
                                            price: productPrice,
                                            catagoryName: catagoryName,
                                            quintity: this.state.productQuintity,
                                            resturantName: resturantName,
                                            resturantImage: resturantImage
                                        }
                                    )
                                } else {
                                    this.setState({ isInCart: I18nManager.isRTL ? translation.ar.add_to_cart : translation.en.add_to_cart })
                                    CartController.deleteItem(productId)
                                }
                            }
                            }>
                            <Text style={{ fontWeight: '700', color: 'white' }}>{this.state.isInCart}</Text>
                        </Button>
                    </View>
                </KeyboardAvoidingView>
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
