import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native'
import Leaderboard from 'react-native-leaderboard'

class LeaderBoard extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [{
                id: 1,
                userName: 'Joe', 
                highScore: 52
            },{ 
                id: 2,  
                userName: 'Jenny', 
                highScore: 120
            },{
                id: 1,
                userName: 'Joe', 
                highScore: 52
            },{ 
                id: 2,  
                userName: 'Jenny', 
                highScore: 120
            },{
                id: 1,
                userName: 'Joe', 
                highScore: 52
            },{ 
                id: 2,  
                userName: 'Jenny', 
                highScore: 120
            },{
                id: 1,
                userName: 'Joe', 
                highScore: 52
            },{ 
                id: 2,  
                userName: 'Jenny', 
                highScore: 120
            },{
                id: 1,
                userName: 'Joe', 
                highScore: 52
            },{ 
                id: 2,  
                userName: 'Jenny', 
                highScore: 120
            },{
                id: 1,
                userName: 'Joe', 
                highScore: 52
            },{ 
                id: 2,  
                userName: 'Jenny', 
                highScore: 120
            },{
                id: 1,
                userName: 'Joe', 
                highScore: 52
            },{ 
                id: 2,  
                userName: 'Jenny', 
                highScore: 120
            },{
                id: 1,
                userName: 'Joe', 
                highScore: 52
            },{ 
                id: 2,  
                userName: 'Jenny', 
                highScore: 120
            },{
                id: 1,
                userName: 'Joe', 
                highScore: 52
            },{ 
                id: 2,  
                userName: 'Jenny', 
                highScore: 120
            }] //can also be an object of objects!: data: {a:{}, b:{}}
        }
    }
     
    render() {
        return (
            <View style={styles.container}>                
                <View style={styles.nameContaienr}>
                    <Text style={styles.nameStyle}>Fabio</Text>
                </View>
                <View style={styles.scoreContainer}>
                    <View style={styles.scoreTextContainer}>
                        <Text style={styles.scoreText}>4th</Text>
                    </View>
                    <View style={styles.imageProfileContainer}>
                        <Image source={require('../../assets/imgs/icon.png')} style={styles.imageProfile}/>
                    </View>
                    <View style={styles.scoreTextContainer}>
                        <Text style={styles.scoreText}>650 pts</Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (                            
                            <View style={styles.containerListItem}>                                
                                <Text style={styles.listTextName}>{item.userName}</Text>
                                <Text style={styles.listTextScore}>{item.highScore}</Text>
                            </View>
                        )}
                    />                   
                </View>
            </View>

        
            // <Leaderboard 
            //     data={this.state.data}
            //     containerStyle={styles.container}
            //     sortBy='highScore' 
            //     labelBy='userName'/>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'green',
        flex: 1,        
    },
    nameContaienr: {
        // backgroundColor: 'yellow',
        height: Dimensions.get('window').width * (1 / 8),
        justifyContent: "center",
        alignItems: 'center'      
    },
    nameStyle: {
        fontSize: 24
    },
    scoreContainer:{
        // backgroundColor: 'blue',
        flexDirection: 'row',
        height: Dimensions.get('window').width * (1 / 2.7),
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfileContainer: {
        borderRadius: 120,
        height: 120,
        width: 120,
        // height: Dimensions.get('window').width * (1 / 2.7),
        // width: Dimensions.get('window').width * (1 / 3),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfile: {
        height: 100,
        width: 100,
        borderRadius: 100,
        resizeMode: 'stretch',        
    },
    scoreTextContainer: {
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').width * (1 / 2.7),
        width: Dimensions.get('window').width * (1 / 3),
    },
    scoreText: {
        fontSize: 24
    },
    bodyContainer: {
        flex: 1
    },
    containerListItem: {
        // backgroundColor: 'purple',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
    },
    listTextName: {
        fontSize: 20
    },
    listTextScore: {
        fontSize: 20,
        fontWeight: 'bold'
    }

})

export default LeaderBoard