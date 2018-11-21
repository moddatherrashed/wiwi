import React, { Component } from 'react'
import { FlatList, Text, View, TouchableOpacity } from 'react-native'

class LocationHsitory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            historyList: [{
                id: 1,
                address: 'clarastrasse 18, basel switzerland'
            }, {
                id: 2,
                address: 'mullhauserstrasse 33, basel switzerland'
            }, {
                id: 3,
                address: 'eptingerstrasse 28, basel switzerland'
            }]
        }
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: '700', fontSize: 25, color: '#638bba', alignSelf: 'center', padding: 10 }}>Location History</Text>
                <FlatList
                    horizontal={false}
                    numColumns={1}
                    keyExtractor={item => (item.id).toString()}
                    contentContainerStyle={{
                        marginTop: 7,
                        paddingBottom: 10
                    }}
                    data={this.state.historyList}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                            }}
                            style={{
                            }}>
                            <View style={{ backgroundColor: 'white', margin: 5, padding: 10 }}>
                                <Text style={{ fontWeight: '400', fontSize: 18, color: 'black' }}>{item.address}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View >
        )
    }

}

export default LocationHsitory