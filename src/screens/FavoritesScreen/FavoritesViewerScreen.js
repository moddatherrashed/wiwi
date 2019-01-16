import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity, ScrollView, I18nManager } from 'react-native'
import ProductComponent from '../../components/HomeScreenComponents/ProductComponent'

const viewportWidth = Dimensions.get('window').width

class FavoritesViewerScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    static navigationOptions = () => ({
        title: 'Favorites',
        headerTintColor: '#638bba',
    })
    componentDidMount() {
        this.setState({
            products: this.props.navigation.getParam('resturantItems')
        })
        console.log('favorites viewer screen resturnat items')
        console.log(this.props.navigation.getParam('resturantItems'))
    }
    render() {
        // const { extentionName, resturantName, resturantImage } = this.props.navigation.state.params
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
                                console.log('here is the favorites screen item description ', item)

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


export default FavoritesViewerScreen;