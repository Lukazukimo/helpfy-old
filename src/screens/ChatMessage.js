import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    StatusBar,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GiftedChat, InputToolbar, } from 'react-native-gifted-chat'
import {
    setMessages,
    getMessages,
    listenMessages,
    stopListenMessages
} from '../store/actions/chatMessage'
import { connect } from 'react-redux'


class ChatMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            otherUser: 'uR7EZ1lt9PTUwcCb4mHFSj7Bjuq2',
            // otherUser: 'Aem3JvZJn7OkehMcMKgCkdWtRna2',
            idMaior: '',
            idMenor: '',
            eventSource: 'Tem Nada aqui nao po'
        }

        // getMessages('Aem3JvZJn7OkehMcMKgCkdWtRna2')

        // getMessages(this.props.userId, this.state.otherUser).then(res => {
        //     this.setState({ messages: res})            
        // })
    }

    componentDidMount() {
        // console.log(this.state)
        // this.setState({
        //     messages: [
        //         {
        //             _id: 1,
        //             text: 'Hello developer',
        //             createdAt: new Date(),
        //             user: {
        //                 _id: 2,
        //                 name: 'React Native',
        //                 avatar: 'https://placeimg.com/140/140/any',
        //             },
        //         },
        //     ],
        // })


        console.log('Entrou no Did Mount')

        // Verifica qual eh o ID mairo para salvar um padrao no Firebase
        if (this.props.userId > this.state.otherUser){
            this.state = {
                ...this.state,
                idMaior: this.props.userId,
                idMenor: this.state.otherUser
            }
            this.setState({ ...this.state })
        } else {
            this.state = {
                ...this.state,
                idMaior: this.state.otherUser,
                idMenor: this.props.userId
            }
            this.setState({ ...this.state })
        }

        getMessages(this.state.idMaior, this.state.idMenor, this.state).then(res => {
            this.setState({ ...res })
        })

        // console.log(this.state)

        this.setState({ eventSource: listenMessages(this.state.idMaior, this.state.idMenor, this.state) }) 
        console.log('===================================', this.state.eventSource)
    }

    componentWillUnmount = () => {
        stopListenMessages(this.state.eventSource)
    }

    componentDidUpdate = (previousState) => {
        // console.log(previousState)
        // console.log('-----------')
        // console.log(this.state)
        // if(prevState && this.state){

        // }
        // setMessages('Aem3JvZJn7OkehMcMKgCkdWtRna2', this.state.messages[0])
    }

    onSend(messages = []) {
        setMessages(this.state.idMaior, this.state.idMenor, messages[0]).then((param) => {
            if (param) {
                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, messages),
                }))
            }
        })

        // console.log(messages)
    }

    render() {
        console.log('++++++++++++++++', this.state.eventSource)

        // console.log(this.state)
        // console.log('Dentro do Render')
        // console.log(this.state)
        // console.log('------------------------')
        // console.log(this.state.messages[0])
        const customtInputToolbar = props => {
            return (
                <InputToolbar
                    {...props}
                    containerStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.25)",
                        justifyContent: 'center',
                        // alignContent: 'center',
                    }}
                />
            )
        }
        const chat = <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
                _id: this.props.userId,
            }}
            renderInputToolbar={props => customtInputToolbar(props)}
            scrollToBottomOffset={400}
            textInputStyle={styles.textInput}
        />

        // if(Platform.OS === 'android'){
        //     return(
        //         <KeyboardAvoidingView 
        //             style={{ flex: 1 }} 
        //             behavior='height'
        //             keyboardVerticalOffset={30}
        //             enabled>
        //             {chat}
        //         </KeyboardAvoidingView>
        //     )
        // }

        return (
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
            ]}
                style={styles.container}>
                {chat}
                {
                    Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
                }
                <View style={styles.tabBottomBackground} />
            </LinearGradient>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        // backgroundColor: 'red'
    },
    tabBottomBackground: {
        width: '100%',
        height: 50,
        backgroundColor: 'transparent'
    },
})

// export default ChatMessage

const mapStateToProps = ({ user }) => {
    return {
        userId: user.localId
    }
}

export default connect(mapStateToProps)(ChatMessage)
