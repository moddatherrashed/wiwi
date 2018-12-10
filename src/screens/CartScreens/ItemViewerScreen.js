import React, { Component } from 'react'
import { View, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, I18nManager, ScrollView } from 'react-native'
import ProductComponent from '../../components/HomeScreenComponents/ProductComponent'
import { Button } from 'native-base'
const viewportWidth = Dimensions.get('window').width

class ItemViewerScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    static navigationOptions = () => ({
        title: 'Cart',
        headerTintColor: '#638bba',
    })
    componentDidMount() {
        this.setState({
            products: this.props.navigation.getParam('resturantItems')
        })

        console.log('cart items :', this.props.navigation.getParam('resturantItems'))
    }

    render() {
       // const { extentionName, resturantImage, resturantName } = this.props.navigation.state.params
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
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
                                    productId: item.id,
                                    productName: item.itemName,
                                    productImage: item.itemImg,
                                    productPrice: item.itemPrice,
                                    productQuantity: item.productQuintity,
                                    productDescription: item.itemDescreption,
                                    //extentionName: extentionName,
                                    resturantName: item.resturantName,
                                    resturantImage: item.resturantImage
                                })

                                console.log('on press product component ====>',
                                    {
                                        productId: item.id,
                                        productName: item.itemName,
                                        productImage: item.itemImg,
                                        productPrice: item.itemPrice,
                                        productQuantity: item.productQuintity,
                                        productDescription: I18nManager.isRTL ? item.description_ar : item.description_en,
                                        //extentionName: extentionName,
                                        resturantName: item.resturantName,
                                        resturantImage: item.resturantImage
                                    }
                                )
                            }}
                            style={{
                            }}>
                            <ProductComponent
                                productId={item.id}
                                productDescription={item.productDescription}
                                productQuantity={item.productQuintity}
                                productName={item.itemName}
                                productPrice={item.itemPrice}
                                productImage={item.itemImg}
                                //extentionName={extentionName}
                                resturantName={item.resturantName}
                                resturantImage={item.resturantImage}
                                navigation={this.props.navigation} />
                        </TouchableOpacity>
                    }
                />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    borderTopColor: '#D3D3D3',
                    borderTopWidth: 1,
                    marginTop: 30,
                    paddingBottom: 30,
                    marginLeft: 20,
                    marginRight: 20
                }}>
                    <View style={{
                        flexDirection: 'row',
                        flex: 2,
                        marginTop: 20,
                        marginBottom: 5,
                    }}>
                        <Text style={{ color: 'gray', fontSize: 18, flex: 1, textAlign: 'left' }}>Subtotal</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '700', flex: 1, textAlign: 'right' }}>10.00 JOD</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 2, marginBottom: 10 }}>
                        <Text style={{ color: 'gray', fontSize: 18, flex: 1, textAlign: 'left' }}>Delivery</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '700', flex: 1, textAlign: 'right' }}>10.00 JOD</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 2,
                        marginTop: 30,
                        borderTopColor: '#D3D3D3',
                        borderTopWidth: 1,
                    }}>
                        <Text style={{
                            color: 'gray',
                            fontSize: 18,
                            marginTop: 30,
                            flex: 1,
                            textAlign: 'left'
                        }}>Order Total</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: '700',
                            marginTop: 30,
                            flex: 1,
                            textAlign: 'right'
                        }}>20.00 JOD</Text>
                    </View>
                    <Button rounded
                        onPress={() => { this.props.navigation.navigate('RegisterScreen') }}
                        style={{
                            backgroundColor: '#638bba',
                            borderRadius: 25,
                            borderColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            width: 200,
                            marginTop: 20,
                            borderWidth: 1
                        }} >
                        <Text style={{ fontWeight: '700', color: 'white' }}>Proceed</Text>
                    </Button>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    screenStyle: {
        flex: 3,
        backgroundColor: 'white'
    },
    flatListConatinerStyle: {
        padding: 10,
        flex: 2
    },
    itemMainContainerStyle: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        margin: 5,
        elevation: 1,
        shadowOffset: { height: 0, width: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
    itemContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 4
    },
    itemImageContainerStyle: {
        padding: 6,
        flex: 2
    },
    itemImageStyle: {
        height: viewportWidth * 0.21,
        width: viewportWidth * 0.21
    },
    itemTextContainerStyle: {
        padding: 6,
        flex: 2
    },
    itemTextStyle: {
        color: 'black',
        marginLeft: 12,
        marginTop: 10,
        marginBottom: 2,
        fontWeight: '700',
        fontSize: 20
    }
})


export default ItemViewerScreen;