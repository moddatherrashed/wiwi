import React, { Component } from 'react'
import { View, Text, Dimensions, I18nManager } from 'react-native'
import { Button } from 'native-base'
import translation from './../../controllers/translation'

const viewportWidth = Dimensions.get('window').width

class SendReportComponent extends Component {

    scalling(size) {
        return viewportWidth * (size / viewportWidth)
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Text style={{ fontSize: this.scalling(18), marginLeft: this.scalling(20), marginTop: this.scalling(10) }}>{I18nManager.isRTL ? translation.ar.notes : translation.en.notes}</Text>
                <View style={{ borderWidth: 0.5, borderColor: '#B8B8B8', height: this.scalling(200), margin: this.scalling(15) }}>

                </View>
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
                        }} onPress={() => { }}>
                        <Text style={{ fontWeight: '700', color: 'white' }}>{I18nManager.isRTL ? translation.ar.send_report : translation.en.send_report}</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default SendReportComponent;