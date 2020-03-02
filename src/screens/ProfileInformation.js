import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native'
import {Icon} from 'react-native-elements'

class ProfileInformation extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.miniContainer}>
                    <Icon name='user' type='feather'/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} 
                            numberOfLines={1}>Fabio Wu Huang</Text>
                        <Text style={styles.textTitle}>Nome</Text>
                    </View>
                </View>
                <View style={styles.miniContainer}>
                    <Icon name='user' type='feather'/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} 
                            numberOfLines={1}>25/09/1998</Text>
                        <Text style={styles.textTitle}>Data de Nascimento</Text>
                    </View>
                </View>
                <View style={styles.miniContainer}>
                    <Icon name='user' type='feather'/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} 
                            numberOfLines={1}>Masculino</Text>
                        <Text style={styles.textTitle}>Genero</Text>
                    </View>
                </View>
                <View style={styles.miniContainer}>
                    <Icon name='user' type='feather'/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} 
                            numberOfLines={1}>Sao Paulo</Text>
                        <Text style={styles.textTitle}>Estado</Text>
                    </View>
                </View>
                <View style={styles.miniContainer}>
                    <Icon name='user' type='feather'/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} 
                            numberOfLines={1}>Sao Paulo</Text>
                        <Text style={styles.textTitle}>Estado</Text>
                    </View>
                </View>
                <View style={styles.miniContainer}>
                    <Icon name='user' type='feather'/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} 
                            numberOfLines={1}>Sao Paulo</Text>
                        <Text style={styles.textTitle}>Estado</Text>
                    </View>
                </View>
                <View style={styles.miniContainer}>
                    <Icon name='user' type='feather'/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} 
                            numberOfLines={1}>Sao Paulo</Text>
                        <Text style={styles.textTitle}>Estado</Text>
                    </View>
                </View>
                {/* <View style={styles.miniContainer}>
                    <Icon name='user' type='feather'/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} 
                            numberOfLines={1}>Sao Paulo</Text>
                        <Text style={styles.textTitle}>Estado</Text>
                    </View>
                </View>
                <View style={styles.miniContainer}>
                    <Icon name='user' type='feather'/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} 
                            numberOfLines={1}>Sao Paulo</Text>
                        <Text style={styles.textTitle}>Estado</Text>
                    </View>
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    miniContainer:{
        flexDirection: 'row',
        borderColor: 'red',
        borderBottomWidth: 2,
        alignItems: 'center',
        padding: 5,
        paddingLeft: 8
    },
    textContainer: {
        paddingLeft: 10,        
        width: Dimensions.get('window').width * 8/9
    },    
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textTitle: {
        fontSize: 15
    }
})

export default ProfileInformation