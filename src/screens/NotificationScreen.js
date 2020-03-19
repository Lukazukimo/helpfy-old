import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native'
import Notifications from '../componentes/Notifications'
import LinearGradient from 'react-native-linear-gradient'


class NotificationScreen extends Component{
    
    render(){
        const notifications = [{
			nickname: 'Ulisses',
			notification: 'curtiu sua postagem '
		}, {
			nickname: 'Murilo',
            notification: 'quer receber seu item'
        }, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
        }, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
        }, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
        }, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
        }, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
        }, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
        }, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
        }, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
		}, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
		}, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
		}, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
		}, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
		}, {
            nickname: 'Murilo',
            notification: 'curtiu sua postagem'
        }]        

        return(            
            <LinearGradient colors={[
                'rgb(146, 135, 211)',
                'rgb(124, 147, 225)',
                'rgba(124, 147, 225, 0.8)',
                'rgb(155, 156, 213)',
                'rgb(162, 163, 217)',
                'rgba(162, 163, 217, 0.85)',
                'rgb(162, 163, 217)',
                'rgb(162, 163, 217)',
                'rgba(124, 147, 225, 0.8)',
                'rgb(124, 147, 225)',
                'rgb(146, 135, 211)',
            ]} style={styles.container}>
                <ScrollView style={styles.bodyContainer}>                    
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Notificações</Text>
                    </View>
                    <Notifications notifications={notifications} />
                </ScrollView>                
            </LinearGradient>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,                
    },
    headerContainer: {
        // backgroundColor: 'rgba(255,255,255,0.5)',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    title: {
        marginTop: 25,        
        fontSize: 30,
        fontFamily: 'shelter',
        color: 'rgba(225, 22, 94, 0.7)',
        textShadowColor: '#fff',
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,
    },
    bodyContainer: {
        
    }
})


export default NotificationScreen
