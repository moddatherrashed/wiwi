import React, { Component } from 'react'
import { View,FlatList } from 'react-native';
import ProductComponent from '../../components/HomeScreenComponents/ProductComponent'

class ProductListScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <ProductComponent navigation={this.props.navigation} />
            </View>
        )
    }
}

export default ProductListScreen