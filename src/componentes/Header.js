import React, { Component } from "react"
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

class Header extends Component {

    render() {        
        return (            
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent'
                    translucent={true}/>
                <View style={styles.rowContainer}>      
                    <Image source={require('../../assets/imgs/icon.png')} style={styles.profile}/>
                    <Text style={styles.title}>Helpfy</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.icon}
                        onPress={() => this.props.navigation.navigate('Notification')}>
                        <Icon name='bell' size={30} color='rgb(84, 76, 126)'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}
                        onPress={() => this.props.navigation.navigate('Search')}>                        
                        <Icon name='search' size={30} color='rgb(84, 76, 126)'/>
                    </TouchableOpacity>                        
                </View>
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 20,
        padding: 10,
        // borderBottomWidth: 1,
        // borderColor: '#bbb',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',        
        backgroundColor: 'transparent',
        borderBottomColor: 'black',
        // borderBottomWidth: 1,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile: {
        height: 40,
        width: 40,
        borderWidth: 2,
        borderRadius: 40,
        borderColor: 'rgb(84, 76, 126)',
        marginRight: 20,        
        // redimensiona a imagem inteira
        // resizeMode: 'contain',       
        backgroundColor: '#fff'
    },
    title: {        
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28,
        color: 'rgba(225, 22, 94, 0.7)',
        textShadowColor: '#fff', 
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10, 
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    icon: {
        paddingRight: 10,
        paddingLeft: 10,        
    }
    // user: {
    //     fontSize: 10,
    //     color: '#888'
    // },
    // avatar: {
    //     width: 30,
    //     height: 30,
    //     marginLeft: 10,
    // }
})

// const mapStateToProps = ({ user }) => {
//     return {
//         email: user.email,
//         name: user.name,
//     }
// }

export default Header
// export default connect(mapStateToProps, null)(Header)