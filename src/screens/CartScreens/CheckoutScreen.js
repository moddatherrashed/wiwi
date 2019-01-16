import React, { Component } from 'react'
import { View, Text, Dimensions, TextInput, I18nManager, ScrollView } from 'react-native'
import { Button } from 'native-base'
import translation from './../../controllers/translation'
const viewportWidth = Dimensions.get('window').width

class CheckoutScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    scalling(size) {
        return viewportWidth * (size / viewportWidth)
    }
    static navigationOptions = () => ({
        title: 'Last Step',
        headerTintColor: '#638bba',
    })
    render() {
        return (
            <ScrollView style={{
                flex: 1, backgroundColor: 'white'
            }}>
                <View style={{
                    justifyContent: 'center',
                    borderTopColor: '#D3D3D3',
                    borderTopWidth: 1,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        marginBottom: 5,
                    }}>
                        <Text style={{ color: 'gray', fontSize: 18, flex: 1, textAlign: 'left', padding: 10 }}>Subtotal</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '700', flex: 1, textAlign: 'right', padding: 10 }}>10 JOD</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginBottom: 10
                    }}>
                        <Text style={{ color: 'gray', fontSize: 18, flex: 1, textAlign: 'left', padding: 10 }}>Delivery</Text>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '700', flex: 1, textAlign: 'right', padding: 10 }}>10 JOD</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        borderTopColor: '#D3D3D3',
                        borderTopWidth: 1,
                        borderBottomColor: '#D3D3D3',
                        borderBottomWidth: 1,
                        marginBottom: 10,

                    }}>
                        <Text style={{
                            color: 'gray',
                            fontSize: 18,
                            marginTop: 10,
                            flex: 1,
                            padding: 10,
                            textAlign: 'left'
                        }}>Order Total</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: '700',
                            marginTop: 10,
                            flex: 1,
                            padding: 10,
                            textAlign: 'right'
                        }}>10 JOD</Text>
                    </View>
                </View>
                <Text style={{ color: 'gray', fontSize: 18, flex: 1, textAlign: 'left', padding: 10 }}>{I18nManager.isRTL ? translation.ar.notes : translation.en.notes}</Text>
                <TextInput
                    multiline={true}
                    style={{
                        borderWidth: 0.5, borderColor: '#B8B8B8', margin: 15, padding: 5
                    }}
                    numberOfLines={10}
                    onChangeText={(user_report) => this.setState({ user_report })}
                    value={this.state.user_report} />
                <Button rounded
                    onPress={() => {
                        this.props.navigation.navigate('CheckoutScreen')
                    }}
                    style={{
                        backgroundColor: '#638bba',
                        borderRadius: 25,
                        borderColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        width: 200,
                        marginTop: 20,
                        marginBottom: 10,
                        borderWidth: 1
                    }} >
                    <Text style={{ fontWeight: '700', color: 'white' }}>Confirm</Text>
                </Button>
            </ScrollView>
        )
    }
}

export default CheckoutScreen