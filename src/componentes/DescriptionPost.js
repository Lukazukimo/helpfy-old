import React from 'react'
import {
    View, Text, StyleSheet
} from 'react-native'

export default props => {
    return(
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionPost}>{props.descriptionPost}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    descriptionContainer: {
        fontSize: 20,
        height: 90,
        marginTop: 5,
        borderTopColor: 'black',
        borderTopWidth: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginLeft: 20,
        borderLeftColor: 'black',
        borderLeftWidth: 1,
        borderRightColor: 'black',
        marginRight: 25,
        borderRightWidth: 1,
        borderRadius: 15,    
    },
    descriptionPost: {
        marginLeft: 10,
        marginTop: 5,
        marginRight: 10,
        textAlign: "justify"
    }
})
