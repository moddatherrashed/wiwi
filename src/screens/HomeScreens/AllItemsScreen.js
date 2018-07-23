import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ResturantComponent from './../../components/HomeScreenComponents/ResturantComponent'
class AllItemScreen extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <ResturantComponent />
        )
    }
}

export default AllItemScreen