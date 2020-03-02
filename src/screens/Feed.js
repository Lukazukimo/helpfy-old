import React,{Component} from 'react'
import {
    View, 
    StyleSheet,
    FlatList,
    Text,
    ScrollView,
    Dimensions
} from 'react-native'
import Header from '../componentes/Header'
import Post from '../componentes/Post'
import ImageSlider from '../componentes/ImageSlider'
import LinearGradient from 'react-native-linear-gradient'
import RadialGradient from 'react-native-radial-gradient'

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

        const widthScreen = Dimensions.get('window').width / 2
        const heightScreen = Dimensions.get('window').height / 2

        return(                        
            <RadialGradient style={{width:400,height:400}}                 
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
                <Header navigation={this.props.navigation}/>                                          
                <View style={styles.containerPosts}>
                    <ScrollView>
                        <ImageSlider images={images}/> 
                        <Text style={styles.title}>Destaques</Text>
                        <FlatList horizontal 
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

                        <Text style={styles.title}>Destaques</Text>
                        <FlatList horizontal                    
                            data={this.state.posts}
                            keyExtractor={item => `${item.id}`}
                            // destructuring de item
                            renderItem={({ item }) =>                         
                            <Post key={item.id} {...item} 
                                tamanho={{
                                    width: Dimensions.get('window').width / (5/2),
                                    height: Dimensions.get('window').width / (5/2),
                                    resizeMode: "stretch",
                                    margin: 10,
                                    borderRadius: 15
                                }}/>}/>

                        <Text style={styles.title}>Destaques</Text>
                        <FlatList horizontal                    
                            data={this.state.posts}
                            keyExtractor={item => `${item.id}`}
                            // destructuring de item
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
                <View style={styles.tabBottomBackground}>
                </View>
                {/* <View style={styles.b}>
                    <Post />        
                    <Post />                 
                    <Post />                 
                </View> */}
            </RadialGradient>                
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
    // imageSlider: {
    //     flex: 1
    // },
    containerPosts: {
        flex: 2
    },
    title: {
        marginTop: 20,
        marginLeft: 10,
        fontSize: 30,
        fontFamily: 'shelter',
        
    },
    tabBottomBackground: {
        width: '100%',
        height: 50,
        backgroundColor: 'transparent'
    }
})

export default Feed