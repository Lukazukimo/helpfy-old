import React, { Component } from 'react'
import {
    View,    
    StyleSheet,
    StatusBar
} from 'react-native'
import SearchList from '../componentes/SearchList'
import LinearGradient from 'react-native-linear-gradient'

class Search extends Component {        
    render() {                  
        return (            
            <LinearGradient colors={[
                'rgb(146, 135, 211)',
                'rgb(124, 147, 225)',
                'rgba(124, 147, 225, 0.95)',
                'rgb(155, 156, 213)',
                'rgb(162, 163, 217)',            
                'rgba(162, 163, 217, 0.90)',
                'rgb(162, 163, 217)',
                'rgb(162, 163, 217)',
                'rgba(124, 147, 225, 0.95)',
                'rgb(124, 147, 225)',
                'rgb(146, 135, 211)',
                ]}
                style={styles.container} >
                <SearchList navigation={this.props.navigation}/>
            </LinearGradient>    
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        paddingTop: StatusBar.currentHeight
    }
})

export default Search