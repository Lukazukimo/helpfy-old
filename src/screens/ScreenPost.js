import React, { Component } from 'react'
import{
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Author from '../componentes/Author'
import CommentPost from '../componentes/CommentPost'
import IWantList from '../componentes/IWantList'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import AddComment from '../componentes/AddComment'

class ScreenPost extends Component {    

    state = { 
        liked: true,
        iWant: true,
        showIWantList: false,
        id: this.props.navigation.state.params.postId,
        title: this.props.navigation.state.params.title,
        author: this.props.navigation.state.params.author,
        description: this.props.navigation.state.params.description,
        image: this.props.navigation.state.params.image,
        comments: this.props.navigation.state.params.comments,
        emailPost: this.props.navigation.state.params.emailPost
    }
    
    render() {  

        const changeIcon = this.state.liked? 'rgba(0, 0, 0, 0.50)' : 'red'
        // const wantOrNo = this.state.iWant? styles.iWant : styles.iDontWant
        const wantOrNoText = this.state.iWant? 'Eu quero!' : 'Eu não quero!'        
        const addComment = this.props.name ?
            <AddComment postId={this.state.id} /> : null

        const renderButtom = this.props.email === this.state.emailPost ?
            <View style={styles.buttonContainer}>
                <LinearGradient colors={[
                    'rgba(225, 22, 94, 0.6)',
                    'rgba(225, 22, 94, 0.4)',
                    'rgba(225, 22, 94, 0.6)',
                    'rgba(225, 22, 94, 0.9)'
                ]} style={styles.listButton}>
                    <TouchableOpacity
                        onPress={() => this.setState({ showIWantList: true })}>
                        <Text style={styles.buttonText}>Lista de Pessoas</Text>	  
                    </TouchableOpacity> 
                </LinearGradient>
            </View> :
            <View style={[styles.buttonContainer, {
                    justifyContent: 'space-around',
                    paddingLeft: 40,
                    paddingRight: 20 }]}>
                <TouchableOpacity
                    onPress={ () => this.setState({ liked : !this.state.liked})}>
                    <Icon name={'heart'} size={40} color={changeIcon}/> 
                </TouchableOpacity>
                <LinearGradient colors={[
                    'rgba(225, 22, 94, 0.6)',
                    'rgba(225, 22, 94, 0.4)',
                    'rgba(225, 22, 94, 0.6)',
                    'rgba(225, 22, 94, 0.9)'
                ]} style={styles.wantButton}>
                    <TouchableOpacity
                        onPress={ () => this.setState({ iWant : !this.state.iWant})}>
                        <Text style={styles.buttonText}>{wantOrNoText}</Text>	  
                    </TouchableOpacity> 
                </LinearGradient>
            </View>
              
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
                <ScrollView>
                    <IWantList isVisible={this.state.showIWantList} 
                        onCancel={() => this.setState({ showIWantList: false })}/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{ this.state.title }</Text>
                    </View>                    
                    <Image source={{ uri: this.state.image }} style={styles.image}/>
                    <Author email={'fulano@teste.com'} nickname={ this.state.author }/>                    
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>{ this.state.description }</Text>
                    </View>
                    { renderButtom}
                    
                    <CommentPost comments={this.state.comments} />
                    <View style={styles.comment}>
                        { addComment }
                    </View>
                </ScrollView>
                <View style={styles.tabBottomBackground} />
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    titleContainer: {
        // paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        height: 40,

        // backgroundColor: 'yellow'
    },
    titleText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'shelter',
        color: 'rgba(225, 22, 94, 0.7)',
        textShadowColor: '#fff',
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,
        marginTop: 5,
        fontWeight: 'bold'           
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: "contain",
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    descriptionContainer: {
        minHeight: 40,
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 25,        
    },
    descriptionText: {
        fontSize: 15,
        textAlign: "justify"
    },
    buttonContainer: {		
		height: 70,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    listButton: {
        height: 45,        
        width: '90%',
        borderRadius: 25,                
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center',  
    },
    wantButton: {
        height: 45,        
        width: '70%',
        borderRadius: 25,                
        justifyContent: 'center',
        alignContent: 'center',
    },
    comment: {
        flex: 1
    },
    tabBottomBackground: {		
		width: '100%',
		height: 50,
		backgroundColor: 'transparent'
	},
})

const mapStateToProps = ({ posts, user }) => {
    return {
        name: user.name,
        email: user.email,
        posts: posts.posts
    }
}

export default connect(mapStateToProps)(ScreenPost)