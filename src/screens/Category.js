import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    StatusBar
} from 'react-native'
import { Header } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

export default class Category extends Component {
    render() {
        return (
            //<View style={styles.container}>                
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
                    <Header                                   
                        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                        containerStyle={{
                        backgroundColor: 'transparent',
                        justifyContent: 'space-around',
                        }}
                    />
                    <StatusBar backgroundColor='transparent'
                        translucent={true}/>
                </LinearGradient>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: 'red',
        height: 50,
    },
    centerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'green',
        paddingTop: 0

    }
})