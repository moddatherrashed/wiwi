import React, { Component } from 'react'
import { View, Text, Dimensions, ImageBackground, FlatList, ScrollView, TouchableOpacity, I18nManager, ActivityIndicator } from 'react-native'
import ApiController from './../../controllers/ApiController'

const viewportWidth = Dimensions.get('window').width

class SubExtentionScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            extentions: [],
            isLoading: false,
            status: 0
        }
    }

    static navigationOptions = {
        headerTitle : this.props.navigation.state.params.catagoryName
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        ApiController.get_extentions(this.props.navigation.state.params.catagoryId).then((response) => {
            this.setState({
                extentions: response.extensions,
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
        const { resturantImage, resturantName } = this.props.navigation.state.params

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
                                    this.props.navigation.navigate('ProductListScreen', {
                                        extentionName: I18nManager.isRTL ? item.name_ar : item.name_en,
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
                                    source={item.image !== null ? { uri: 'http://160.153.245.10/img/uploads/extensions/' + item.image } : require('./../../BG/login.png')}
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
                    this.renderCategoriesList(this.state.isLoading, this.state.extentions, this.state.status)
                }
            </ScrollView>
        )
    }
}

export default SubExtentionScreen