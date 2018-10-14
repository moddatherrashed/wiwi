import React, { Component } from 'react'
import { ImageBackground, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import AsyncStorageController from '../../controllers/AsyncStorageController'

const viewportWidth = Dimensions.get('window').width

class ProductComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productQuintity: 1,
            isFavo: null,
        }
    }

    componentWillMount() {
        const { catagoryName, resturantName } = this.props.navigation.state.params
        const { productId, productName } = this.props
        AsyncStorageController.isFavorite(productId, productName, catagoryName, resturantName).then((value) => {
            value
                ? this.setState({ isFavo: require('../../ProductIcons/addToFavo.png') })
                : this.setState({ isFavo: require('../../ProductIcons/Favo.png') })
        })

    }
    render() {
        const { productName, productImage, productPrice, productId } = this.props
        const { catagoryName, resturantName, resturantImage } = this.props.navigation.state.params
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
                <ImageBackground
                    source={{ uri: productImage }}
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
                                AsyncStorageController.setItem(
                                    {
                                        id: productId,
                                        name: productName,
                                        image: productImage,
                                        price: productPrice,
                                        catagoryName: catagoryName,
                                        resturantName: resturantName,
                                        resturantImage: resturantImage
                                    }
                                )
                            } else {
                                this.setState({ isFavo: require('../../ProductIcons/Favo.png') })
                                AsyncStorageController.deleteItem(productName)
                            }
                        }}
                    >
                        <Image source={this.state.isFavo} style={{ height: 24, width: 26 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 24, width: 24, margin: 5, flex: 1.3, alignItems: 'flex-end' }}>
                        <Image source={require('../../ProductIcons/addtocart.png')} style={{ height: 24, width: 24 }} />
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
                            this.setState({
                                productQuintity: this.state.productQuintity + 1
                            })
                        }}>
                            <Image source={require('../../Icons/Plus.png')} style={{ height: 24, width: 24, padding: 5 }} />
                        </TouchableOpacity>
                        <Text style={{ padding: 20 }}>{this.state.productQuintity}</Text>
                        <TouchableOpacity onPress={() => {
                            if (this.state.productQuintity > 1)
                                this.setState({
                                    productQuintity: this.state.productQuintity - 1
                                })
                        }}>
                            <Image source={require('../../Icons/Minus.png')} style={{ height: 24, width: 24, padding: 5 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default ProductComponent