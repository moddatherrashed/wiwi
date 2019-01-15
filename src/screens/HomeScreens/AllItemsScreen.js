import React, { Component } from 'react'
import ResturantComponent from './../../components/HomeScreenComponents/ResturantComponent'


class AllItemScreen extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <ResturantComponent type='all' navigation={this.props.navigation}/>
        )
    }
}

export default AllItemScreen