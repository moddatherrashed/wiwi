import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity, I18nManager } from 'react-native'
import ProductComponent from '../../components/HomeScreenComponents/ProductComponent'
//import translation from './../../controllers/translation'

const viewportWidth = Dimensions.get('window').width

class ItemViewerScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({
            products: this.props.navigation.getParam('resturantItems')
        })
        alert(JSON.stringify(this.state.products))
    }


    render() {
        const { extentionName, resturantName, resturantImage } = this.props.navigation.state.params
        return (
            <View>
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
                                    productName: I18nManager.isRTL ? item.name_ar : item.name_en,
                                    productImage: item.image,
                                    productPrice: item.price,
                                    //productQuantity: item.productQuantity,
                                    productDescription: item.description,
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
                                // productQuantity={item.productQuantity}
                                productName={I18nManager.isRTL ? item.name_ar : item.name_en}
                                productPrice={item.price}
                                productImage={item.image}
                                extentionName={extentionName}
                                resturantName={resturantName}
                                navigation={this.props.navigation} />
                        </TouchableOpacity>
                    }
                />
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