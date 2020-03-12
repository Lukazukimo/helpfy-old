import React, { Component } from 'react'
import{
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'

class Post extends Component {
    render() {    
        return(
            <View style={styles.container}>
                {/* <Image source={require('../../assets/imgs/boat.jpg')}/> */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ScreenPost')}>
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