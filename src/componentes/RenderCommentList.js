import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'
import ProfileComment from './ProfileComment'
import { Overlay } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

export default class RenderCommentList extends Component {
    constructor(props) {
        super(props)        
        this.state = {
            isVisible: props.isVisible
        }
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isVisible && !this.state.isVisible) {
			this.state.isVisible = true
			console.log('Acabei de Atualizar3 ' + this.state.isVisible)
        } else {
			this.state.isVisible = false
			console.log('Acabei de Atualizar4 ' + this.state.isVisible)
		}
	}

    teste = () => {
        console.log('Render ' + this.state.isVisible)
    }

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
            // <Modal transparent={true} visible={this.props.isVisible}
            // onRequestClose={this.props.onCancel}>
            <Overlay
                isVisible={this.state.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
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
                    {/* <TouchableWithoutFeedback onPress={this.props.onCancel}> 
                        <View style={styles.background} />
                    </TouchableWithoutFeedback> */}
                    <ScrollView>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Comentários sobre o autor</Text>
                        </View>
                        <View style={styles.modal}> 
                            <ProfileComment comments={comments} />
                        </View>
                    </ScrollView>
                    {/* <TouchableWithoutFeedback onPress={this.props.onCancel}> 
                        <View style={styles.background} />
                    </TouchableWithoutFeedback> */}
                    <TouchableOpacity
                        onPress={this.teste()}>
                    </TouchableOpacity>
                </LinearGradient>
            </Overlay>
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
        backgroundColor: 'rgb(162, 163, 217)'
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
})
