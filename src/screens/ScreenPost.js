import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import Header from '../componentes/Header'
import MainPost from '../componentes/MainPost'

class ScreenPost extends Component {    

    render() {        
        return (            
            <View style={styles.container}>
                <Header />
                <Text style={styles.title}> Titulo do Post </Text>
                <MainPost image={require('../../assets/imgs/boat.jpg')} />
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
    }
})

export default ScreenPost