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
        height: 90,
        marginLeft: 20,
        marginRight: 15,
    },
    descriptionPost: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 5,
        marginRight: 10,
        textAlign: "justify"
    }
})
