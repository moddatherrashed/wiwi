import React, { Component } from 'react'
import { Button, Label, Input, Item } from 'native-base'
import { View, Text } from 'react-native'

class ChangePassword extends Component {

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ margin: 10, paddingTop: 30 }}>
                    <Item floatingLabel>
                        <Label>Old Password</Label>
                        <Input
                            keyboardType="numeric"
                            style={{ fontSize: 20, padding: 10 }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label>New Password</Label>
                        <Input
                            keyboardType="numeric"
                            style={{ fontSize: 20, padding: 10 }}
                            underlineColorAndroid='transparent' />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label>Confirm Password</Label>
                        <Input
                            keyboardType="numeric"
                            style={{ fontSize: 20, padding: 10 }}
                            underlineColorAndroid='transparent' />
                    </Item>
                </View>
                <View style={{
                    alignSelf: 'center',
                    flex: 1
                }}>
                    <Button rounded
                        style={{
                            backgroundColor: '#638bba',
                            borderRadius: 25,
                            borderColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 200,
                            marginTop: 20,
                            borderWidth: 1
                        }} >
                        <Text style={{ fontWeight: '700', color: 'white' }}>Change</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default ChangePassword;
