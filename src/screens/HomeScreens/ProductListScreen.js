import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native';
import ProductComponent from '../../components/HomeScreenComponents/ProductComponent'

class ProductListScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [
                {
                    id: 1,
                    //    itemUrl: require('../Icons/Market.svg'),
                    ItemTitle: 'Market'
                },
                {
                    id: 2,
                    //  itemUrl: require('../Icons/Home.svg'),
                    ItemTitle: 'Home'
                },
                {
                    id: 3,
                    //  itemUrl: require('../Icons/Restaurant.svg'),
                    ItemTitle: 'Resturant'
                },
                {
                    id: 4,
                    //  itemUrl: require('../Icons/Electronic.svg'),
                    ItemTitle: 'Electronic'
                },
                {
                    id: 5,
                    //  itemUrl: require('../Icons/Home.svg'),
                    ItemTitle: 'Home'
                },
                {
                    id: 6,
                    //  itemUrl: require('../Icons/Restaurant.svg'),
                    ItemTitle: 'Resturant'
                },
                {
                    id: 7,
                    //  itemUrl: require('../Icons/Electronic.svg'),
                    ItemTitle: 'Electronic'
                },
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 7,
                        paddingBottom: 10
                    }}
                    data={this.state.products}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={{
                                margin: 5
                            }}>
                            <ProductComponent navigation={this.props.navigation} />
                        </TouchableOpacity>
                    }
                />

            </View>
        )
    }
}

export default ProductListScreen