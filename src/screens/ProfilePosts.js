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
            <RadialGradient style={{width:400,height:100}}                 
                // colors={['rgba(219, 138, 169, 0.51)', 
                //     'rgba(219, 129, 163, 0.65)',
                //     'rgba(211, 116, 152, 0.78)',
                //     'rgba(204, 87, 132, 0.78)',
                //     'rgba(170, 83, 186, 0.78)',
                //     'rgba(156, 47, 175, 0.58)',
                //     'rgba(50, 13, 119, 0.60)']}
                colors={['rgba(219, 138, 169, 0.41)', 
                    'rgba(219, 129, 163, 0.55)',
                    'rgba(211, 116, 152, 0.68)',
                    'rgba(204, 87, 132, 0.68)',
                    'rgba(170, 83, 186, 0.68)',
                    'rgba(156, 47, 175, 0.48)',
                    'rgba(50, 13, 119, 0.50)']}
                stops={[0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]} 
                center={[widthScreen,heightScreen]} 
                radius={350}
                style={styles.container} >                                                      
                <View style={styles.containerPosts}>
                    <ScrollView>
                        <FlatList
                            data={this.state.posts}
                            keyExtractor={item => `${item.id}`}                        
                            renderItem={({ item }) =>                         
                            <Post key={item.id} {...item} 
                                tamanho={{
                                    width: Dimensions.get('window').width / (5/2),
                                    height: Dimensions.get('window').width / (5/2),
                                    resizeMode: "stretch",
                                    margin: 10,
                                    borderRadius: 15
                                }}/>}/>                        
                    </ScrollView>
                </View>           
            </RadialGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    containerPosts: {
        flex: 1
    },
})

export default ProfilePosts