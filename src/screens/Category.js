import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    StatusBar
} from 'react-native'
import { Header } from 'react-native-elements'

export default class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header 
                    centerComponent={{ text: 'Teste', style: { color: '#fff'} }}
                    centerContainerStyle={styles.centerContainer}
                    containerStyle={styles.headerContainer}
                />
                {/* <Header
                    // placement="left"
                    // leftComponent={{ icon: 'menu', color: '#fff' }}
                    // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    // rightComponent={{ icon: 'home', color: '#fff' }}
                    statusBarProps={{ barStyle: 'light-content' }}
                    centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
                    outerContainerStyles={{ backgroundColor: '#324C66' }}
                /> */}
                <StatusBar backgroundColor="#324C66"
                    translucent={true}/>
            </View>
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