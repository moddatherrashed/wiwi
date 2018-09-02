import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ResturantComponent from './../../components/HomeScreenComponents/ResturantComponent'

class OfferItemScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ResturantComponent navigation={this.props.navigation} />
        )
    }
}

export default OfferItemScreen