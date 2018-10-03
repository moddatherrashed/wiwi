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
                    productName: 'meal beef',
                    productPrice: 2.80

                },
                {
                    id: 2,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef',
                    productPrice: 2.80
                },
                {
                    id: 3,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef',
                    productPrice: 2.80
                },
                {
                    id: 4,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef',
                    productPrice: 2.80
                },
                {
                    id: 5,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef',
                    productPrice: 2.80
                },
                {
                    id: 6,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef',
                    productPrice: 2.80
                },
                {
                    id: 7,
                    productImage: 'https://images5.alphacoders.com/415/415257.jpg',
                    productName: 'meal beef',
                    productPrice: 2.80
                },
            ]
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
    })

    render() {
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
                                    productPrice: item.productPrice
                                })
                            }}
                            style={{
                            }}>
                            <ProductComponent
                                productName={item.productName}
                                productPrice={item.productPrice}
                                productImage={item.productImage}
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