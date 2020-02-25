import React from 'react'
import {
    View, Text, StyleSheet
} from 'react-native'

export default props => {
    return(
        <View style={styles.container}>
            <Text style={styles.titlePost}>{props.titlePost}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titlePost: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 2,
        fontWeight: 'bold'
    }
})
