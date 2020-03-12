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
                <SearchList navigation={this.props.navigation}/>
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    }
})

export default Search