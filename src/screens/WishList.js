import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    FlatList, 
    Dimensions,
    StatusBar
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Post from '../componentes/Post'

export default class WishList extends Component {
    
    state = {            
        posts: [{
            id: Math.random(),
            image: require('../../assets/imgs/bw.jpg'),
            title: 'Titulo Post 0'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/boat.jpg'),
            title: 'Titulo Post 2'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/fence.jpg'),
            title: 'Titulo Post 3'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/bw.jpg'),
            title: 'Titulo Post 1'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/boat.jpg'),
            title: 'Titulo Post 2'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/fence.jpg'),
            title: 'Titulo Post 3'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/bw.jpg'),
            title: 'Titulo Post 1'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/boat.jpg'),
            title: 'Titulo Post 2'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/fence.jpg'),
            title: 'Titulo Post 3'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/bw.jpg'),
            title: 'Titulo Post 1'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/boat.jpg'),
            title: 'Titulo Post 2'
        }, {
            id: Math.random(),
            image: require('../../assets/imgs/fence.jpg'),
            title: 'Titulo Post 3'
        }]
    }
    
    onNavigate = () => {
        return
    }

    render() {
        return (
            <LinearGradient colors={[
                'rgb(146, 135, 211)',
                'rgb(124, 147, 225)',
                'rgba(124, 147, 225, 0.8)',
                'rgb(155, 156, 213)',
                'rgb(162, 163, 217)',
                'rgba(162, 163, 217, 0.85)',
                'rgb(162, 163, 217)',
                'rgb(162, 163, 217)',
                'rgba(124, 147, 225, 0.8)',
                'rgb(124, 147, 225)',
                'rgb(146, 135, 211)',
            ]} style={styles.container}>
                <StatusBar backgroundColor='transparent'
                    translucent={true}/>
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Desejos</Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        <FlatList numColumns={2}
                            data={this.state.posts}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.categoryContainer}>
                                        <Post key={item.id} {...item}
                                            navigation={this.props.navigation}
                                            onNavigate={(this.onNavigate)}
                                            tamanho={{
                                                width: Dimensions.get('window').width / (5 / 2),
                                                height: Dimensions.get('window').width / (5 / 2),
                                                resizeMode: "stretch",
                                                margin: 10,
                                                borderRadius: 15,
                                                // backgroundColor: '#fff',
                                            }} />
                                        <Text style={styles.textTitle}>{item.title}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </ScrollView>
                {/* <View style={styles.tabBottomBackground}>
                </View> */}
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        // backgroundColor: 'rgba(255,255,255,0.5)',
        // backgroundColor: 'transparent',
        // height: '13%',
        height: 80,
        alignItems: 'center'
    },
    categoryContainer:{
        // backgroundColor: 'red',
        // borderColor: 'white',
        // borderWidth: 2,
        paddingTop: 10,        
        paddingBottom: 10,        
        justifyContent: 'center',        
        alignItems: 'center',
        width: Dimensions.get('window').width / 2
    },
    title: {
        marginTop: 30,
        marginLeft: 10,
        fontSize: 30,
        fontFamily: 'shelter',
        color: 'rgba(225, 22, 94, 0.7)',
        textShadowColor: '#fff',
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,
    },
    bodyContainer: {
        // backgroundColor: 'rgba(255,255,255,0.5)',
        alignItems: 'center',               
    },
    textTitle: {
        color: 'rgba(255, 255, 255, 0.95)',
        textShadowColor: 'rgba(225, 22, 94, 1)', 
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 15,
        fontSize: 20,
		marginRight: 4,
		fontWeight: 'bold',
		// fontStyle: "italic",
		textAlignVertical: "center",
        textAlign: "center",
        marginBottom: 10
    },
    tabBottomBackground: {
        width: '100%',
        height: 50,
        backgroundColor: 'transparent'
    }
})