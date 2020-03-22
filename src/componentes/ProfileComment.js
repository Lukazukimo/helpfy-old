import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,    
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class ProfileComment extends Component {
    render() {
        // Array de Comentario transformar em JSX
        let view = null
        if(this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return(
                    <View style={styles.commentContainer} key={index}>
                        <Gravatar options={{ email: 'teste@teste.com', secure: true}}
                            style={styles.avatar} />
                        {/* <Text style={styles.nickname}>{item.nickname}:</Text> */}
                        <Text style={styles.comments}>{item.comment}</Text>
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
    commentContainer: {
        flex: 1,		
		flexDirection: 'row',
        borderBottomColor: 'black',
        width: '100%',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        padding: 10
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 15,
        // marginHorizontal: 10,
        alignSelf: 'flex-start',        
        
    },
    nickname: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'flex-start',        
        paddingLeft: 10,        
    },
    comments: {
        fontSize: 15,
        color: 'black',
        width: 0,
        flexGrow: 1,
        flex: 1,
        textAlign: 'justify',
        paddingLeft: 10
        // paddingRight: 10,
        // paddingBottom: 10
    },
})

export default ProfileComment