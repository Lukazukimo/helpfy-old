import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import Header from '../componentes/Header'
import MainPost from '../componentes/MainPost'
import LinearGradient from 'react-native-linear-gradient'

class ScreenPost extends Component {    


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
                <Header navigation={this.props.navigation}/>  
                <MainPost image={require('../../assets/imgs/boat.jpg')} />
            </LinearGradient>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ScreenPost