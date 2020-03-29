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
import Author from '../componentes/Author'
import DescriptionPost from '../componentes/DescriptionPost'
import CommentPost from '../componentes/CommentPost'
import AuthorPost from '../componentes/AuthorPost'
import IWantList from '../componentes/IWantList'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'

class ScreenPost extends Component {    

    state = { 
        liked: true,
        iWant: true,
        showIWantList: false,
        title: this.props.navigation.state.params.title,
        author: this.props.navigation.state.params.author,
        description: this.props.navigation.state.params.description,
        image: this.props.navigation.state.params.image,
        comments: this.props.navigation.state.params.comments,
    }
    
    render() {  
        const a = 'asiodhjasildjaslidjalsiojdkxzjkjzsdkfsjfksdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkklasidjalsikjnmdlaskmd.asl,dalmciasdj'
        
        const changeIcon = this.state.liked? 'black' : 'red'
        const wantOrNo = this.state.iWant? styles.iWant : styles.iDontWant
        const wantOrNoText = this.state.iWant? 'Eu quero!' : 'Eu não quero'
        
        const emailAuthorPost = 'aaa@gmail.com'
        const email = 'aaa@gmail.com'
        

              
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
                style={styles.container} >
                <ScrollView>
                    <IWantList isVisible={this.state.showIWantList} 
                        onCancel={() => this.setState({ showIWantList: false })}/>
                    <View style={styles.container}>
                        <Text style={styles.titlePost}>{ this.state.title }</Text>
                    </View>                    
                    <Image source={this.state.image} style={styles.image}/>
                    <Author email={'fulano@teste.com'} nickname={this.state.author}/>
                    <DescriptionPost descriptionPost={this.state.description} />
                    <View style={styles.buttonContainer}>
                        <AuthorPost test={emailAuthorPost === email}>
                            <TouchableOpacity style={styles.buttons}
                                onPress={ () => this.setState({ liked : !this.state.liked})}>
                                <Icon name={'heart'} size={40} color={changeIcon} style={{}} /> 
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons}
                                onPress={ () => this.setState({ iWant : !this.state.iWant})}>
                                <Text style={wantOrNo}>{wantOrNoText}</Text>	  
                            </TouchableOpacity>                            
                        </AuthorPost>
                        <AuthorPost test={emailAuthorPost !== email}>
                            <TouchableOpacity style={styles.iWantList} onPress={() => this.setState({ showIWantList: true })}>
                                <Text style={styles.iWantListButton}>Lista de quem quer</Text>	  
                            </TouchableOpacity>
                        </AuthorPost>
                    </View>
                        <CommentPost comments={this.state.comments} />  
                </ScrollView>
                <View style={styles.tabBottomBackground} />
            </LinearGradient>
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
        resizeMode: "contain",        
    },
    titlePost: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 50,
        fontWeight: 'bold'
    },
    buttonContainer: {
		marginTop: 1,
		height: 56,
		flexDirection: 'row',
    },
    buttons: {
		height:55,
		marginTop:-5,
    	flexDirection: 'row',
    	justifyContent: 'center',
    	alignItems: 'center',
        width: Dimensions.get('window').width * 0.5,
      },
      iWantList: {
		height:55,
		marginTop:10,
    	flexDirection: 'row',
    	justifyContent: 'center',
    	alignItems: 'center',
        width: Dimensions.get('window').width
      },
    iWant: {
        height: 45,
        width: 130,
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,        
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
        borderColor: 'black',
        borderWidth: 1, 
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'gray',
        fontWeight: 'bold',
        color: 'white'  
    },
    iWantListButton: {
        height: 45,
        width: 250,
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1, 
        borderRadius: 13,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'blue',
        fontWeight: 'bold',
        color: 'white'  
    },
    tabBottomBackground: {		
		width: '100%',
		height: 50,
		backgroundColor: 'transparent'
	},
})

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

export default connect(mapStateToProps)(ScreenPost)