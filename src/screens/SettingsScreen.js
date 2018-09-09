import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, FlatList } from 'react-native'
import Image from 'react-native-remote-svg'
import Modal from 'react-native-modal'
import { Button } from 'native-base'

const viewportWidth = Dimensions.get('window').width

class SettingsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            settingList: [
                {
                    id: '1',
                    image: require('../Icons/Location.png'),
                    title: 'Location'
                },
                {
                    id: '2',
                    image: require('../Icons/OrderHistory.png'),
                    title: 'Order History'
                },
                {
                    id: '3',
                    image: require('../Icons/ChangeMobileNumber.png'),
                    title: 'Change Mobile Number'
                },
                {
                    id: '4',
                    image: require('../Icons/changePassword.png'),
                    title: 'Change Password'
                },
                {
                    id: '5',
                    image: require('../Icons/ChangeLanguage.png'),
                    title: 'Change Language'
                },
                {
                    id: '6',
                    image: require('../Icons/SendReport.png'),
                    title: 'Send Report'
                },
                {
                    id: '7',
                    image: require('../Icons/ContactUs.png'),
                    title: 'Contact Us'
                },
                {
                    id: '8',
                    image: require('../Icons/Logout.png'),
                    title: 'Logout'
                }
            ],
            isVisible: false
        }
    }

    render() {
        return (
            <View style={styles.screenContainer}>
                <FlatList
                    contentContainerStyle={styles.contentContainerStyle}
                    data={this.state.settingList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                item.id !== '5' ? this.props.navigation.navigate('SettingsViewerScreen', {
                                    id: item.id,
                                    title: item.title
                                }) : this.setState({ isVisible: true })
                            }}
                            style={styles.singleItemStyle}>
                            <View style={styles.singleItemInnerConatiner}>
                                <Image
                                    style={styles.imageItemStyle}
                                    source={item.image}
                                    resizeMode='contain'
                                />
                                <Text style={styles.textItemStyle}>{item.title}</Text>

                            </View>
                        </TouchableOpacity>
                    }
                />
                <View style={styles.logoBackgroundContainerStyle}>
                    <Image source={require('../BG/Pattern.png')} style={styles.logoBackgroundStyle} />
                </View>
                <Modal
                    isVisible={this.state.isVisible}
                    backdropColor='#638bba'
                    onBackdropPress={() => this.setState({ isVisible: false })}
                >
                    <View style={{ height: viewportWidth * 0.7, width: viewportWidth * 0.9, backgroundColor: 'white', borderRadius: 5, alignSelf: 'center', elevation: 5 }}>
                        <View style={{ flex: 1, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#C8C8C8', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Select Language</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                            <Image source={require('../Icons/Uncheck.png')} resizeMode='contain' style={{ flex: 0.2, height: 24 }} />
                                <Text style={{ fontSize: 17, flex: 0.8 }}>Arabic</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                            <Image source={require('../Icons/Check.png')} resizeMode='contain' style={{ flex: 0.2, height: 24 }} />
                                <Text style={{ fontSize: 17, flex: 0.8 }}>English</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', borderTopColor: '#C8C8C8', borderTopWidth: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Button transparent
                                style={{ margin: 15, alignSelf: 'center' }}>
                                <Text style={{ fontSize: 17, color: '#638bba' }}>Cancel</Text>
                            </Button>
                            <Button transparent
                                style={{ margin: 15, alignSelf: 'center' }}>
                                <Text style={{ fontSize: 17, color: '#638bba' }}>Ok</Text>
                            </Button>

                        </View>
                    </View>
                </Modal>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainerStyle: {
        margin: 2,
    },
    singleItemStyle: {
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
    },
    singleItemInnerConatiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageItemStyle: {
        height: viewportWidth * 0.1,
        width: viewportWidth * 0.11,
        margin: 4
    },
    textItemStyle: {
        color: 'black',
        margin: 10
    },
    logoBackgroundContainerStyle: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        right: 0,
        bottom: 0
    },
    logoBackgroundStyle: {
        width: viewportWidth * 0.55,
        height: viewportWidth * 0.4,
        padding: 5,
        alignSelf: 'flex-end',
        right: 0,
        bottom: 0
    }
})
export default SettingsScreen