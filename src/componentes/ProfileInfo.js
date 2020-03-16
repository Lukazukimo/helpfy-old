import React, { Component } from 'react'
import{
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from 'react-native'

export default props => {   
    return(
        <View style={styles.container}> 
            <Text style={styles.profileText}>{props.item} </Text>
            <Text style={styles.profileItem}>{props.title}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        backgroundColor: 'rgb(162, 170, 220)'

    },
    profileText: {
        fontWeight: 'bold',
        textAlign: 'justify',
        fontSize: 22,
        color: "#696969",
      },
      profileItem: {
        textAlign: 'justify',
        fontSize: 15,
        color: "#696969",
      }
})