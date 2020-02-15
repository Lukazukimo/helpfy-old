import React, { Component } from 'react'
import Header from './src/componentes/Header'
import { View } from 'react-native'
import Post from './src/componentes/Post'
 
export default class App extends Component{
    render() {

        const comments =[{
            nickname: 'Joana Elena Silva',
            comment: 'Excelente Foto!'
        }, {
            nickname: 'Rafael Gustavo',
            comment: 'Muito ruim! Faco Melhor..'
        }]

        return(
            <View style={{ flex: 1 }}>
                <Header/>
                <Post image={require('./assets/imgs/fence.jpg')} 
                    comments={comments}/> 
            </View>
        )
    }
}
