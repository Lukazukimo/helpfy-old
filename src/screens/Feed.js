import React,{Component} from 'react'
import {
    View, 
    StyleSheet,
    FlatList,
    Text,
    ScrollView
} from 'react-native'
import Header from '../componentes/Header'
import Post from '../componentes/Post'
import ImageSlider from '../componentes/ImageSlider'
import LinearGradient from 'react-native-linear-gradient'

const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];


class Feed extends Component {

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

    render(){
        return(
            
            // <View style={styles.container}>
                <LinearGradient colors={['#267871', '#136a8a']}                    
                    start={{x: 0.0, y: 0.25}} 
                    end={{x: 0.5, y: 1.0}} 
                    locations={[0,0.5,0.6]}
                    style={styles.container} >
                    <Header />              
                    <View style={styles.imageSlider}>
                        <ImageSlider images={images} /> 
                    </View>
                    <View style={styles.containerPosts}>
                        <ScrollView>
                            <Text style={styles.title}>Destaques</Text>
                            <FlatList horizontal                        
                                data={this.state.posts}
                                keyExtractor={item => `${item.id}`}                        
                                renderItem={({ item }) =>                         
                                <Post key={item.id} {...item} />}/>    

                            <Text style={styles.title}>Destaques</Text>
                            <FlatList horizontal                    
                                data={this.state.posts}
                                keyExtractor={item => `${item.id}`}
                                // destructuring de item
                                renderItem={({ item }) =>                         
                                <Post key={item.id} {...item} />}/>

                            <Text style={styles.title}>Destaques</Text>
                            <FlatList horizontal                    
                                data={this.state.posts}
                                keyExtractor={item => `${item.id}`}
                                // destructuring de item
                                renderItem={({ item }) =>                         
                                <Post key={item.id} {...item} />}/>
                        </ScrollView>

                    </View>
                    {/* <View style={styles.b}>
                        <Post />        
                        <Post />                 
                        <Post />                 
                    </View> */}
                </LinearGradient>
            //</View>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
        // backgroundColor: '#f5fcff'        

    },
    imageSlider: {
        flex: 1
    },
    containerPosts: {
        flex: 2
    },
    title: {
        marginTop: 20,
        marginLeft: 10,
        fontSize: 30,
        fontFamily: 'shelter',
        
    }
})

export default Feed