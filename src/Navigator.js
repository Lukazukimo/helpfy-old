import React from 'react'
import { Dimensions, SafeAreaView } from 'react-native'
import { 
    createBottomTabNavigator,
    createDrawerNavigator,
    createStackNavigator,
    createSwitchNavigator,
    TabNavigator,
    createAppContainer,
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'
import Feed from './screens/Feed'
import Profile from './screens/Profile'
import SideBar from './componentes/SideBar'
import Search from './screens/Search'
import ScreenPost from './screens/ScreenPost'
import Login from './screens/Login'
import Register from './screens/Register'
import WishList from './screens/WishList'
import NotificationScreen from './screens/NotificationScreen'
import LikedScreen from './screens/LikedScreen'

const goNotification = createSwitchNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: navOptionHandler
    },
    Notification: {
        screen: NotificationScreen,  
        navigationOptions: navOptionHandler
    }
}, {
    // rota inicial
    initialRouteName: 'Feed',    
})


const goRegister = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: navOptionHandler
    },
    Register: {
        screen: Register,  
        navigationOptions: navOptionHandler
    }
}, {
    initialRouteName: 'Login',    
})


const navOptionHandler = (navigation) =>({
    header: null
})

const goSearch = createStackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: navOptionHandler
    },
    Search: {
        screen: Search,  
        navigationOptions: navOptionHandler
    }
}, {
    // rota inicial
    initialRouteName: 'Feed',    
})



// Quando esta na tela Search retira o tabBottomBar
goSearch.navigationOptions = ({ navigation }) => {
    const { state: { routes, index } } = navigation;
    let tabBarVisible = true;
    if(routes[index].routeName === 'Search'){
      tabBarVisible = false;
    }
    return {
      tabBarVisible
    }
}

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: goSearch,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) =>                
                <Icon name='home' size={30} color={tintColor}/>,
        }
    },
    Profile: {
        name: 'Profile',
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor: color }) =>
                <Icon name='user' size={30} color={color} />
        }
    },
    Message: {
        name: 'Message',
        screen: goNotification,
        navigationOptions: {
            title: 'Message',
            tabBarIcon: ({ tintColor: color }) =>
                <Icon name='mail' size={30} color={ color } />

        }
    },    
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#da6813',
        inactiveTintColor: '#993399',
        style: {
            // backgroundColor: 'rgba(107, 13, 200, 0.4)',
            backgroundColor: 'transparent',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,            
            
        }        
    },    
}


const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

const Drawer = createDrawerNavigator({
    Home: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Home',
            drawerIcon:({ tintColor }) =>
                <Icon name='home' size={23} color={ tintColor } />
        }
    },

    WishList: {
        screen: WishList,
        navigationOptions: {
            title: 'Lista de desejos',
            drawerIcon:({ tintColor }) =>
                <Icon name='list' size={23} color={ tintColor } />
        }
    },
    Likes: {
        screen: LikedScreen,
        navigationOptions: {
            title: 'Itens curtidos',
            drawerIcon:({ tintColor }) =>
                <Icon name='heart' size={23} color={ tintColor } />
        }
    },

    SignOut: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Sign Out',
            drawerIcon:({ tintColor }) =>
                <Icon name='log-out' size={23} color={ tintColor } />
        }
    }

}, {
    contentComponent: props => <SideBar {...props}/>,
    drawerWidth: Dimensions.get('window').width * 3/4,
    hidenStatusbar: true,
    
    contentOptions: {    
        activeBackgroundColor: 'rgba(212, 118, 207, 0.3)',
        // activeBackgroundColor: 'rgba(211, 116, 152, 0.4)',
        // activeTintColor: '#531158',
        activeTintColor: '#da6813',
        inactiveTintColor: '#993399',
        itemsContainerStyle: {
            marginTop: 8,
        },

        itemStyle: {            
            borderRadius: 4,
            marginLeft: 5
        },
    },
    
    style: {
        backgroundColor: 'rgba(107, 13, 200, 0.15)',
        // backgroundColor: 'rgba(211, 116, 152, 0.2)',
    }
})

//export default createAppContainer(App);
export default Drawer

