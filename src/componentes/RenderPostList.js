import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
    FlatList,
    Dimensions
} from 'react-native'
import Post from './Post'
import { Textarea } from 'native-base'

export default class RenderPostList extends Component {
    
    state = {
        posts: [{
            id: Math.random(),
            image: require('../../assets/imgs/fence.jpg'),
            title: 'Post sobre çççç'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/fence.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'P'
        }]
    }
    render() {
        
    
        
        return (
            <Modal transparent={true} visible={this.props.isVisible}
            onRequestClose={this.props.onCancel}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}> 
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
                <View style={styles.modal}> 
                <FlatList numColumns={2}
                        data={this.state.posts}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) =>  {
                            return (
                                <View style={styles.modalPosts}>
                                    <Post key={item.id} {...item}  tamanho={{
                                        width: Dimensions.get('window').width / (5/2),
                                        height: Dimensions.get('window').width / (5/2),
                                        resizeMode: "stretch",
                                        margin: 10,
                                        borderRadius: 15,
                                        marginLeft: 23
                                    }}/>
                                    <Text style={styles.titlePost}>{item.title}</Text>
                                </View>
                                
                            )   
                        }}
                    />  
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}> 
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
      height: '20%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)'  
    },
    modal: {
        height: '60%',
        backgroundColor: 'white'
    },
    modalPost: {
        alignContent: 'center',
        justifyContent: 'center',

    },
    titlePost: {
        textAlign: 'center',
        marginTop: -8,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 13

    }
})
