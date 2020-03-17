import React, { Component, useImperativeHandle } from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native'
import { Header } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

export default class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.navigation.state.params.title
        }
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
            ]}
            style={styles.container} >
                {/* <Header                                   
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    containerStyle={{
                    backgroundColor: 'transparent',
                    justifyContent: 'space-around',
                    }}
                /> */}
                {/* <StatusBar backgroundColor='transparent'
                    translucent={true}/> */}
                <View style={styles.headerContainer}>
                <Text style={styles.title}>{this.state.title}</Text>
                </View>
            </LinearGradient>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        backgroundColor: 'transparent',
        height: 80,
        alignItems: 'center'
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
        
    }
})