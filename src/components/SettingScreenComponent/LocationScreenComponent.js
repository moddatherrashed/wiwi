import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";

import MapView from "react-native-maps";
import { Icon } from 'native-base'

const Images = [
    { uri: "https://i.imgur.com/sNam9iJ.jpg" },
    { uri: "https://i.imgur.com/N7rlQYt.jpg" },
    { uri: "https://i.imgur.com/UDrH0wm.jpg" },
    { uri: "https://i.imgur.com/Ka8kNST.jpg" }
]

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 20;

export default class LocationScreenComponent extends Component {
    state = {
        markers: [
            {
                coordinate: {
                    latitude: 31.939347,
                    longitude: 36.006956,
                },
                title: "Home",
                description: "bla bla strees, bulding number 20",
                image: Images[0],
            },
            {
                coordinate: {
                    latitude: 45.524698,
                    longitude: -122.6655507,
                },
                title: "Work",
                description: "bla bla street, bulding number 44",
                image: Images[1],
            },
            {
                coordinate: {
                    latitude: 45.5230786,
                    longitude: -122.6701034,
                },
                title: "Moddather's place",
                description: "This is the third best place in Amman",
                image: Images[2],
            },
            {
                coordinate: {
                    latitude: 45.521016,
                    longitude: -122.6561917,
                },
                title: "Party",
                description: "This is the fourth best place in Irbid",
                image: Images[3],
            },
        ],
        region: {
            latitude: 31.939347,
            longitude: 36.006956,
            latitudeDelta: 0.0009,
            longitudeDelta: 0.0008,
        },
    };

    componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
    }
    componentDidMount() {
        // We should detect when scrolling has stopped then animate
        // We should just debounce the event listener here
        this.animation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= this.state.markers.length) {
                index = this.state.markers.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(this.regionTimeout);
            this.regionTimeout = setTimeout(() => {
                if (this.index !== index) {
                    this.index = index;
                    const { coordinate } = this.state.markers[index];
                    this.map.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: this.state.region.latitudeDelta,
                            longitudeDelta: this.state.region.longitudeDelta,
                        },
                        350
                    );
                }
            }, 10);
        });
    }

    render() {
        const interpolations = this.state.markers.map((marker, index) => {
            const inputRange = [
                (index - 1) * CARD_WIDTH,
                index * CARD_WIDTH,
                ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
                inputRange,
                outputRange: [1, 2.5, 1],
                extrapolate: "clamp",
            });
            const opacity = this.animation.interpolate({
                inputRange,
                outputRange: [0.35, 1, 0.35],
                extrapolate: "clamp",
            });
            return { scale, opacity };
        });

        return (
            <View style={styles.container}>
                <MapView
                    ref={map => this.map = map}
                    initialRegion={this.state.region}
                    style={styles.container}
                >
                    {this.state.markers.map((marker, index) => {
                        const scaleStyle = {
                            transform: [
                                {
                                    scale: interpolations[index].scale,
                                },
                            ],
                        };
                        const opacityStyle = {
                            opacity: interpolations[index].opacity,
                        };
                        return (
                            <MapView.Marker key={index} coordinate={marker.coordinate}>
                                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                                    <Animated.View style={[styles.ring, scaleStyle]} />
                                    <View style={styles.marker} />
                                </Animated.View>
                            </MapView.Marker>
                        );
                    })}
                </MapView>
                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: this.animation,
                                    },
                                },
                            },
                        ],
                        { useNativeDriver: true }
                    )}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}
                >
                    {this.state.markers.map((marker, index) => (
                        <View style={styles.card} key={index}>
                            <View style={styles.textContent}>
                                <View style={{ flexDirection: 'row', flex: 3 }}>
                                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                        <Image source={require('../../Icons/logowhite.png')} resizeMode='contain' style={{ height: 35, width: 35 }} />
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <Text style={styles.cardtitle}>{marker.title}</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <Image source={require('../../Icons/cancelWhite.png')} resizeMode='contain' style={{ height: 30, width: 30 }} />
                                    </View>
                                </View>
                                <Text style={styles.cardDescription}>
                                    {marker.description}
                                </Text>
                            </View>
                        </View>
                    ))}
                    <View style={styles.card}>
                        <View style={styles.textContent}>
                            <Text style={{ fontWeight: '700', color: '#FFFFFF', textAlign : 'center' }}>Choose your location</Text>
                            <View style={{ flexDirection: 'row', flex: 2, alignItems: 'center' }}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Icon name='md-locate' style={{ padding: 4, fontSize: 28, color: '#FFFFFF' }} />
                                    <Text style={{ color: '#FFFFFF' }}>Current location</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Icon name='ios-pin' style={{ padding: 4, fontSize: 28, color: '#FFFFFF' }} />
                                    <Text style={{ color: '#FFFFFF' }}>Drag the marker</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </Animated.ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
        padding : 5,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        padding: 10,
        elevation: 3,
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: "#638bba",
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 1,
    },
    cardtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(99,139,186, 0.9)",
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(99,139,186, 0.3)",
        position: "absolute",
        borderWidth: 5,
        borderColor: "rgba(99,139,186, 0.5)",
    },
});

