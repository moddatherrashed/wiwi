import React, { Component } from 'react'
import { View, Text, Dimensions, ImageBackground, FlatList, ScrollView, TouchableOpacity, I18nManager, ActivityIndicator } from 'react-native'
import ApiController from './../../controllers/ApiController'

const viewportWidth = Dimensions.get('window').width

class ResturantComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catagories: [],
            isLoading: false,
            status: 0
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        ApiController.get_catagory(this.props.navigation.state.params.resturantId).then((response) => {
            this.setState({
                catagories: response.categries,
                isLoading: false,
                status: response.status
            })
        }).catch((err) => {
            this.setState({
                isLoading: false
            })
            console.log(err)
        })
    }

    renderCategoriesList(isLoading, categories, status) {
        const { resturantImage, resturantName, resturantId } = this.props.navigation.state.params

        if (isLoading) {
            return (
                <View style={{ marginTop: 100 }}>
                    <ActivityIndicator size="large" color="#638bba" />
                </View>
            )
        } else {
            if (status === 1) {
                return (
                    <FlatList
                        contentContainerStyle={{ margin: 2 }}
                        contentContainerStyle={{
                            padding: 10,
                            flex: 2
                        }}
                        data={categories}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('SubExtentionScreen', {
                                        resturantId: resturantId,
                                        catagoryName: I18nManager.isRTL ? item.name_ar : item.name_en,
                                        catagoryId: item.id,
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
                                    source={{ uri: 'http://160.153.245.10/img/uploads/categories/' + item.image }}
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
                                    }}>{I18nManager.isRTL ? item.name_ar : item.name_en}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        }
                    />
                )
            } else {
                return (
                    <Text style={{ alignSelf: 'center', fontSize: 25, paddingTop: 10 }}>{I18nManager.isRTL ? 'لا يوجد عناصر' : 'There is not items available'}</Text>
                )
            }
        }
    }
    render() {
        return (
            <ScrollView style={{ flex: 3, backgroundColor: 'white' }}>
                {
                    this.renderCategoriesList(this.state.isLoading, this.state.catagories, this.state.status)
                }
            </ScrollView>
        )
    }
}

export default ResturantComponent