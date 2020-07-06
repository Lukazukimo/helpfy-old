import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native'
import Leaderboard from 'react-native-leaderboard'
import {
    getNames,
    getScoreBar
} from '../store/actions/leaderBoard'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                index: 0,
                score: 0
            },
            isloading: true,
            data: []
            // data: [{
            //     id: 1,
            //     userName: 'Joe', 
            //     highScore: 52
            // },{ 
            //     id: 2,  
            //     userName: 'Jenny', 
            //     highScore: 120
            // },{
            //     id: 1,
            //     userName: 'Joe', 
            //     highScore: 52
            // },{ 
            //     id: 2,  
            //     userName: 'Jenny', 
            //     highScore: 120
            // },{
            //     id: 1,
            //     userName: 'Joe', 
            //     highScore: 52
            // },{ 
            //     id: 2,  
            //     userName: 'Jenny', 
            //     highScore: 120
            // },{
            //     id: 1,
            //     userName: 'Joe', 
            //     highScore: 52
            // },{ 
            //     id: 2,  
            //     userName: 'Jenny', 
            //     highScore: 120
            // },{
            //     id: 1,
            //     userName: 'Joe', 
            //     highScore: 52
            // },{ 
            //     id: 2,  
            //     userName: 'Jenny', 
            //     highScore: 120
            // },{
            //     id: 1,
            //     userName: 'Joe', 
            //     highScore: 52
            // },{ 
            //     id: 2,  
            //     userName: 'Jenny', 
            //     highScore: 120
            // },{
            //     id: 1,
            //     userName: 'Joe', 
            //     highScore: 52
            // },{ 
            //     id: 2,  
            //     userName: 'Jenny', 
            //     highScore: 120
            // },{
            //     id: 1,
            //     userName: 'Joe', 
            //     highScore: 52
            // },{ 
            //     id: 2,  
            //     userName: 'Jenny', 
            //     highScore: 120
            // },{
            //     id: 1,
            //     userName: 'Joe', 
            //     highScore: 52
            // },{ 
            //     id: 2,  
            //     userName: 'Jenny', 
            //     highScore: 120
            // }] 
        }
    }


    componentDidMount = () => {
        getNames().then(res => {
            res.sort((a, b) => {
                return a.highScore - b.highScore
            })
            let indice = res.findIndex(a => a.id == this.props.userId)
            this.setState({ 
                data: res, 
                isLoading: false,  
                user: {
                    index: indice == -1 ? '-' : `${indice+1}º`,
                    score: indice == -1 ? 0 : res[indice].highScore 
                }
            })
        })
        // getScoreBar('iKOkUKM1AAXDQYytondeLXjDqM03')
    }

    render() {        
        if (this.state.isLoading) {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        const userLogged = this.props.userName ?
            <View style={styles.nameContaienr}>
                <Text style={styles.nameStyle}>{this.props.userName}</Text>
            </View>
            :
            <View style={styles.nameContaienr}>
                <Text style={styles.nameStyle}>Usuario</Text>
            </View>
        // console.log(this.state.user)        

        return (
            <View style={styles.container}>
                {userLogged}
                <View style={styles.scoreContainer}>
                    <View style={styles.scoreTextContainer}>
                        <Text style={styles.scoreText}>{this.state.user.index}</Text>
                    </View>
                    <View style={styles.imageProfileContainer}>
                        <Image source={require('../../assets/imgs/icon.png')} style={styles.imageProfile} />
                    </View>
                    <View style={styles.scoreTextContainer}>
                        <Text style={styles.scoreText}>{this.state.user.score} pts</Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.bodyTitle}>
                        <Text style={styles.textBodyTitle}>Nº</Text>
                        <Text style={styles.textBodyTitle}>Nome</Text>
                        <Text style={styles.textBodyTitle}>Pts</Text>
                    </View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.containerListItem}>
                                    <Text style={styles.listTextName}>{index + 1}</Text>
                                    <Text style={styles.listTextName}>{item.name}</Text>
                                    <Text style={styles.listTextScore}>{item.highScore}</Text>
                                </View>
                            )}
                        }
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
    scoreContainer: {
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
    bodyTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 5,
        // backgroundColor: '#421'
    },
    textBodyTitle: {
        fontSize: 22,
        fontWeight: 'bold'
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

const mapStateToProps = ({ user }) => {
    return {
        userName: user.name,
        userId: user.localId,
    }
}

export default connect(mapStateToProps)(LeaderBoard)

// export default LeaderBoard