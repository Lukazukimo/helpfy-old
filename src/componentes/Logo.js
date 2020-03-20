import React, { Component } from "react"
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default props => {        
    return (            
        <View style={styles.container}>
            <Text style={styles.logo}> {props.logo} </Text>
        </View>            
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',        
        backgroundColor: 'transparent',
        alignItems: 'center',
    }, 
    logo: {
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'shelter',
    } 
})
