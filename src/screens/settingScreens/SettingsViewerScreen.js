import React, { Component } from 'react'
import { View, Text } from 'react-native'
import OrderScreenComponent from '../../components/SettingScreenComponent/OrderHistoryComponent'
import ChangeNumberComponent from '../../components/SettingScreenComponent/ChangeNumberComponent'
import ChangePassword from '../../components/SettingScreenComponent/ChangePassword'

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
                    <View><Text>Change loation</Text></View>
                )
                break;
            case '2':
                return (
                    <OrderScreenComponent />
                )
                break;
            case '3':
                return (
                    <ChangeNumberComponent />
                )
                break;
            case '4':
                return (
                    <ChangePassword />
                )
                break;
            case '5':
                return (
                    <View><Text>change language</Text></View>
                )
                break;
            case '6':
                return (
                    <View><Text>send report</Text></View>
                )
                break;
            case '7':
                return (
                    <View><Text>contact us</Text></View>
                )
                break;
            case '8':
                return (
                    <View><Text>Logout</Text></View>
                )
                break;
        }
    }
}

export default SettingsViewerScreen