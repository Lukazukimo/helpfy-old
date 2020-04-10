import React from 'react'
import{
    StyleSheet,
    View,
    Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Row } from 'native-base'

export default props => {    
    const typeIcon = props.icon2 === undefined ?        
        <Icon name={props.icon} size={32} color='rgba(225, 22, 94, 0.4)'
            style={styles.Icon} /> : 
        <Icon2 name={props.icon2} size={32} color='rgba(255, 255, 255, 0.7)'
            style={styles.Icon} /> 

    return(        
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                { typeIcon }
            </View>
            <View style={styles.conteudoContainer}>
                <Text style={styles.profileText}
                    numberOfLines={1}>{props.item} </Text>
                <Text style={styles.profileItem}
                    numberOfLines={1}>{props.title}</Text>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderTopWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    iconContainer: {
        justifyContent: 'center'
    },
    profileText: {
        fontWeight: 'bold',
        textAlign: 'justify',
        fontSize: 22,
        paddingLeft: 10,
        color: 'rgba(225, 22, 94, 0.7)',        
        textShadowColor: '#fff', 
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,
    },
    profileItem: {
        textAlign: 'justify',
        fontSize: 15,
        paddingLeft: 10,
        color: "#eee",
        // color: "#696969",
    }
})