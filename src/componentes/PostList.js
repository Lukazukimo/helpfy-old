import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    ScrollView,
    TouchableWithoutFeedback  
} from 'react-native'
import ProfileComment from './ProfileComment'

export default class PostList extends Component {
    render() {
		const comments = [{
			nickname: 'Ulisses',
			comment: 'Esse cara me roubou!!!'
		}, {
			nickname: 'Murilo',
            comment: 'Comendo o cu de curioso',
        }, {
			nickname: 'Murilo',
            comment: 'Comendo o cu de curioso'
        }, {
			nickname: 'Murilo',
            comment: 'Comendo o cu de curioso'
        }, {
			nickname: 'Murilo',
            comment: 'Comendo o cu de curioso'
        }, {
			nickname: 'Murilo',
            comment: 'Comendo o cu de curioso'
        }, {
			nickname: 'Murilo',
            comment: 'Comendo o cu de curioso'
        }, {
			nickname: 'Murilo',
            comment: 'Comendo o cu de curioso'
        }, {
			nickname: 'Murilo',
            comment: 'Comendo o cu de curioso'
        }, {
			nickname: 'Murilo',
            comment: 'Comendo o cu de curioso'
        }, {
			nickname: 'Murilo',
            comment: 'Comendo o cu de curioso'
            
        }]
        

        return (
            <Modal transparent={true} visible={this.props.isVisible}
            onRequestClose={this.props.onCancel}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}> 
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
                <ScrollView>
                    <View style={styles.modal}> 
                        <ProfileComment comments={comments} />
                    </View>
                </ScrollView>
                <TouchableWithoutFeedback onPress={this.props.onCancel}> 
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
      height: '30%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)'  
    },
    modal: {
        height: '100%',
        backgroundColor: 'white'
    },
})
