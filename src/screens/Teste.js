import React, { Component } from 'react'
import {
    Dimensions,
    StyleSheet
} from 'react-native'
import RadialGradient from 'react-native-radial-gradient'
import LinearGradient from 'react-native-linear-gradient'

export default class Teste extends Component {

    render(){
        const widthScreen = Dimensions.get('window').width / 2
        const heightScreen = Dimensions.get('window').height / 2
        return(
            // <RadialGradient style={{
            //         width: Dimensions.get('window').width,
            //         height: Dimensions.get('window').height 
            //     }}                 
            //     colors={['rgba(12, 138, 169, 0.41)', 
            //         'rgba(219, 129, 163, 0.55)',
            //         'rgba(211, 255, 152, 0.68)',
            //         'rgba(204, 87, 132, 0.68)',
            //         'rgba(170, 83, 186, 0.68)',
            //         'rgba(156, 47, 175, 0.48)',
            //         'rgba(50, 13, 119, 0.50)']}
            //     stops={[0.7, 0.7, 0.8, 0.7, 0.7, 0.7, 0.7]} 
            //     center={[widthScreen,heightScreen]} 
            //     radius={350}>
            // </RadialGradient>
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
                ]} style={styles.teste}>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    teste: {
        flex: 1
    }
})