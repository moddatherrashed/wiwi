import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import ProductComponent from '../../components/HomeScreenComponents/ProductComponent'
class FavoritesViewerScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            FavoriteItems: this.props.navigation.state.params.items
        })
    }
    render() {
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
                                    productName: item.productName,
                                    productImage: item.productImage,
                                    productPrice: item.productPrice,
                                })
                            }}
                            style={{
                            }}>
                            <ProductComponent
                                productId={item.id}
                                productName={item.productName}
                                productPrice={item.productPrice}
                                productImage={item.productImage}
                                navigation={this.props.navigation} />
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}

export default FavoritesViewerScreen;