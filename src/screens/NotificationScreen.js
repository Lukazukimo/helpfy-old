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
import Header from '../componentes/Header'
import Notifications from '../componentes/Notifications'


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
		}]
        return(
            <View style={styles.container}>
                <Header /> 
                <ScrollView>
                    <Notifications notifications={notifications} />
                </ScrollView>
                <View style={styles.tabBottomBackground} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        alignItems: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
        borderBottomColor: 'black',
    	borderBottomWidth: 1.5,
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',

    },
    tabBottomBackground: {
		width: '100%',
		height: 50,
		backgroundColor: 'rgba(50, 13, 119, 0.50)',	
    }
})


export default NotificationScreen
