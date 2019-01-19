import React, { Component } from 'react'
import { View, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, I18nManager, ScrollView, SafeAreaView } from 'react-native'
import ProductComponent from '../../components/HomeScreenComponents/ProductComponent'
import { Button } from 'native-base'
import ApiController from '../../controllers/ApiController'

const viewportWidth = Dimensions.get('window').width

class ItemViewerScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            sub_total: 0,
            delivery_cost: 0,
            total_cost: 0,
            is_fixed_cost_flag: '',
            delivery_cost_if_not_fixed: 0
        }
    }
    count_sub_total(type) {
        let subTotal = 0
        if (this.state.products !== '') {
            this.state.products.map((obj) => {
                subTotal += parseFloat(obj.itemPrice) * obj.productQuintity
            })
        }
        if (type === 'total') {
            return this.state.delivery_cost + subTotal
        }
        return subTotal
    }
    is_fix_cost_fun(rest_name) {
        ApiController.is_fixed_cost(rest_name).then(res => {
            //alert(JSON.stringify(res.data[0].is_fixed_delivery))
            this.setState({
                is_fixed_cost_flag: res.data[0].is_fixed_delivery,
                delivery_cost: res.data[0].is_fixed_delivery === '1' ? parseFloat(res.data[0].fixed_delivery_value) : 0,
                delivery_cost_if_not_fixed: res.data[0].is_fixed_delivery === '0' ? parseFloat(res.data[0].fixed_delivery_value) : 0
            })
        })
    }
    static navigationOptions = () => ({
        title: 'Cart',
        headerTintColor: '#638bba',
    })
    componentDidMount() {

        this.setState({
            products: this.props.navigation.getParam('resturantItems')
        })
        this.is_fix_cost_fun(this.props.navigation.getParam('resturantItems')[0].resturantName)
    }

    render() {
        //const { resturantName } = this.props.navigation.state.params
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ paddingBottom: 330 }}>
                    <FlatList
                        horizontal={false}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.listConatinerStyle}
                        data={this.state.products}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('ProductViewerScreen', {
                                        productId: item.id,
                                        productName: item.itemName,
                                        productImage: item.itemImg,
                                        productPrice: item.itemPrice,
                                        productQuantity: item.productQuintity,
                                        productDescription: item.itemDescreption,
                                        resturantName: item.resturantName,
                                        resturantImage: item.resturantImage
                                    })
                                }}
                                style={{
                                }}>
                                <ProductComponent
                                    productId={item.id}
                                    productDescription={item.itemDescreption}
                                    productQuantity={item.productQuintity}
                                    productName={item.itemName}
                                    productPrice={item.itemPrice}
                                    productImage={item.itemImg}
                                    productQuantityCartScreen={item.productQuintity}
                                    onIncPressed={() => {
                                        let CopiedState = [...this.state.products]
                                        let newQuantity = ++this.state.products[index].productQuintity
                                        CopiedState[index].productQuintity = newQuantity
                                        this.setState({
                                            products: CopiedState
                                        })
                                    }}
                                    onDecPressed={() => {
                                        if (this.state.products[index].quantity !== 1) {
                                            let CopiedState = [...this.state.products]
                                            let newQuantity = --this.state.products[index].productQuintity
                                            CopiedState[index].productQuintity = newQuantity
                                            this.setState({
                                                products: CopiedState
                                            })
                                        }
                                    }}
                                    cartScreenFlag={true}
                                    resturantName={item.resturantName}
                                    resturantImage={item.resturantImage}
                                    navigation={this.props.navigation} />
                            </TouchableOpacity>
                        }
                    />
                </View>
                <SafeAreaView style={{
                    flex: 1,
                    justifyContent: 'center',
                    borderTopColor: '#D3D3D3',
                    borderTopWidth: 1,
                    marginTop: 30,

                    backgroundColor: 'white',
                    position: 'absolute',
                    zIndex: 1000,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        flex: 2,
                        marginTop: 20,
                        marginBottom: 5,
                    }}>
                        <Text style={{ color: 'gray', fontSize: 18, flex: 1, textAlign: 'left', padding: 10 }}>Subtotal</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '700', flex: 1, textAlign: 'right', padding: 10 }}>{this.count_sub_total()} JOD</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 2, marginBottom: 10 }}>
                        <Text style={{ color: 'gray', fontSize: 18, flex: 1, textAlign: 'left', padding: 10 }}>Delivery</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '700', flex: 1, textAlign: 'right', padding: 10 }}>{this.state.delivery_cost} JOD</Text>
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
                            padding: 10,
                            textAlign: 'left'
                        }}>Order Total</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: '700',
                            marginTop: 30,
                            flex: 1,
                            padding: 10,
                            textAlign: 'right'
                        }}>{this.count_sub_total('total')} JOD</Text>
                    </View>
                    <Button rounded
                        onPress={() => {
                            this.props.navigation.navigate('CheckoutScreen', {
                                resturantName: this.state.products[0].resturantName,
                                delivery_cost: this.state.delivery_cost,
                                fixed_flag: this.state.is_fixed_cost_flag,
                                subTotal: this.count_sub_total(),
                                delivery_cost_if_not_fixed: this.state.delivery_cost_if_not_fixed
                            })
                        }}
                        style={{
                            backgroundColor: '#638bba',
                            borderRadius: 25,
                            borderColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            width: 200,
                            marginTop: 20,
                            marginBottom: 10,
                            borderWidth: 1
                        }} >
                        <Text style={{ fontWeight: '700', color: 'white' }}>Proceed</Text>
                    </Button>
                </SafeAreaView>
            </View>
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
        alignItems: 'center',
        height: 100,
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