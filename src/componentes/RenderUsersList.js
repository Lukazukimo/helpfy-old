import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,    
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class RenderUsersList extends Component {
    render() {
        // Array de Comentario transformar em JSX
        let view = null
        if(this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return(
                    <View style={styles.commentContainer} key={index}>
                        <Gravatar options={{ email: 'teste@teste.com', secure: true}}
                            style={styles.avatar} />
                        <Text style={styles.nickname}>{item.nickname} </Text>
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
        marginTop: 10
    },
    headerCommentView: {
        marginLeft: 15,
        borderBottomColor: 'black',
        width: '100%',
        borderBottomWidth: 1.5,
    },
    headerCommentText: {
        fontSize: 22,
        fontWeight: 'bold'
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
        width: 25,
        height: 25,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    nickname: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    comment: {
        fontSize: 15,
        color: 'black'
    }
})

export default RenderUsersList