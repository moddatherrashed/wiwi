import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList, Dimensions, ImageBackground } from 'react-native'
import Image from 'react-native-remote-svg'
import ViewPagerComponent from '../components/ViewPagerComponent'
import { Pagination } from 'react-native-snap-carousel'
import ProductComponent from '../components/HomeScreenComponents/ProductComponent'

const sliderWidth = Dimensions.get('window').width
const itemWidth = (Dimensions.get('window').height) * 0.49
const viewportWidth = Dimensions.get('window').width

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
        headerLeft: null,
        headerRight:
            <TouchableOpacity onPress={() => { alert('pressed') }} style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }
            }>
                <Image source={require('../Icons/Search.svg')} style={{ height: 25, width: 25, marginRight: 8 }} />
            </TouchableOpacity >
    }
    constructor(props) {
        super(props)
        this.state = {
            entiry: [
                {
                    title: 'Beautiful and dramatic Antelope Canyon',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://images5.alphacoders.com/415/415257.jpg'
                },
                {
                    title: 'Earlier this morning, NYC',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://image.freepik.com/free-photo/food-background-food-concept-with-various-tasty-fresh-ingredients-for-cooking-italian-food-ingredients-view-from-above-with-copy-space_1220-1363.jpg'
                },
                {
                    title: 'White Pocket Sunset',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                    illustration: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3667914/1820/1213/m1/fpnw/wm1/mm0k1z4eopjimitemdhs6fmiqbvykaf8eubhbyldigxeuwfu2irobuuqz5pjkc1q-.jpg?1512111122&s=54f66daefac23151f5aa1b08d3c76cca'
                },
                {
                    title: 'Acrocorinth, Greece',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://images5.alphacoders.com/415/415257.jpg'
                }
            ],
            slider1ActiveSlide: 1,
            menuItems: [
                {
                    id: 1,
                    itemUrl: require('../Icons/Market.svg'),
                    ItemTitle: 'Market'
                },
                {
                    id: 2,
                    itemUrl: require('../Icons/Home.svg'),
                    ItemTitle: 'Home'
                },
                {
                    id: 3,
                    itemUrl: require('../Icons/Restaurant.svg'),
                    ItemTitle: 'Resturant'
                },
                {
                    id: 4,
                    itemUrl: require('../Icons/Electronic.svg'),
                    ItemTitle: 'Electronic'
                },
            ]

        }
    }
    static navigationOptions = {

        tabBarLabel: 'Dashboard',
        tabBarIcon: () => (
            <Image source={require('../Icons/Dashboard.svg')} style={{ height: 24, width: 24 }} />
        )

    }
    _renderItem({ item }) {
        return (
            <ImageBackground style={{
                height: viewportWidth * 0.5,
                elevation: 25,
                shadowOffset: { height: 0, width: 0 },
                shadowColor: 'black',
                shadowOpacity: 0.4
            }}
                source={{ uri: item.illustration }}
            >
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
                        entiry={this.state.entiry}
                        slider1ActiveSlide={(index) => this.setState({ slider1ActiveSlide: index })}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                    />
                    <Pagination
                        dotsLength={this.state.entiry.length}
                        activeDotIndex={this.state.slider1ActiveSlide}
                        dotColor={'#638bba'}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 30,
                            borderColor: '#638bba',
                            //  marginHorizontal: 1
                        }}
                        containerStyle={{
                            marginTop: 0
                        }}
                        inactiveDotColor={'white'}
                        inactiveDotOpacity={1}
                        inactiveDotStyle={{
                            borderColor: '#638bba',
                            borderWidth: 1,
                            width: 10,
                            height: 10,
                            borderRadius: 30,
                        }}
                        inactiveDotScale={1}
                        carouselRef={this._carousel}
                        tappableDots={!!this._carousel} />
                </View>
                <Text style={{ paddingLeft: 10, color: 'black', fontWeight: '700', fontSize: viewportWidth * 0.04 }}>Catagory</Text>
                <FlatList
                    contentContainerStyle={{ margin: 2 }}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 10,
                    }}
                    data={this.state.menuItems}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('CatagoryViewerScreen', {
                                ItemTitle: item.ItemTitle
                            })}
                            style={{
                                padding: 15,
                                width: viewportWidth * 0.5,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Image source={item.itemUrl} style={{ height: viewportWidth * 0.2, width: viewportWidth * 0.2 }} />
                            <Text style={{ textAlign: 'center', padding: 2, fontSize: viewportWidth * 0.03 }}>{item.ItemTitle}</Text>
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
        )
    }
}


export default HomeScreen