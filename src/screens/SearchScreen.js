import React, { Component } from 'react'
import { TextInput, View, TouchableOpacity, FlatList, Text, I18nManager } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Icon } from 'native-base'

class SearchScreen extends Component {
    state = {
        searchData: [
            { id: 1, name: 'search result', age: 24 },
            { id: 2, name: 'search result', age: 24 },
            { id: 3, name: 'search result', age: 24 },
            { id: 4, name: 'search result', age: 24 },
            { id: 5, name: 'search result', age: 24 }
        ]
    }

    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                    <View style={{ height: 60, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderBottomColor: '#D8D8D8', borderBottomWidth: 1 }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.goBack()
                            }}
                            style={{ flex: 0.1, height: 60, justifyContent: 'center', alignItems: 'center' }} >
                            <Icon name='arrow-back' style={{
                                fontSize: 25,
                                color: 'black',
                                transform: [{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }]
                            }} />
                        </TouchableOpacity>
                        <View style={{ flex: 0.9, padding: 10, justifyContent: 'center', height: 60 }}>
                            <TextInput
                                style={{ borderWidth: 1, height: 40, padding: 8, borderColor: '#C8C8C8', backgroundColor: 'white', borderRadius: 5, borderWidth: 1, fontSize: 18 }}
                                underlineColorAndroid='transparent'
                                placeholder='Search for shops ...' />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            contentContainerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            data={this.state.searchData}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#FFFFFF',
                                    width: '100%',
                                    marginBottom: 5,
                                }} onPress={() => {

                                }}>
                                    <View style={{ flexDirection: 'row', flex: 6, borderBottomColor: '#C8C8C8', marginHorizontal: 10, borderBottomWidth: 1 }}>
                                        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text style={{ fontSize: 20, padding: 10, color: 'black', paddingHorizontal: 10 }}>{item.name}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                </View>
            </SafeAreaView >
        );
    }
}

export default SearchScreen;