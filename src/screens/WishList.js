import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableOpacity,
    SafeAreaView
} from 'react-native'
import RadialGradient from 'react-native-radial-gradient'
import Header from './../componentes/Header'
import Post from './../componentes/Post'

class WishList extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Francisco Leandro Lima',
            email: 'fllima@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
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
                <View style={{width: '100%'}}>
                    <Header navigation={this.props.navigation}/>
                </View>   
                <View style={{width: '100%', flex: 1 }}>
                    <SafeAreaView style={{width: '200%'}}>
                        <FlatList style={{width: '100%'}}
                            data={this.state.posts}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) =>  {
                                return (
                                    <View style={{width: '100%'}}>
                                        <TouchableOpacity onPress={() => alert(`Post ${item.id}`)}>
                                            <Post key={item.id} {...item} />
                                        </TouchableOpacity>
                                        <Text>{item.nickname}</Text>
                                        <Text>{item.email}</Text>
                                        <Text>{item.comments}</Text>
                                    </View>
                                )   
                            }}
                        />
                    </SafeAreaView>    
                </View>
            </RadialGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    wishListContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default WishList