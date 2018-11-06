import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ProductComponent from '../../components/HomeScreenComponents/ProductComponent'

class ProductListScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [
                {
                    id: 1,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef 12',
                    productPrice: 2.80,
                    productDescription: 'here is the details of the meal',
                    productQuantity: 1

                },
                {
                    id: 2,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef 43',
                    productPrice: 2.80,
                    productDescription: 'here is the details of the meal',
                    productQuantity: 1
                },
                {
                    id: 3,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef 55',
                    productPrice: 2.80,
                    productDescription: 'here is the details of the meal',
                    productQuantity: 1
                },
                {
                    id: 4,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef 221',
                    productPrice: 2.80,
                    productDescription: 'here is the details of the meal',
                    productQuantity: 1
                },
                {
                    id: 5,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef 432',
                    productPrice: 2.80,
                    productDescription: 'here is the details of the meal',
                    productQuantity: 1
                },
                {
                    id: 6,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef rr',
                    productPrice: 2.80,
                    productDescription: 'here is the details of the meal',
                    productQuantity: 1
                },
                {
                    id: 7,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef 88',
                    productPrice: 2.80,
                    productDescription: 'here is the details of the meal',
                    productQuantity: 1
                },
            ]
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.catagoryName}`,
    })

    render() {
        const { catagoryName, resturantName, resturantImage } = this.props.navigation.state.params
        return (
            <View style={styles.screenContainerStyle}>
                <FlatList
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listConatinerStyle}
                    data={this.state.products}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('ProductViewerScreen', {
                                    productName: item.productName,
                                    productImage: item.productImage,
                                    productPrice: item.productPrice,
                                    productQuantity: item.productQuantity,
                                    productDescription: item.productDescription,
                                    catagoryName: catagoryName,
                                    resturantName: resturantName,
                                    resturantImage : resturantImage
                                })

                                console.log("here is from products list : ")
                                console.log(resturantName)
                            }}
                            style={{
                            }}>
                            <ProductComponent
                                productId={item.id}
                                productDescription={item.productDescription}
                                productQuantity={item.productQuantity}
                                productName={item.productName}
                                productPrice={item.productPrice}
                                productImage={item.productImage}
                                catagoryName={catagoryName}
                                resturantName={resturantName}
                                navigation={this.props.navigation} />
                        </TouchableOpacity>
                    }
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenContainerStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    listConatinerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 7,
        paddingBottom: 10
    }
})
export default ProductListScreen