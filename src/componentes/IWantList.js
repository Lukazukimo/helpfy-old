import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native'
import RenderUsersList from './RenderUsersList'
import { Overlay } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

export default class IWantList extends Component {


    componentDidMount = () => {
        console.log('idpostttt222', this.props.isVisible)
    }

    render() {

        return (
            <Overlay
                isVisible={this.props.visible}
                onBackdropPress={this.props.onCancel}
                overlayStyle={{ padding: 0}}>
                <LinearGradient colors={[
                    'rgb(146, 135, 211)',
                    'rgb(124, 147, 225)',
                    'rgba(124, 147, 225, 0.8)',
                    'rgb(155, 156, 213)',
                    'rgb(162, 163, 217)',            
                    'rgba(162, 163, 217, 0.85)',
                    'rgb(162, 163, 217)',
                    'rgb(162, 163, 217)',
                    'rgba(124, 147, 225, 0.8)',
                    'rgb(124, 147, 225)',
                    'rgb(146, 135, 211)',
                    ]} style={styles.container}>                
                    <ScrollView>
                    <RenderUsersList idPost={this.props.idPost} />
                    </ScrollView>
                </LinearGradient>
            </Overlay>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
      height: '30%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)'  
    },
    modal: {
        height: '40%',
        backgroundColor: 'white'
    },
})
