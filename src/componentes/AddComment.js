import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../store/actions/posts'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component{
    state = {
        // variavel que vai guardar o comentario
        comment: '',
        // variavel para alternar o comentario para o modo de 
        // exibicao e de edicao
        editMode: false
    }

    // quando o usuario for realizar o comentario
    // vai chamar essa funcao
    handleAddComment = () => {
        // Alert.alert('Adicionado!', this.state.comment)
        this.props.onAddComment({
            // pegando via propriedade
            postId: this.props.postId,
            comment: {
                // pegando via estado global
                nickname: this.props.name,
                // pegando via estado do componente
                comment: this.state.comment
            }
        })
        // limpar os campos e voltar para o estado para digitar comentario
        this.setState({ comment: '', editMode: false })
    }

    render() {
        // area de comentario
        let commentArea = null
        // modo de edicao true
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder='Pode comentar...'
                        style={styles.input} autoFocus={true}
                        // o valor do input estara dentro de comment
                        value={this.state.comment}
                        // sempre que tiver uma mudanca do texto
                        // o estado do componente eh atualizado
                        onChangeText={comment => this.setState({ comment })}
                        // quando apertar enter, vai submeter o comentario e chamara
                        // a funcao handle
                        onSubmitEditing={this.handleAddComment}/>
                    {/* sair do modo de edicao de comentario */}
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <Icon name='times' size={15} color='#555'/>
                    </TWF>
                </View>
            )
        } else {
            // modo de edicao falso
            // aparecera para poder adicionar o comentario            
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
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc'
    },
    input: {
        width: '90%'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddComment: payload => dispatch(addComment(payload))
    }
}

// export default AddComment
export default connect(mapStateToProps, mapDispatchToProps)(AddComment)
