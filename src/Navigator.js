import React from 'react'
import { Dimensions } from 'react-native'
import { 
    createBottomTabNavigator,
    createDrawerNavigator,
    createStackNavigator 
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'
import Feed from './screens/Feed'
import Profile from './screens/Profile'
import SideBar from './componentes/SideBar'

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) =>                
                <Icon name='home' size={30} color={tintColor}/>
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
        screen: Feed,
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

// const MainStack = createStackNavigator({
//     Home: {
//         screen: MenuNavigator,        
//     },
//     Feed: {
//         screen: Feed
//     }
// },
// {
//     initialRouteName: 'Home'
// })

const Drawer = createDrawerNavigator({
    Home: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Home',
            drawerIcon:({ tintColor }) =>
                <Icon name='home' size={23} color={ tintColor } />
        }
    },
    Teste :{
        screen: MenuNavigator,
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

export default Drawer

