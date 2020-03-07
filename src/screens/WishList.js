import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native'
import RadialGradient from 'react-native-radial-gradient'
import Header from './../componentes/Header'
import Post from './../componentes/Post'

class WishList extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Nome 1',
            email: 'nome1@gmail.com',
            image: require('./../../assets/imgs/bw.jpg'),
            comments: []
        }, {
            id: Math.random(),
            nickname: 'Nome 2',
            email: 'nome2@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            // comments: []
        },{
            id: Math.random(),
            nickname: 'Nome 3',
            email: 'nome3@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            // comments: []
        },{
            id: Math.random(),
            nickname: 'Nome 4',
            email: 'nome4@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            // comments: []
        }, {
            id: Math.random(),
            nickname: 'Nome 5',
            email: 'nome5@gmail.com',
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
                <View style={styles.wishListContainer}>
                    <ScrollView>
                        <SafeAreaView style={{width: '200%'}}>
                            <FlatList style={{width: '100%'}}
                                data={this.state.posts}
                                keyExtractor={item => `${item.id}`}
                                renderItem={({ item }) =>  {
                                    return (
                                        <View style={styles.wishListItem}>
                                            <TouchableOpacity onPress={() => alert("Testando!")}>
                                                <View style={styles.postItems}>
                                                    <View>
                                                        <Post key={item.id} {...item} tamanho={styles.postSize} />   
                                                    </View>
                                                    <View style={styles.postDescription}>
                                                        <Text style={styles.textDescription}>{item.nickname}</Text>
                                                        <Text style={styles.textDescription}>{item.email}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.lineStyle} />
                                            </TouchableOpacity>
                                        </View>
                                    )   
                                }}
                            />
                        </SafeAreaView>    
                    </ScrollView>
                </View>
            </RadialGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    wishListContainer: {
        paddingBottom: 23
    },

    wishListItem: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 20,
        marginLeft: 10, 
    },

    lineStyle: {
        borderBottomColor: '#000', 
        borderBottomWidth: 0.5,
        paddingBottom: 30
    },

    postSize: {
        width: 90,
        height: 90,
        borderRadius: 50
    },

    postItems: {
        flexDirection: 'row',
    },

    postDescription: {
        marginTop: 15,
        marginLeft: 25
    },

    textDescription: {
        fontWeight: 'bold',
        paddingBottom: 10
    }

})

export default WishList