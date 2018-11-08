import React, { Component } from 'react'
import { View, Text, Dimensions, ImageBackground, FlatList, ScrollView, TouchableOpacity } from 'react-native'


const viewportWidth = Dimensions.get('window').width

class ResturantComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catagories: [
                {
                    id: '1',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCNoitmgIfQmqbwDM2SIiMCDWQpoyYnZ6Mdo2Y3uLD4Mp6UicYQ',
                    name: 'Burger',

                },
                {
                    id: '2',
                    image: 'http://images6.fanpop.com/image/photos/34400000/Steak-meat-34450450-1600-1067.jpg',
                    name: 'Steak',

                },
                {
                    id: '3',
                    image: 'https://images7.alphacoders.com/803/803247.jpg',
                    name: 'Salad',

                }
            ]
        }
    }

    render() {
        const { resturantImage, resturantName } = this.props.navigation.state.params
        return (
            <ScrollView style={{ flex: 3, backgroundColor: 'white' }}>
                <FlatList
                    contentContainerStyle={{ margin: 2 }}
                    contentContainerStyle={{
                        padding: 10,
                        flex: 2
                    }}
                    data={this.state.catagories}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('ProductListScreen', {
                                    catagoryName: item.name,
                                    resturantName: resturantName,
                                    resturantImage: resturantImage
                                })
                            }}
                            style={{
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF',
                                margin: 5,
                                elevation: 1,
                                shadowOffset: { height: 0, width: 0 },
                                shadowColor: 'black',
                                shadowOpacity: 0.2
                            }}>
                            <ImageBackground
                                source={{ uri: item.image }}
                                style={{
                                    height: viewportWidth * 0.21,
                                    width: null,
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'flex-end'

                                }}
                                resizeMode='cover'
                            >
                                <Text style={{
                                    textShadowColor: 'black',
                                    textShadowOffset: { width: 1, height: 4 },
                                    textShadowRadius: 5, fontSize: 25,
                                    fontWeight: '700',
                                    padding: 10,
                                    margin: 10,
                                    color: 'white'
                                }}>{item.name}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
        )
    }
}

export default ResturantComponent