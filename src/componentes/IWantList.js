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
    render() {
        const comments = [{
			nickname: 'Ulisses',
		}, {
			nickname: 'Murilo',

        }, {
            nickname: 'Murilo',
        }, {
            nickname: 'Murilo',
		}]
        return (
            <Modal transparent={true} visible={this.props.isVisible}
            onRequestClose={this.props.onCancel}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}> 
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
                <View style={styles.modal}> 
                    <RenderUsersList comments={comments} />
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
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)'  
    },
    modal: {
        flex: 1,
        backgroundColor: 'white'
    },
})
