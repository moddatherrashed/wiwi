import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    ScrollView,
    ActivityIndicator,
    I18nManager
} from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import LocationItem from '../components/LocationItem';


export default class LocationAutoComplete extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <GoogleAutoComplete
                    apiKey={'AIzaSyC8XepP6Ex4CgVcqUKJ1JhoWqe2NaAS-D4'}
                    components="country:jo"
                    debounce={500}
                    language={I18nManager.isRTL ? 'ar' : 'en'}
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
                                </View>
                                {isSearching && <ActivityIndicator size="large" color="#638bba" />}
                                <ScrollView style={{ flex: 1 }}>
                                    {locationResults.map(el => (
                                        <LocationItem
                                            {...el}
                                            key={el.id}
                                            clear={clearSearchs}
                                            handler={this.props.getLocation}
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
        backgroundColor: '#fff',
        margin: 5,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        width: 400,
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