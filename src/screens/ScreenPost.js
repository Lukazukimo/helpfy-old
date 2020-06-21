import React, { Component } from 'react'
import{
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Author from '../componentes/Author'
import CommentPost from '../componentes/CommentPost'
import IWantList from '../componentes/IWantList'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { 
    like, 
    verifyLike,
    dislike,
    iWant,
    iDontWant,
    verifyiWant,
    iWantList,
} from '../store/actions/posts'
import { notificationUp, changeNotificationIcon } from '../store/actions/user'
import AddComment from '../componentes/AddComment'
import moment from 'moment'

class ScreenPost extends Component {    
    constructor(props){
        super(props)
        this.state = { 
            liked: false,
            iWant: false,
            showIWantList: false,
            userIdLike: '',
            id: this.props.navigation.state.params.postId,
            title: this.props.navigation.state.params.title,
            author: this.props.navigation.state.params.author,
            description: this.props.navigation.state.params.description,
            image: this.props.navigation.state.params.image,
            comments: this.props.navigation.state.params.comments,
            emailPost: this.props.navigation.state.params.emailPost,
            timePost: this.props.navigation.state.params.timePost,
            userDonated: this.props.navigation.state.params.userDonated,
            postAuthorId: this.props.navigation.state.params.userId,
            postDonated: this.props.navigation.state.params.postDonated
        }

        verifyLike(this.props.userId, this.state.id).then(res => {
            this.setState({ liked: res})            
        })

        verifyiWant(this.props.userId, this.state.id).then(res => {
            this.setState({ iWant: res})            
        })
        

    }

    componentDidMount = () => {
        // // console.log(this.state)
        // let newArray = []
        // // console.log(this.state.arrayLike)
        // // console.log(typeof(this.state.arrayLike))
        // for(let x in this.state.arrayLike){
        //     newArray.push({
        //         ...this.state.arrayLike[x],
        //     })
        //     this.state.userIdLike = x            
        //     if(this.props.userId === this.state.userIdLike) {
        //         let b = Object.values(newArray[0])            
        //         this.setState({ liked: b[0]})
        //         // for(let y in teste) {
        //         //     teste2.push({
        //         //         ...teste[y]
        //         //     })
        //         // }
        //     }
        // }
        // // console.log('1 ', newArray)
        // // console.log('2 ', this.state.liked)
        //this.props.oniWantList(this.state.id)
        // console.log(this.state)
        this.props.oniWantList(this.state.id)
        console.log('postdonated', this.state.postDonated)

    }

    changeLike = () => {        
        if(this.props.userId){
            if (!(this.state.liked) || null){
                this.setState({ liked : true})
                this.props.onLike(this.props.userId, this.state.id)
                console.log(this.props.author)
                this.props.onNotificationUp(this.state.postAuthorId, this.props.userId, this.props.name, 'like', this.state.title)
                this.props.onChangeNotificationIcon(this.state.postAuthorId, true)

            } else {
                this.setState({ liked : false})
                this.props.onDislike(this.props.userId, this.state.id)
            }
        }        
    }

    changeiWant = () => {        
        if(this.props.userId){
            if (!(this.state.iWant) || null){
                this.setState({ iWant : true})
                this.props.oniWant(this.props.userId, this.state.id, this.props.name)
            } else {
                this.setState({ iWant : false})
                this.props.oniDontWant(this.props.userId, this.state.id)
            }
        }        
    }



    
    render() {
        // console.log(moment(this.state.timePost).format('MMMM Do YYYY, h:mm:ss a'))
        // console.log(moment(this.state.timePost).format())
        // console.log(moment(this.state.timePost).startOf('hour').fromNow())
        const changeIcon = this.state.liked ? 'red' : 'rgba(0, 0, 0, 0.50)'
        // const wantOrNo = this.state.iWant? styles.iWant : styles.iDontWant
        const wantOrNoText = this.state.iWant? 'Eu não quero!' : 'Eu quero!' 
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
                    onPress={this.changeLike}>
                    <Icon name={'heart'} size={40} color={changeIcon}/> 
                </TouchableOpacity>
                <LinearGradient colors={[
                    'rgba(225, 22, 94, 0.6)',
                    'rgba(225, 22, 94, 0.4)',
                    'rgba(225, 22, 94, 0.6)',
                    'rgba(225, 22, 94, 0.9)'
                ]} style={styles.wantButton}>
                    <TouchableOpacity
                        onPress={this.changeiWant}>
                        <Text style={styles.buttonText}>{wantOrNoText}</Text>	  
                    </TouchableOpacity> 
                </LinearGradient>
            </View>

        const isPostDonated = this.state.postDonated === undefined ? 
        <View style={styles.container}>
            <ScrollView>
                <IWantList isVisible={this.state.showIWantList}
                    idPost={this.state.id}
                    onCancel={() => this.setState({ showIWantList: false })}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{ this.state.title }</Text>
                </View>                    
                <Image source={{ uri: this.state.image }} style={styles.image}/>
                <Author email={'fulano@teste.com'} nickname={ 'aloalo'}/>                    
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
        </View> :
        <View style={styles.container}>
            <ScrollView>
                <IWantList isVisible={this.state.showIWantList} 
                    idPost={this.state.id}
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
        </View>        

        // <LinearGradient colors={[
        //     'rgb(146, 135, 211)',
        //     'rgb(124, 147, 225)',
        //     'rgba(124, 147, 225, 0.8)',
        //     'rgb(155, 156, 213)',
        //     'rgb(162, 163, 217)',            
        //     'rgba(162, 163, 217, 0.85)',
        //     'rgb(162, 163, 217)',
        //     'rgb(162, 163, 217)',
        //     'rgba(124, 147, 225, 0.8)',
        //     'rgb(124, 147, 225)',
        //     'rgb(146, 135, 211)',
        //     ]}
        //     style={styles.container}>
        //     <ScrollView>
        //         <IWantList isVisible={this.state.showIWantList} donation={this.handleDonation} 
        //             users={this.props.listiWant}
        //             onCancel={() => this.setState({ showIWantList: false })}/>
        //         <View style={styles.titleContainer}>
        //             <Text style={styles.titleText}>{ this.state.title }</Text>
        //         </View>                    
        //         <Image source={{ uri: this.state.image }} style={styles.image}/>
        //         <Author email={'fulano@teste.com'} nickname={ this.state.author }/>                    
        //         <View style={styles.descriptionContainer}>
        //             <Text style={styles.descriptionText}>{ this.state.description }</Text>
        //         </View>
        //         { renderButtom}
                
        //         <CommentPost comments={this.state.comments} />
        //         <View style={styles.comment}>
        //             { addComment }
        //         </View>
        //     </ScrollView>
        //     <View style={styles.tabBottomBackground} />
        // </LinearGradient> :
        // <LinearGradient colors={[
        //     'rgb(146, 135, 211)',
        //     'rgb(124, 147, 225)',
        //     'rgba(124, 147, 225, 0.8)',
        //     'rgb(155, 156, 213)',
        //     'rgb(162, 163, 217)',            
        //     'rgba(162, 163, 217, 0.85)',
        //     'rgb(162, 163, 217)',
        //     'rgb(162, 163, 217)',
        //     'rgba(124, 147, 225, 0.8)',
        //     'rgb(124, 147, 225)',
        //     'rgb(146, 135, 211)',
        //     ]}
        //     style={styles.container}>
        //     <ScrollView>
        //         <IWantList isVisible={this.state.showIWantList} 
        //             users={this.props.listiWant} donation={this.handleDonation}
        //             onCancel={() => this.setState({ showIWantList: false })}/>
        //         <View style={styles.titleContainer}>
        //             <Text style={styles.titleText}>{ this.state.title }</Text>
        //         </View>                    
        //         <Image source={{ uri: this.state.image }} style={styles.image}/>
        //         <Author email={'fulano@teste.com'} nickname={ this.state.author }/>                    
        //         <View style={styles.descriptionContainer}>
        //             <Text style={styles.descriptionText}>{ this.state.description }</Text>
        //         </View>
        //         { renderButtom}
                
        //         <CommentPost comments={this.state.comments} />
        //         <View style={styles.comment}>
        //             { addComment }
        //         </View>
        //     </ScrollView>
        //     <View style={styles.tabBottomBackground} />
        // </LinearGradient>
        return (         
            // <View style={[styles.container, { paddingTop: 20 }]}>
            //     {isPostDonated}
            // </View>
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
                style={[styles.container, { paddingTop: 20 }]}>
                {isPostDonated}
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,        
        // backgroundColor: 'green'
    },
    titleContainer: {
        // paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 5,
        // marginRight: 5,
        height: 50,

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
        userId: user.localId,
        posts: posts.posts,
        listiWant: posts.listiWant,
        id: posts.id,
        author: posts.author,
        postAuthorId: posts.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLike: (userId, postId) => dispatch(like(userId, postId)),
        onDislike: (userId, postId) => dispatch(dislike(userId, postId)),
        oniWant: (userId, postId, name) => dispatch(iWant(userId, postId, name)),
        oniDontWant: (userId, postId) => dispatch(iDontWant(userId, postId)),
        oniWantList: (userId) => dispatch(iWantList(userId)),
        onNotificationUp: (postUserId, userId, name, typeNotification, titlePost) => dispatch(notificationUp(postUserId, userId, name, typeNotification, titlePost)), 
        onChangeNotificationIcon: (postUserId, typeNotification) =>  dispatch(changeNotificationIcon(postUserId, typeNotification)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenPost)