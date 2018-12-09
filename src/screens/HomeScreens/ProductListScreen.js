import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet, I18nManager, Text, ActivityIndicator } from 'react-native';
import ProductComponent from '../../components/HomeScreenComponents/ProductComponent'
import ApiController from './../../controllers/ApiController'

class ProductListScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            isLoading: false,
            status: 0
        }
    }


    componentDidMount() {
        this.setState({
            isLoading: true
        })
        //alert(this.props.navigation.state.params.extensionId)
        ApiController.get_products(this.props.navigation.state.params.extensionId).then((response) => {
            this.setState({
                products: response.products,
                isLoading: false,
                status: response.status
            })

            alert(JSON.stringify(response.status))
        }).catch((err) => {
            this.setState({
                isLoading: false,
                status: 0
            })
            console.log(err)
        })
    }
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.extentionName}`,
        headerTintColor: '#638bba',
        })

    renderProductsList(isLoading, products) {
        const { extentionName, resturantName, resturantImage, resturantId } = this.props.navigation.state.params

        if (isLoading) {
            return (
                <View style={{ marginTop: 100 }}>
                    <ActivityIndicator size="large" color="#638bba" />
                </View>
            )
        } else {
            if (this.state.status === 1) {
                return (
                    <FlatList
                        horizontal={false}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.listConatinerStyle}
                        data={products}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('ProductViewerScreen', {
                                        productId: item.id,
                                        resturantId: resturantId,
                                        productName: I18nManager.isRTL ? item.name_ar : item.name_en,
                                        productImage: item.image,
                                        productPrice: item.price,
                                        productQuantity: 1,
                                        productDescription: I18nManager.isRTL ? item.description_ar : item.description_en,
                                        extentionName: extentionName,
                                        resturantName: resturantName,
                                        resturantImage: resturantImage
                                    })


                                }}
                                style={{
                                }}>
                                <ProductComponent
                                    productId={item.id}
                                    productDescription={item.description}
                                    productQuantity={1}
                                    productName={I18nManager.isRTL ? item.name_ar : item.name_en}
                                    productPrice={item.price}
                                    productImage={item.image}
                                    extentionName={extentionName}
                                    resturantName={resturantName}
                                    navigation={this.props.navigation} />
                            </TouchableOpacity>
                        }
                    />

                )
            } else {
                return (
                    <Text style={{ alignSelf: 'center', fontSize: 25, paddingTop: 10 }}>{I18nManager.isRTL ? 'لا يوجد عناصر' : 'There is not items available'}</Text>
                )
            }
        }
    }

    render() {
        return (
            <View style={styles.screenContainerStyle}>
                {
                    this.renderProductsList(this.state.isLoading, this.state.products)
                }
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