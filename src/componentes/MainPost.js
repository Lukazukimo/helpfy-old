import React, { Component } from 'react'
import{
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Author from './Author'
import TitlePost from './TitlePost'
import DescriptionPost from './DescriptionPost'
import CommentPost from './CommentPost'



export default class MainPost extends Component {
        
    state = { 
        liked: true,
        iWant: true
    }


    render() {    
        const a = 'asiodhjasildjaslidjalsiojdkxzjkjzsdkfsjfksdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkklasidjalsikjnmdlaskmd.asl,dalmciasdj'
        
        const changeIcon = this.state.liked? 'black' : 'gray'
        const wantOrNo = this.state.iWant? styles.iWant : styles.iDontWant
        const wantOrNoText = this.state.iWant? 'Eu quero!' : 'Eu não quero'
        
        const comments = [{
			nickname: 'Ulisses',
			comment: 'Esse cara me roubou!!!'
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
        
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TitlePost titlePost={'Titulo do Post'} />
                    <Image source={this.props.image} style={styles.image}/>
                    <Author email={'fulano@teste.com'} nickname={'Fabio'} />
                    <DescriptionPost descriptionPost={a} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttons}
                            onPress={ () => this.setState({ iWant : !this.state.iWant})}>
                            <Text style={wantOrNo}>{wantOrNoText}</Text>	  
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}
                            onPress={ () => this.setState({ liked : !this.state.liked})}>
                            <Icon name={'heart'} size={40} color={changeIcon} style={{}} /> 
                        </TouchableOpacity>
                    </View>
                    <CommentPost comments={comments} />
                </ScrollView>
                <View style={styles.tabBottomBackground} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain',
        marginTop: -20
    },
    buttonContainer: {
		marginTop: 1,
		height: 56,
		flexDirection: 'row',
    },
    buttons: {
		height:55,
		marginTop:10,
    	flexDirection: 'row',
    	justifyContent: 'center',
    	alignItems: 'center',
        width: Dimensions.get('window').width * 0.5,
      },
    iWant: {
        height: 45,
        width: 130,
        fontSize: 18,
        borderTopColor: 'black',
        borderTopWidth: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderLeftColor: 'black',
        borderLeftWidth: 1,
        borderRightColor: 'black',
        borderRightWidth: 1,
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'blue',
        fontWeight: 'bold',
        color: 'white' 
    },
    iDontWant: {
        height: 45,
        width: 130,
        fontSize: 18,
        borderTopColor: 'black',
        borderTopWidth: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderLeftColor: 'black',
        borderLeftWidth: 1,
        borderRightColor: 'black',
        borderRightWidth: 1,
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'gray',
        fontWeight: 'bold',
        color: 'white'  
    },
    tabBottomBackground: {		
		width: '100%',
		height: 50,
		backgroundColor: 'rgba(50, 13, 119, 0.50)',				
	},
})