import React, { Component } from "react"
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

class Header extends Component {

    goSearch = () => {    
        this.props.navigation.navigate('Search')
    }

    render() {        
        return (            
            <View style={styles.container}>
                <View style={styles.rowContainer}>      
                    <Image source={require('../../assets/imgs/icon.png')} style={styles.profile}/>
                    <Text style={styles.title}>Helpfy</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.icon}>
                        <Icon name='bell' size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}
                        onPress={this.goSearch}>
                        <Icon name='search' size={30} />
                    </TouchableOpacity>                        
                </View>
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        // borderBottomWidth: 1,
        // borderColor: '#bbb',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',        
        backgroundColor: 'transparent',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile: {
        height: 40,
        width: 40,
        borderWidth: 3,
        borderRadius: 40,
        borderColor: '#320056',
        marginRight: 20,        
        // redimensiona a imagem inteira
        // resizeMode: 'contain',
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    icon: {
        paddingRight: 10,
        paddingLeft: 10,
        color: '#320056'
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