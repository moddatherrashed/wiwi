import React, { Component } from 'react';
import { WebView } from 'react-native';

class CustomWebView extends Component {

    static navigationOptions = {
        headerTintColor: '#638bba'
    }
    render() {
        const { params } = this.props.navigation.state
        return (
            <WebView
                source={{ uri: params.url }}
            />
        );
    }
}

export default CustomWebView