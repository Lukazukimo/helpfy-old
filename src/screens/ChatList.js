import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    View,
    Image,
} from 'react-native'
import {
    getPeoples
} from '../store/actions/chatMessage'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'

class ChatList extends Component {
    constructor(props){
        super(props)
        this.state = {
            lisOfPeople: []
        }    
    }

    componentDidMount = () => {
        // console.log('=========================================')
        getPeoples(this.props.userId).then(res => {
            this.setState({ lisOfPeople: res })
        })        
    }

    render(){
        console.log(this.state.lisOfPeople)
        return(
            <LinearGradient colors={[
                'rgb(146, 135, 211)',
                'rgb(124, 147, 225)',
                'rgba(124, 147, 225, 0.8)',
                'rgb(155, 156, 213)',
                'rgb(162, 163, 217)',            
                'rgba(162, 163, 217, 0.85)',
                'rgb(162, 163, 217)',
                'rgb(162, 163, 217)',
                'rgba(124, 147, 225, 0.8)',
                'rgb(124, 147, 225)',
                'rgb(146, 135, 211)',
                ]} style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Pessoas</Text>
                    </View>   
                    <FlatList
                        data={this.state.lisOfPeople}
                        keyExtractor={item => item.userId}
                        renderItem={({ item }) => (                            
                            <View style={styles.containerListItem}>                                
                                <TouchableOpacity style={styles.ListItem} 
                                    onPress={() => {                                   
                                        this.props.navigation.navigate('ChatMessage', { 
                                            userId: item.userId
                                        })
                                    }}>
                                    <Image source={require('../../assets/imgs/icon.png')} style={styles.profile}/>
                                    <Text style={styles.itemText}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignContent: 'center',
    },
    titleContainer: {        
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        height: 40,
    },
    titleText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'shelter',
        color: 'rgba(225, 22, 94, 0.7)',
        textShadowColor: '#fff',
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,
        marginTop: 5,
        fontWeight: 'bold'
    },
    containerListItem: {
        flexDirection: 'row',
        height: 60,
        justifyContent: "center",
        alignContent: 'center',
        padding: 10,
        // borderWidth: 1,
    },
    ListItem: {
        flex: 1,
        flexDirection: 'row',        
        alignContent: 'center',
        alignItems: "center"
        // backgroundColor: 'red'
    },
    profile: {
        height: 40,
        width: 40,
        borderWidth: 2,
        borderRadius: 40,
        borderColor: 'rgb(84, 76, 126)',
        marginRight: 20,        
        // redimensiona a imagem inteira
        // resizeMode: 'contain',
        backgroundColor: '#fff'
    },
    itemText: {
        color: '#fff',
        fontSize: 20
    }
})
const mapStateToProps = ({ user }) => {
    return {        
        userId: user.localId,
    }
}

export default connect(mapStateToProps)(ChatList)