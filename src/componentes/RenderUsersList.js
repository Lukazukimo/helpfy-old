import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback, 
    Dimensions,
    Alert   
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { connect } from 'react-redux'
import { 
    patchPostDonated
} from '../store/actions/posts'

class RenderUsersList extends Component {

    componentDidMount = () => {
        console.log('idpostttt', this.props.listiWant)
    }

    render() {
        // Array de Comentario transformar em JSX
        let view = null
        if(this.props.listiWant) {
            view = this.props.listiWant.map((item, index) => {
                return(
                    <View style={styles.listContainer} key={index}>
                        <Gravatar options={{ email: 'teste@teste.com', secure: true}}
                            style={styles.avatar} />
                        
                        <Text style={styles.nickname}>{item.name} </Text>
                        <View style={styles.callContainer}>
                            <TouchableWithoutFeedback 
                                onPress={() => {
                                    this.props.onPatchPostDonated(this.props.idPost, item.name)}
                                }
                                style={styles.button}>
                                <Text style={styles.callButton1}> Doar para.. </Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.callContainer}>
                            <TouchableWithoutFeedback style={styles.button}>
                                <Text style={styles.callButton}> Chamar </Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                )
            })
        }
        
        return(
            <View style={styles.container}>
                <ScrollView>
                    {view}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 2,
        marginTop: 7
    },
    listContainer: {
        height: 50,
		flexDirection: 'row',
        borderBottomColor: 'black',
        width: '100%',
        borderBottomWidth: 0.5,
        alignItems: 'center',
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    nickname: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        width: '45%'
    },
    button: {
		height:55,
		marginTop:10,
        width: 56

    },
    callButton: {
        height: 40,
        width: 70,
        fontSize: 16,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'blue',
        fontWeight: 'bold',
        color: 'white',
    },
    callButton1: {
        height: 40,
        width: 100,
        fontSize: 16,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'green',
        fontWeight: 'bold',
        color: 'white',
    },
    callContainer: {
        alignItems: 'stretch',
        marginRight: 5
    }
})

const mapStateToProps = ({ posts }) => {
    return {
        listiWant: posts.listiWant,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPatchPostDonated: (idPost, username) => dispatch(patchPostDonated(idPost, username)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderUsersList)