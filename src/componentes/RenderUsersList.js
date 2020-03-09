import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback, 
    Dimensions   
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class RenderUsersList extends Component {
    render() {
        // Array de Comentario transformar em JSX
        let view = null
        if(this.props.users) {
            view = this.props.users.map((item, index) => {
                return(
                    <View style={styles.listContainer} key={index}>
                        <Gravatar options={{ email: 'teste@teste.com', secure: true}}
                            style={styles.avatar} />
                        
                        <Text style={styles.nickname}>{item.nickname} </Text>
                        <View style={styles.callContainer}>
                            <TouchableWithoutFeedback style={styles.button}>
                                <Text style={styles.callButton}> Chamar </Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                )
            })
        }
        
        return(
            <View style={styles.container}>
                <ScrollView>
                    {view}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 2,
        marginTop: 7
    },
    listContainer: {
        height: 50,
		flexDirection: 'row',
        borderBottomColor: 'black',
        width: '100%',
        borderBottomWidth: 0.5,
        alignItems: 'center',
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    nickname: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        width: '70%'
    },
    button: {
		height:55,
		marginTop:10,
        width: 56

    },
    callButton: {
        height: 40,
        width: 70,
        fontSize: 16,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'blue',
        fontWeight: 'bold',
        color: 'white',
    },
    callContainer: {
        alignItems: 'flex-end'
    }
})

export default RenderUsersList