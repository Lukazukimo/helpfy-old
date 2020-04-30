import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCommentProfile } from '../store/actions/user'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddCommentProfile extends Component{
    state = {
        comment: '',
        editMode: false
    }

    handleAddComment = () => {
        this.props.onAddComment({
            localId: this.props.localId,
            comment: {
                nickname: this.props.name,
                comment: this.state.comment
            }
        })
        console.log('state = ', this.state)
        this.setState({ comment: '', editMode: false })
    }

    render() {
        let commentArea = null
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder='Pode comentar...'
                        maxLength={80} style={styles.input} autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment}/>
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <Icon name='times' size={15} color='#555'/>
                    </TWF>
                </View>
            )
        } else {          
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon  name='comment-o' size={25} color='#555'/>
                        <Text style={styles.caption}>
                            Adicione um comentario...
                        </Text>
                    </View>
                </TWF>
            )
        }
        
        return(
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'transparent'
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc'
    },
    input: {
        width: '95%'
    }
})


const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddComment: payload => dispatch(addCommentProfile(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentProfile)
