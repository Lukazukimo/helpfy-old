import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text
} from  'react-native'

class ProfileInformation extends Component{
    state = {

    }

    render() {
        return(
            <View style={styles.container}>
                <Text>teste</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }    
})

export default ProfileInformation