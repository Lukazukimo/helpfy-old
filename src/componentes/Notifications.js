import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,    
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class Notifications extends Component {
    render() {
        // Array de Comentario transformar em JSX
        let view = null
        if(this.props.notifications) {
            view = this.props.notifications.map((item, index) => {
                return(
                    <View style={styles.notificationContainer} key={index}>
                        <Gravatar options={{ email: 'teste@teste.com', secure: true}}
                            style={styles.avatar} />
                        <View style={styles.notificationText}>     
                            <Text style={styles.nickname}>{item.name} </Text>
                            <Text style={styles.notification}>{item.type}</Text>
                        </View>
                    </View>
                )
            })
        }
        
        return(
            <View style={styles.container}>
                {/* <View style={styles.headerNotificationView}> 
                    <Text style={styles.headerNotificationText}>Notificações</Text>
                </View>
                 */}
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 2,        
    },
    // headerNotificationView: {
    //     marginLeft: 15,
    //     borderBottomColor: 'black',
    //     width: '100%',
    //     borderBottomWidth: 1.5,
    // },
    // headerNotificationText: {
    //     fontSize: 25,
    //     fontWeight: 'bold'
    // },
    notificationContainer: {
		height: 60,
		flexDirection: 'row',
        borderBottomColor: 'black',
        width: '100%',        
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    nickname: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    notification: {
        fontSize: 15,
        color: 'black'
    }
})

export default Notifications