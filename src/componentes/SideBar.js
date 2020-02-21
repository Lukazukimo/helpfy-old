import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Image,
    SafeAreaView
} from 'react-native'
import { DrawerItems } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

// class SideBar extends Component{
//     render(){
//         return(
//             <SafeAreaView style={styles.container}>                
//                 <Text>Teste</Text>
//             </SafeAreaView>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     }
// })

// export default SideBar

export default SideBar = props => (
    <ScrollView>
        <ImageBackground
            source={require("../../assets/imgs/fence.jpg")}
            imageStyle={{ opacity: 0.75, backgroundColor: 'rgba(107, 13, 200, 0.75)' }}
            style={styles.imageBackground}>
            <Image 
                source={require("../../assets/imgs/icon.png")}
                style={styles.profile}/>
            <Text style={styles.name}>Nome Sobrenome</Text>

            <View style={styles.perfilContainer}>
                <Text style={styles.followers}>734 Followers</Text>
                <Icon name='md-people' size={16} color="rgba(255, 255, 255, 0.8)"/>
            </View>
        </ImageBackground>

        <View style={styles.container}>
            <DrawerItems {...props}/>
        </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    imageBackground: {
        width: undefined, 
        padding: 16,
        paddingTop: 30,        
    },
    perfilContainer: {
        flexDirection: 'row',        
    },
    container: {
        flex: 1,    
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#993399',        
        // borderColor: '#fff'
    },
    name: {
        // color: '#fff',
        color: '#993399',
        fontSize: 20,
        fontWeight: '800',
        fontWeight: 'bold',
        marginVertical: 8,        
    },
    followers: {
        color: 'rgba(255, 255, 255, 0.8)',
        // color: '#993399',
        fontSize: 13,
        marginRight: 4,        
    }
})