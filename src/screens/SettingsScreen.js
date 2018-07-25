import React, { Component } from 'react'
import { View, ScrollView, Dimensions, Text, TouchableOpacity, FlatList } from 'react-native'
import Image from 'react-native-remote-svg'
import { createStackNavigator } from 'react-navigation'

const viewportWidth = Dimensions.get('window').width

class SettingsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            settingList: [
                {
                    id: '1',
                    image: require('../Icons/ChangeMobileNumber.png'),
                    title: 'Change Mobile Number'
                },
                {
                    id: '2',
                    image: require('../Icons/OrderHistory.png'),
                    title: 'Order History'
                },
                {
                    id: '3',
                    image: require('../Icons/ChangeLanguage.png'),
                    title: 'Change Language'
                },
                {
                    id: '4',
                    image: require('../Icons/SendReport.png'),
                    title: 'Send Report'
                },
                {
                    id: '5',
                    image: require('../Icons/ContactUs.png'),
                    title: 'Contact Us'
                },
                {
                    id: '6',
                    image: require('../Icons/Logout.png'),
                    title: 'Logout'
                }
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                    contentContainerStyle={{
                        margin: 2,
                    }}
                    data={this.state.settingList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SettingsViewerScreen', {
                                id: item.id,
                                title: item.title
                            })}
                            style={{
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF',
                                elevation: 15,
                                shadowOffset: { height: 0, width: 0 },
                                shadowColor: 'black',
                                shadowOpacity: 0.3,
                                width: '100%',
                                borderBottomWidth: 0.5,
                                borderBottomColor: 'gray',
                                padding: 5
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ height: viewportWidth * 0.1, width: viewportWidth * 0.11, margin: 4 }}
                                    source={item.image}
                                    resizeMode='contain'
                                />
                                <Text style={{ color: 'black', margin: 10 }}>{item.title}</Text>

                            </View>
                        </TouchableOpacity>
                    }
                />
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', right: 0, bottom: 0 }}>
                    <Image source={require('../BG/Pattern.png')} style={{ width: viewportWidth * 0.55, height: viewportWidth * 0.4, padding: 5, alignSelf: 'flex-end', right: 0, bottom: 0 }} />
                </View>
            </View>
        )
    }
}
/*
const settingStack = createStackNavigator({
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            header: null
        }
    },
    SettingsViewerScreen: { screen: SettingsViewerScreen }
})

settingStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
*/

export default SettingsScreen