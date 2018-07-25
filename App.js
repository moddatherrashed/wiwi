import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import Image from 'react-native-remote-svg'
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import CartScreen from './src/screens/CartScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import FavoriteScreen from './src/screens/FavoriteScreen'
import SettingsViewerScreen from './src/screens/settingScreens/SettingsViewerScreen'
import CatagoryViewerScreen from './src/screens/HomeScreens/CatagoryViewerScreen'
import AllItemsScreen from './src/screens/HomeScreens/AllItemsScreen'
import OfferItemScreen from './src/screens/HomeScreens/OfferItemScreen'
import ResturantsListComponent from './src/components/HomeScreenComponents/ResturantsListComponent'
import ProductListScreen from './src/screens/HomeScreens/ProductListScreen'
import ProductViewerScreen from './src/screens/HomeScreens/ProductViewerScreen'

const tabNavigator = createBottomTabNavigator({
  Welcome: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Dashboard',
      tabBarIcon: () => (
        <Image source={require('./src/Icons/Dashboard.svg')} style={{ height: 24, width: 24 }} />
      )
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: () => (
        <Image source={require('./src/Icons/Cart.svg')} style={{ height: 24, width: 24 }} />
      )
    }
  },
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarLabel: 'Favorite',
      tabBarIcon: () => (
        <Image source={require('./src/Icons/Favorite.svg')} style={{ height: 24, width: 24 }} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: () => (
        <Image source={require('./src/Icons/Settings.svg')} style={{ height: 24, width: 24 }} />
      )
    }
  }
},
  {
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey'
    }
  })
tabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  let headerTitle = routeName;

  return {
    headerTitle,
  };
};

const ResturantTopTabNavigator = createMaterialTopTabNavigator({
  All: { screen: AllItemsScreen },
  Offer: { screen: OfferItemScreen }
}, {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white'
      },
      indicatorStyle: {
        backgroundColor: '#638bba'
      }
    }
  }
)

ResturantTopTabNavigator.navigationOptions = ({ navigation }) => {
  return {
    title: `${navigation.state.params.resturantName}`,
  };
};


const AppStackNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  },
  HomeScreen: {
    screen: tabNavigator,
    navigationOptions: {
      title: 'Welcome',
      headerLeft: null,
      headerRight:
        <TouchableOpacity onPress={() => { alert('pressed') }} style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
          <Image source={require('./src/Icons/Search.svg')} style={{ height: 25, width: 25, marginRight: 8 }} />
        </TouchableOpacity>,
    }
  },
  SettingsViewerScreen: { screen: SettingsViewerScreen },
  CatagoryViewerScreen: { screen: CatagoryViewerScreen },
  ResturantsListComponent: { screen: ResturantsListComponent },
  topTabNAvigator: {
    screen: ResturantTopTabNavigator
  },
  ProductListScreen: { screen: ProductListScreen },
  ProductViewerScreen: { screen: ProductViewerScreen }

})
export default AppStackNavigator