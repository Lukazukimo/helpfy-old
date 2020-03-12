import React, { Component } from 'react'
import { 
    View, 
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Text
} from 'react-native'
import RadialGradient from 'react-native-radial-gradient'
import Header from './../componentes/Header'
import Post from './../componentes/Post'

class LikedScreen extends Component {
    state = {
        posts: [{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/fence.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        },{
            id: Math.random(),
            image: require('../../assets/imgs/gate.jpg'),
            title: 'Post sobre çççç'
        }]
    }

    render (){
        const widthScreen = Dimensions.get('window').width / 2
        const heightScreen = Dimensions.get('window').height / 2
            
        return(    
            <RadialGradient style={{width:'800', height: '600'}}                 
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
                <Header navigation={this.props.navigation}/>
                    <FlatList numColumns={2}
                        data={this.state.posts}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) =>  {
                            return (
                                <View style={styles.likedPosts}>
                                    <Post key={item.id} {...item}  tamanho={{
                                        width: Dimensions.get('window').width / (5/2),
                                        height: Dimensions.get('window').width / (5/2),
                                        resizeMode: "stretch",
                                        margin: 10,
                                        borderRadius: 15
                                    }}/>
                                    <Text style={styles.titlePost}>{item.title}</Text>
                                </View>
                                
                            )   
                        }}
                    />  
            </RadialGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    likedPost: {
        flexDirection: 'row',
        alignContent: 'space-around'
    },
    titlePost: {
        marginLeft: 43,
        marginTop: -8,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 13

    }
})

export default LikedScreen