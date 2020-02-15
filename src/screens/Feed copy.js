import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../componentes/Header'
import Post from '../componentes/Post'
import { fetchPosts } from '../store/actions/posts'

class Feed extends Component{
    // state = {
    //     posts: [{
    //         id: Math.random(),
    //         nickname: 'Rafael Pereira Filho',
    //         email: 'rafaelprrflh@gmail.com',
    //         image: require('../../assets/imgs/fence.jpg'),
    //         comments: [{
    //             nickname: 'John Ray Sheldon',
    //             comment: 'Stunning'
    //         }, {
    //             nickname: 'Ana Julia Arruda',
    //             comment: 'Foto Linda! Onde foi tirada?'
    //         }]
    //     },{
    //         id: Math.random(),
    //         nickname: 'Francisco Leandro Lima',
    //         email: 'fllima@gmail.com',
    //         image: require('../../assets/imgs/bw.jpg'),
    //         comments: []
    //     }]
    // }

    componentDidMount = () => {
        this.props.onFetchPosts()
    }

    render() {
        return(
            <View style={styles.container}>
                <Header/>
                <FlatList
                    // posts pegando do const mapStateToProps
                    // global
                    data={this.props.posts}
                    keyExtractor={item => `${item.id}`}
                    // destructuring de item
                    renderItem={({ item }) =>                         
                        <Post key={item.id} {...item} />}/>                        
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }
})

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(fetchPosts())
    }
}

// export default Feed
export default connect(mapStateToProps, mapDispatchToProps)(Feed)