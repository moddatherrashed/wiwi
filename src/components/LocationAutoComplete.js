
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    ActivityIndicator,
    Image,
    TouchableOpacity
} from 'react-native';

import { GoogleAutoComplete } from 'react-native-google-autocomplete';

import LocationItem from '../components/LocationItem';

export default class LocationAutoComplete extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <GoogleAutoComplete apiKey={'AIzaSyC8XepP6Ex4CgVcqUKJ1JhoWqe2NaAS-D4'}
                    components="country:jo"
                    debounce={500}
                    minLength={3}>
                    {({
                        handleTextChange,
                        locationResults,
                        fetchDetails,
                        isSearching,
                        inputValue,
                        clearSearchs
                    }) => (
                            <React.Fragment>
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Search a places"
                                        onChangeText={handleTextChange}
                                        underlineColorAndroid='transparent'
                                        value={inputValue}
                                    />
                                    <TouchableOpacity
                                        onPress={clearSearchs}
                                        style={{ justifyContent: 'center', alignItems: 'center', padding: 5, flex: 1 }}>
                                        <Image source={require('../Icons/Cancel.png')} style={{ height: 25, width: 25 }} />
                                    </TouchableOpacity>
                                </View>
                                {isSearching && <ActivityIndicator size="large" color="#638bba" />}
                                <ScrollView style={{ flex: 1 }}>
                                    {locationResults.map(el => (
                                        <LocationItem
                                            {...el}
                                            key={el.id}
                                            fetchDetails={fetchDetails}
                                        />
                                    ))}
                                </ScrollView>
                            </React.Fragment>
                        )}
                </GoogleAutoComplete>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    textInput: {
        height: 40,
        width: 300,
        padding: 5,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 16,
    },
    inputWrapper: {
        //marginTop: 30,
        padding: 5,
        justifyContent: 'center',
        flexDirection: 'row'
    },
});