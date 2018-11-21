import React, { Component } from 'react'
import { View, Text, Dimensions, Button } from 'react-native'
import LocationHistory from '../LocationHistory'
import LocationAutoComplete from '../LocationAutoComplete'
import Modal from 'react-native-modal'


const viewportWidth = Dimensions.get('window').width

class LocationScreenComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
        }
    }

    render() {
        return (
            <View>
                <Text>here is the location collector</Text>
                <Button title='pick a location' onPress={() => {
                    this.setState({
                        isVisible: true,
                    })
                }} />
                <Text style={{ color: '#000000', fontWeight: '700', fontSize: 25, alignSelf : 'center', padding: 10 }}>OR</Text>
                <Button title='get your current location' onPress={() => {
                    this.setState({
                        isVisible: true,
                    })
                }} />
                <Modal
                    isVisible={this.state.isVisible}
                    backdropColor='#638bba'
                    style={{
                        flex: 1
                    }}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                >
                    <View style={{ height: 300, padding: 10, borderRadius: 5, borderWidth: 0.5, borderColor: 'white' }}>
                        <LocationAutoComplete />

                    </View>
                </Modal>
            </View>
        )
    }
}

export default LocationScreenComponent