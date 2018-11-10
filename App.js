import React from 'react'
import { TouchableOpacity, Image, StyleSheet, I18nManager } from 'react-native'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'
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
import RegisterScreen from './src/screens/RegisterScreen'
import SearchScreen from './src/screens/SearchScreen'
import FavoritesViewerScreen from './src/screens/FavoritesScreen/FavoritesViewerScreen'
import ItemViewerScreen from './src/screens/CartScreens/ItemViewerScreen'
import MaintenanceScreen from './src/screens/MaintenanceScreen'
import NoConnectionScreen from './src/screens/NoConnectionScreen'
import translation from './src/controllers/translation'

const styles = StyleSheet.create({
  tabIcon: {
    height: 24,
    width: 24
  },
  searchBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  searchIcon: {
    height: 25,
    width: 25,
    marginRight: 8
  }
})

const tabNavigator = createBottomTabNavigator({
  Welcome: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: I18nManager.isRTL ? translation.ar.dashboard : translation.en.dashboard,
      tabBarIcon: () => (
        <Image
          resizeMode='contain'
          source={require('./src/Icons/Dashboard.png')}
          style={styles.tabIcon} />
      )
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      tabBarLabel: I18nManager.isRTL ? translation.ar.cart : translation.en.cart,
      tabBarIcon: () => (
        <Image
          resizeMode='contain'
          source={require('./src/Icons/Cart.png')}
          style={styles.tabIcon} />
      )
    }
  },
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarLabel: I18nManager.isRTL ? translation.ar.favorites : translation.en.favorites,
      tabBarIcon: () => (
        <Image
          resizeMode='contain'
          source={require('./src/Icons/Favorite.png')}
          style={styles.tabIcon} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: I18nManager.isRTL ? translation.ar.settings : translation.en.settings,
      tabBarIcon: () => (
        <Image
          resizeMode='contain'
          source={require('./src/Icons/Account.png')}
          style={styles.tabIcon} />
      )
    }
  }
},
  {
    swipeEnabled: true,
    lazy: true,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey'
    }
  })

tabNavigator.navigationOptions = ({ navigation }) => {
  let headerTitle = I18nManager.isRTL ? translation.ar.welcome : translation.en.welcome;
  return {
    headerTitle
  };
};
const ResturantTopTabNavigator = createMaterialTopTabNavigator({
  Alsl: {
    screen: AllItemsScreen,
    navigationOptions: { tabBarLabel: I18nManager.isRTL ? translation.ar.all : translation.en.all }
  },
  Offer: {
    screen: OfferItemScreen,
    navigationOptions: { tabBarLabel: I18nManager.isRTL ? translation.ar.offers : translation.en.offers }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: { backgroundColor: 'white' },
      indicatorStyle: { backgroundColor: '#638bba' }
    }
  }
)

ResturantTopTabNavigator.navigationOptions = ({ navigation }) => {
  return {
    title: `${navigation.state.params.resturantName}`,
  };
};

const AuthScreens = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
})

const AppStackNavigator = createStackNavigator({
  HomeScreen: {
    screen: tabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        title: I18nManager.isRTL ? translation.ar.welcome : translation.en.welcome,
        headerLeft: null,
        headerRight:
          <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen') }} style={styles.searchBtnContainer}>
            <Image source={require('./src/Icons/Search.png')} style={styles.searchIcon} />
          </TouchableOpacity>,
      }
    }
  },
  SettingsViewerScreen: { screen: SettingsViewerScreen },
  CatagoryViewerScreen: { screen: CatagoryViewerScreen },
  ResturantsListComponent: { screen: ResturantsListComponent },
  topTabNAvigator: { screen: ResturantTopTabNavigator },
  ProductListScreen: { screen: ProductListScreen },
  ProductViewerScreen: { screen: ProductViewerScreen },
  SearchScreen: { screen: SearchScreen },
  FavoritesViewerScreen: { screen: FavoritesViewerScreen },
  ItemViewerScreen: { screen: ItemViewerScreen }
})

const AppScreens = createSwitchNavigator({
  //test: { screen: NoConnectionScreen },
  Auth: AuthScreens,
  App: AppStackNavigator
})


export default AppScreens