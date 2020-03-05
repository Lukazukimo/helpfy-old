import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Teste from './Teste'

export default class App extends Component{
    render(){
        return(
            <View style={{ flex: 1 }}>
                <Text>Teste</Text>
                {/* <Teste /> */}
            </View>
        )
    }

}