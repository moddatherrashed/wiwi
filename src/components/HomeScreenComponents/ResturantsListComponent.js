import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import ApiController from './../../controllers/ApiController'

const viewportWidth = Dimensions.get('window').width

//ResturantListComponent  ==> two tabs (offer tab) and (all items tab) ==> ResturantComponent ==> product list screen ==> product component 
class ResturantsListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resutrants: [],
            isLoading: false
        }
    }


    componentDidMount() {
        this.setState({
            isLoading: true
        })
        ApiController.get_resturants().then((result) => {
            if (result.status === 1) {
                this.setState({
                    resutrants: result.Resturants,
                    isLoading: false
                })
            } else {
                alert('something went wrong !')
            }
        }).catch((err) => {
            alert(err)
        })
    }
    renderList(isLoading) {
        if (!isLoading) {
            return (
                <FlatList
                    contentContainerStyle={{ margin: 2 }}
                    contentContainerStyle={{
                        padding: 10,
                        flex: 2
                    }}
                    data={this.state.resutrants}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('topTabNAvigator', {
                                    resturantName: item.full_name,
                                    resturantImage: item.logo
                                })
                            }
                            }
                            style={{
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF',
                                margin: 5,
                                elevation: 1,
                                shadowOffset: { height: 0, width: 0 },
                                shadowColor: 'black',
                                shadowOpacity: 0.2
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 4 }}>
                                <View style={{ padding: 6, flex: 2 }}>
                                    <Image
                                        style={{ height: viewportWidth * 0.21, width: viewportWidth * 0.21 }}
                                        source={{ uri: 'http://160.153.245.10/img/uploads/logos/'+item.logo }}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View style={{ padding: 6, flex: 2 }}>
                                    <Text style={{ color: 'black', marginLeft: 12, marginTop: 10, marginBottom: 2, fontWeight: '700', fontSize: 20 }}>{item.full_name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            )
        } else {
            return (
                <View style={{ marginTop: 100 }}>
                    <ActivityIndicator size="large" color="#638bba" />
                </View>
            )
        }
    }

    render() {
        return (
            <ScrollView style={{ flex: 3, backgroundColor: 'white' }}>
                {
                    this.renderList(this.state.isLoading)
                }
            </ScrollView>
        )
    }
}


export default ResturantsListComponent

