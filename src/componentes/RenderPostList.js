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
                <View style={styles.header}>
                    <Text style={styles.headerText}> Meus Posts</Text>
                </View>
                <View style={styles.modal}> 
                <FlatList numColumns={2}
                        data={this.state.posts}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) =>  {
                            return (
                                <View style={styles.modalPosts}>
                                    <Post key={item.id} {...item} navigation={this.props.navigation} 
                                    onNavigate={this.props.onNavigate} tamanho={{
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
      height: '16.5%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)'  
    },
    header:{
        height: '7%',
        backgroundColor: 'rgb(148, 100, 300)',
        borderTopColor: 'black',
		borderTopWidth: 2,
		borderBottomColor: 'black',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 25,
        textAlign: 'left',
        marginLeft: 10,
    },
    modal: {
        height: '60%',
        backgroundColor: 'rgb(162, 163, 217)'
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
