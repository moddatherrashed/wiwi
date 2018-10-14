import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList, Dimensions, ImageBackground, StyleSheet } from 'react-native'
import Image from 'react-native-remote-svg'
import ViewPagerComponent from '../components/ViewPagerComponent'
import { Pagination } from 'react-native-snap-carousel'

import { AsyncStorage } from 'react-native'


const sliderWidth = Dimensions.get('window').width
const itemWidth = (Dimensions.get('window').height) * 0.49
const viewportWidth = Dimensions.get('window').width

class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Welcome',
        headerLeft: null,
        headerRight:
            <TouchableOpacity onPress={() => { }} style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }
            }>
                <Image source={require('../Icons/Search.png')} resizeMode='contain' style={{ height: 25, width: 25, marginRight: 8 }} />
            </TouchableOpacity >
    }
    constructor(props) {
        super(props)
        this.state = {
            offers: [
                {
                    illustration: 'https://images5.alphacoders.com/415/415257.jpg'
                },
                {
                    illustration: 'https://image.freepik.com/free-photo/food-background-food-concept-with-various-tasty-fresh-ingredients-for-cooking-italian-food-ingredients-view-from-above-with-copy-space_1220-1363.jpg'
                },
                {
                    illustration: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3667914/1820/1213/m1/fpnw/wm1/mm0k1z4eopjimitemdhs6fmiqbvykaf8eubhbyldigxeuwfu2irobuuqz5pjkc1q-.jpg?1512111122&s=54f66daefac23151f5aa1b08d3c76cca'
                },
                {
                    illustration: 'https://images5.alphacoders.com/415/415257.jpg'
                }
            ],
            slider1ActiveSlide: 1,
            catgories: [
                {
                    id: 1,
                    itemUrl: require('../Icons/Market.png'),
                    ItemTitle: 'Market'
                },
                {
                    id: 2,
                    itemUrl: require('../Icons/Home.png'),
                    ItemTitle: 'Home'
                },
                {
                    id: 3,
                    itemUrl: require('../Icons/Restaurant.png'),
                    ItemTitle: 'Resturant'
                },
                {
                    id: 4,
                    itemUrl: require('../Icons/Electronic.png'),
                    ItemTitle: 'Electronic'
                },
            ]

        }
    }
    static navigationOptions = {

        tabBarLabel: 'Dashboard',
        tabBarIcon: () => (
            <Image source={require('../Icons/Dashboard.png')} style={{ height: 24, width: 24 }} />
        )

    }
    _renderItem({ item }) {
        return (
            <ImageBackground style={styles.offerItemStyle}
                source={{ uri: item.illustration }}>
            </ImageBackground>
        );
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <Text style={{ padding: 10, color: 'black', fontWeight: '700', fontSize: viewportWidth * 0.04 }}>Offers</Text>
                <View>
                    <ViewPagerComponent
                        renderItem={this._renderItem}
                        offers={this.state.offers}
                        slider1ActiveSlide={(index) => this.setState({ slider1ActiveSlide: index })}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                    />
                    <Pagination
                        dotsLength={this.state.offers.length}
                        activeDotIndex={this.state.slider1ActiveSlide}
                        dotColor={'#638bba'}
                        dotStyle={styles.dotStyle}
                        containerStyle={styles.paginationContainerStyle}
                        inactiveDotColor={'white'}
                        inactiveDotOpacity={1}
                        inactiveDotStyle={styles.inactiveDotStyle}
                        inactiveDotScale={1}
                        carouselRef={this._carousel}
                        tappableDots={!!this._carousel} />
                </View>
                <Text style={styles.catagoryContainerStyle}>Catagory</Text>
                <FlatList
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.flatListConatinerStyle}
                    data={this.state.catgories}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('CatagoryViewerScreen', {
                                ItemTitle: item.ItemTitle
                            })}
                            style={styles.flatListItemStyle}>
                            <Image source={item.itemUrl} style={styles.itemImageFlatListStyle} />
                            <Text style={styles.itemTextFlatListStyle}>{item.ItemTitle}</Text>
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    offerItemStyle: {
        height: viewportWidth * 0.5,
        elevation: 25,
        shadowOffset: { height: 0, width: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.4
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 30,
        borderColor: '#638bba',
    },
    inactiveDotStyle: {
        borderColor: '#638bba',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 30,
    },
    paginationContainerStyle: {
        marginTop: 0
    },
    catagoryContainerStyle: {
        paddingLeft: 10,
        color: 'black',
        fontWeight: '700',
        fontSize: viewportWidth * 0.04
    },
    flatListConatinerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    flatListItemStyle: {
        padding: 15,
        width: viewportWidth * 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemImageFlatListStyle: {
        height: viewportWidth * 0.2,
        width: viewportWidth * 0.2
    },
    itemTextFlatListStyle: {
        textAlign: 'center', padding: 2,
        fontSize: viewportWidth * 0.03
    }
})

export default HomeScreen