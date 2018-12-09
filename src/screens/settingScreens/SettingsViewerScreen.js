import React, { Component } from 'react'
import { View, Text } from 'react-native'
import OrderScreenComponent from '../../components/SettingScreenComponent/OrderHistoryComponent'
import ChangeNumberComponent from '../../components/SettingScreenComponent/ChangeNumberComponent'
import ChangePassword from '../../components/SettingScreenComponent/ChangePassword'
import SendReportComponent from '../../components/SettingScreenComponent/SendReportComponent'
import LocationScreenComponent from '../../components/SettingScreenComponent/LocationScreenComponent'
import ContactUsComponent from '../../components/SettingScreenComponent/ContactUsComponent'
class SettingsViewerScreen extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTintColor: '#638bba'
    })

    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        switch (id) {
            case '1':
                return (
                    <View style={{ flex: 1 }}>
                        <LocationScreenComponent navigation={this.props.navigation} />
                    </View>
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
                    <SendReportComponent />
                )
                break;
            case '7':
                return (
                    <ContactUsComponent />
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