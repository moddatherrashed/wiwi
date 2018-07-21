import React, { Component } from 'react'
import { View, Text } from 'react-native'
import OrderScreenComponent from '../../components/SettingScreenComponent/OrderHistoryComponent'
import ChangeNumberComponent from '../../components/SettingScreenComponent/ChangeNumberComponent'
class SettingsViewerScreen extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => ({

        title: `${navigation.state.params.title}`,


    })

    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        switch (id) {
            case '1':
                return (
                    <ChangeNumberComponent />
                )
                break;
            case '2':
                return (
                    <OrderScreenComponent />
                )
                break;
            case '3':
                return (
                    <View><Text>Change Language</Text></View>
                )
                break;
            case '4':
                return (
                    <View><Text>Send Report</Text></View>
                )
                break;
            case '5':
                return (
                    <View><Text>Contact Us</Text></View>
                )
                break;
            case '6':
                return (
                    <View><Text>Logout</Text></View>
                )
                break;
        }
    }
}

export default SettingsViewerScreen