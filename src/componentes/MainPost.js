import React, { Component } from 'react'
import{
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text
} from 'react-native'
import Author from './Author'

export default class MainPost extends Component {
    render() {    
        return(
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image}/>
                <Author email={'fulano@teste.com'} nickname={'Fabio'} />
                <View style={styles.description}>
                    <Text styles={styles.textDescription}> 
                        Esse item é mt raro blalala moro em sao paulo e tals 
                        asidhasuid dasdasdasdasdasdasdasd sadddddddddddddddddd
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: -20
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    },
    description: {
        marginLeft: 20,
        marginTop: 5,

    },
    textDescription: {
        fontSize: 18
    }
})