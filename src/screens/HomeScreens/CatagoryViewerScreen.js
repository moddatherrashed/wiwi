import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ResturantComponent from './../../components/HomeScreenComponents/ResturantComponent'


class CatagoryViewerScreen extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => ({

        title: `${navigation.state.params.ItemTitle}`,


    })

    render() {
        const { navigation } = this.props;
        const ItemTitle = navigation.getParam('ItemTitle');
        switch (ItemTitle) {
            case 'Resturant':
                return (
                    <ResturantComponent />
                )
                break;
            case 'Home':
                return (
                    <View><Text>Change Language</Text></View>
                )
                break;
            case 'Electronic':
                return (
                    <View><Text>Change Language</Text></View>
                )
                break;
            case 'Market':
                return (
                    <View><Text>Send Report</Text></View>
                )
                break;
        }
    }
}

export default CatagoryViewerScreen