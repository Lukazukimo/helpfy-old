import React, { Component } from 'react'
import{
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableNativeFeedbackBase
} from 'react-native'

class Post extends Component {
    // constructor(props) {
    //     super(props)
    // }
    
    render() {            
        // console.log(this.props)
        
        return(
            <View style={styles.container}>
                {/* <Image source={require('../../assets/imgs/boat.jpg')}/> */}
                <TouchableOpacity onPress={() => {
                        // this.props.navigation.navigate('Category', { title: this.props.title})
                        this.props.navigation.navigate('ScreenPost', { 
                            title: this.props.title,
                            author: this.props.author,
                            image: this.props.image,
                            comments: this.props.comments,
                            description: this.props.description
                        })
                        this.props.onNavigate()}}>
                    <Image source={this.props.image} style={this.props.tamanho}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    // image: {
    //     width: Dimensions.get('window').width / (5/2),
    //     height: Dimensions.get('window').width / (5/2),
    //     resizeMode: "stretch",
    //     margin: 10,
    //     borderRadius: 15
    // }
})

// const mapStateToProps = ({ user }) => {
//     return {
//         name: user.name
//     }
// }

export default Post
// export default connect(mapStateToProps)(Post)