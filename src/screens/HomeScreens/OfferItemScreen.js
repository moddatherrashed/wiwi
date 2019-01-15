import React, { Component } from 'react'
import ResturantComponent from './../../components/HomeScreenComponents/ResturantComponent'

class OfferItemScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ResturantComponent type='offers' navigation={this.props.navigation} />
        )
    }
}

export default OfferItemScreen