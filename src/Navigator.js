import React from 'react'
import { 
    createBottomTabNavigator,    
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'
import Feed from './screens/Feed'
import Profile from './screens/Profile'

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
            backgroundColor: 'rgba(107, 13, 200, 0.4)',
        }
    },    
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

// const SplashRouter = createSwitchNavigator({
//     Splash: Splash,
//     App: MenuNavigator,
// }, {
//     initialRouteName: 'Splash'
// })

export default MenuNavigator
// export default SplashRouter