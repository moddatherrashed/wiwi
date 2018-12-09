import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ResturantsListComponent from './../../components/HomeScreenComponents/ResturantsListComponent'


class CatagoryViewerScreen extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.ItemTitle}`,
        headerTintColor: '#638bba',
    })

    ////////// in the resturant component should be tab navigator from the App.js
    //shows two screens in All whcih is all items and offers screen which is the offers

    render() {
        const { navigation } = this.props;
        const ItemTitle = navigation.getParam('ItemTitle');
        switch (ItemTitle) {
            case 'Resturant':
                return (
                    <ResturantsListComponent navigation={this.props.navigation} />
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