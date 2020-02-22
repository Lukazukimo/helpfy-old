import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,    
} from 'react-native'
import Author from './Author'
import { Gravatar } from 'react-native-gravatar'

class Comments extends Component {
    render() {
        // Array de Comentario transformar em JSX
        let view = null
        if(this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return(
                    <View style={styles.commentContainer} key={index}>
                        <Gravatar options={{ email: 'teste@teste.com', secure: true}}
                            style={styles.avatar} />
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                )
            })
        }
        
        return(
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commentContainer: {
		height: 50,
		flexDirection: 'row',
        borderBottomColor: 'black',
        width: '100%',
        borderBottomWidth: 0.5,
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    nickname: {
        fontSize: 18,
        marginLeft: 3,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        fontSize: 15,
        color: '#555'
    }
})

export default Comments