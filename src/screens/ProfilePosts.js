import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    FlatList,
    ScrollView
} from  'react-native'
import RadialGradient from 'react-native-radial-gradient'
import Post from '../componentes/Post'

class ProfilePosts extends Component{
    state = {
        posts: [{
            id: Math.random(),
            // nickname: 'Rafael Pereira Filho',
            // email: 'rafaelprrflh@gmail.com',
            image: require('../../assets/imgs/boat.jpg'),
            // comments: [{
            //     nickname: 'John Ray Sheldon',
            //     comment: 'Stunning'
            // }, {
            //     nickname: 'Ana Julia Arruda',
            //     comment: 'Foto Linda! Onde foi tirada?'
            // }]
        },{
            id: Math.random(),
            // nickname: 'Francisco Leandro Lima',
            // email: 'fllima@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            // comments: []
        }, {
            id: Math.random(),
            // nickname: 'Francisco Leandro Lima',
            // email: 'fllima@gmail.com',
            image: require('../../assets/imgs/boat.jpg'),
            // comments: []
        }, {
            id: Math.random(),
            // nickname: 'Francisco Leandro Lima',
            // email: 'fllima@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            // comments: []
        },{
            id: Math.random(),
            // nickname: 'Francisco Leandro Lima',
            // email: 'fllima@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            // comments: []
        }, {
            id: Math.random(),
            // nickname: 'Francisco Leandro Lima',
            // email: 'fllima@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            // comments: []
        }, {
            id: Math.random(),
            // nickname: 'Francisco Leandro Lima',
            // email: 'fllima@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            // comments: []
        }]
    }

    render() {        
        const widthScreen = Dimensions.get('window').width / 2
        const heightScreen = Dimensions.get('window').height / 2

        return(                        
                                                               
                <View style={styles.containerPosts}>
                    <ScrollView>
                        <FlatList numColumns={3}
                            data={this.state.posts}
                            keyExtractor={item => `${item.id}`}                        
                            renderItem={({ item }) =>                         
                            <Post key={item.id} {...item} 
                                tamanho={{
                                    width: Dimensions.get('window').width / 3,
                                    height: Dimensions.get('window').width / 3,
                                    resizeMode: "stretch",
                                    // margin: 1,
                                    // borderRadius: 15
                                }}/>}/>                        
                    </ScrollView>
                </View>                       
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    containerPosts: {
        flex: 1,
        alignContent: 'space-between'
    },
})

export default ProfilePosts