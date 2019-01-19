import React, { Component } from 'react'
import { View, Text, Dimensions, I18nManager, TextInput } from 'react-native'
import { Button } from 'native-base'
import translation from './../../controllers/translation'
import ApiController from '../../controllers/ApiController'
const viewportWidth = Dimensions.get('window').width

class SendReportComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_report: '',
            user_name: ''
        }
    }
    scalling(size) {
        return viewportWidth * (size / viewportWidth)
    }

    send_report = (user_name, user_report) => {
        if (user_name !== '' && user_report !== '') {
            ApiController.send_report(user_name, user_report).then(() => {
                alert('report sent')
            })
        } else {
            alert('all fields are required !')
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Text style={{ fontSize: this.scalling(18), marginLeft: this.scalling(20), marginTop: this.scalling(10), textAlign: 'left' }}>{I18nManager.isRTL ? 'إسمك' : 'Your name'}</Text>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={{
                        borderWidth: 0.5,
                        borderColor: '#B8B8B8',
                        margin: 15,
                        padding: 5,
                        height: 30,
                        textAlign: !I18nManager.isRTL ? 'left' : 'right'
                    }}
                    numberOfLines={10}
                    onChangeText={(user_name) => this.setState({ user_name })}
                    value={this.state.user_name} />
                <Text style={{ fontSize: this.scalling(18), marginLeft: this.scalling(20), marginTop: this.scalling(10), textAlign: 'left' }}>{I18nManager.isRTL ? translation.ar.notes : translation.en.notes}</Text>
                <TextInput
                    multiline={true}
                    underlineColorAndroid='transparent'
                    style={{
                        borderWidth: 0.5,
                        borderColor: '#B8B8B8',
                        margin: 15,
                        padding: 5,
                        height: 100,
                        textAlign: !I18nManager.isRTL ? 'left' : 'right'
                    }}
                    numberOfLines={10}
                    onChangeText={(user_report) => this.setState({ user_report })}
                    value={this.state.user_report} />
                <View style={{
                    alignSelf: 'center',
                    margin: this.scalling(10)
                }}>
                    <Button rounded
                        style={{
                            backgroundColor: '#638bba',
                            borderRadius: this.scalling(25),
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: this.scalling(200),
                        }} onPress={() => { this.send_report(this.state.user_name, this.state.user_report) }}>
                        <Text style={{ fontWeight: '700', color: 'white' }}>{I18nManager.isRTL ? translation.ar.send_report : translation.en.send_report}</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default SendReportComponent;