import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import SearchList from '../componentes/SearchList'

class Search extends Component {    

    render() {        
        return (            
            <View style={styles.container}>
                <SearchList />
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Search