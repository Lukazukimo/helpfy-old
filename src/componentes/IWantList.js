import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback  
} from 'react-native'
import RenderUsersList from './RenderUsersList'


export default class IWantList extends Component {
    
    componentDidMount = () => {
        console.log('postId = ', this.props.postId)
    }

    render() {

        return (
            <Modal transparent={true} visible={this.props.isVisible}
            onRequestClose={this.props.onCancel}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}> 
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
                <View style={styles.modal}> 
                    <RenderUsersList users={this.props.users}/>
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
      height: '30%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)'  
    },
    modal: {
        height: '40%',
        backgroundColor: 'white'
    },
})
