import React, { Component } from 'react'
import { ImageBackground, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import FavoritesController from '../../controllers/FavoritesController'
import CartController from '../../controllers/CartController'
import { NavigationEvents } from 'react-navigation'

const viewportWidth = Dimensions.get('window').width

class ProductComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productQuintity: this.props.productQuantity,
            isFavo: null,
            isInCart: null
        }
    }

    componentDidMount() {
        const { productId } = this.props
        FavoritesController.isFavorite(productId).then((value) => {
            value
                ? this.setState({ isFavo: require('../../ProductIcons/addToFavo.png') })
                : this.setState({ isFavo: require('../../ProductIcons/Favo.png') })
        })

        CartController.isFavorite(productId).then((value) => {
            value
                ? this.setState({ isInCart: require('../../Icons/Cancel.png') })
                : this.setState({ isInCart: require('../../ProductIcons/AddToCart.png') })
        })
    }
    render() {
        const { productName, productImage, productPrice, productId, productDescription, resturantName, resturantImage } = this.props
        const { catagoryName } = this.props.navigation.state.params
        return (
            <View style={{
                backgroundColor: 'white',
                margin: 5,
                elevation: 3,
                shadowOffset: { height: 0, width: 0 },
                shadowColor: 'black',
                shadowOpacity: 0.2,
                width: viewportWidth / 2 - 15,
                justifyContent: 'space-between'
            }}>
                <NavigationEvents
                    onWillFocus={() => {
                        const { productId } = this.props
                        FavoritesController.isFavorite(productId).then((value) => {
                            value
                                ? this.setState({ isFavo: require('../../ProductIcons/addToFavo.png') })
                                : this.setState({ isFavo: require('../../ProductIcons/Favo.png') })
                        })

                        CartController.isFavorite(productId).then((value) => {
                            value
                                ? this.setState({ isInCart: require('../../Icons/Cancel.png') })
                                : this.setState({ isInCart: require('../../ProductIcons/AddToCart.png') })
                        })
                    }}
                />
                <ImageBackground
                    source={{ uri: 'http://160.153.245.10/img/uploads/products/' + productImage }}
                    style={{
                        flex: 2.6,
                        flexDirection: 'row',
                        height: viewportWidth / 2.5,
                    }}>
                    <TouchableOpacity
                        style={{ height: 24, width: 26, margin: 5, flex: 1.3 }}
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
                                        //catagoryName: catagoryName,
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
                    >
                        <View style={{ height: 24, width: 26 }}>
                            <Image source={this.state.isFavo} resizeMode="contain" style={{ flex: 1, height: null, width: null }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 24, width: 24, margin: 5, flex: 1.3, alignItems: 'flex-end' }}
                        onPress={() => {
                            if (this.state.isInCart === require('../../ProductIcons/AddToCart.png')) {
                                this.setState({ isInCart: require('../../Icons/Cancel.png') })
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
                                this.setState({ isInCart: require('../../ProductIcons/AddToCart.png') })
                                CartController.deleteItem(productId)
                            }
                        }}>
                        <Image source={this.state.isInCart} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={{
                    flex: 1.6
                }}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontWeight: '700', padding: 5, textAlign: 'center' }}>{productName}</Text>
                        <Text>{productPrice} JOD</Text>
                    </View>
                    <View style={{
                        flex: 1.4,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={() => {
                            if (!this.props.cartScreenFlag) {
                                this.setState({
                                    productQuintity: this.state.productQuintity + 1
                                })
                            } else {
                                this.props.onIncPressed()
                                this.setState({
                                    productQuintity: this.state.productQuintity + 1
                                })
                            }
                        }}>
                            <Image source={require('../../Icons/Plus.png')} style={{ height: 24, width: 24, padding: 5 }} />
                        </TouchableOpacity>
                        <Text style={{ padding: 20 }}>{this.state.productQuintity}</Text>
                        <TouchableOpacity onPress={() => {
                            if (!this.props.cartScreenFlag) {
                                if (this.state.productQuintity > 1)
                                    this.setState({
                                        productQuintity: this.state.productQuintity - 1
                                    })
                            } else {
                                if (this.state.productQuintity > 1) {
                                    this.props.onDecPressed()
                                    this.setState({
                                        productQuintity: this.state.productQuintity - 1
                                    })
                                }
                            }
                        }}>
                            <Image source={require('../../Icons/Minus.png')} style={{ height: 24, width: 24, padding: 5 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}

export default ProductComponent