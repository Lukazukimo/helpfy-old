import React, { Component } from 'react'
import { View, 
    Text, 
    FlatList, 
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions,
    StatusBar
} from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements'
import Post from './Post'
import PostCategory from './PostCategory'
import LinearGradient from 'react-native-linear-gradient'
import {
    makeRemoteRequest
} from '../store/actions/posts'

class SearchList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            renderResult: false,            
            // data: [{
            //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            //     name: {
            //         first: 'Fabio',
            //         last: 'Huang',            
            //     },
            //     email: 'fabio@teste',
            // },{
            //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            //     name: {
            //         first: 'Gabriel',
            //         last: 'Ciccotti',            
            //     },
            //     email: 'gabriel@teste',
            // }, {
            //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            //     name: {
            //         first: 'Teste',
            //         last: 'TesteLastname',            
            //     },
            //     email: 'teste@teste',
            // }],
            data: [],
            error: null,
            posts: [{
                id: Math.random(),
                image: require('../../assets/imgs/icon.png'),
                title: 'Brinquedos'
            },{
                id: Math.random(),
                image: require('../../assets/imgs/icon.png'),
                title: 'Calçados'
            },{
                id: Math.random(),
                image: require('../../assets/imgs/icon.png'),
                title: 'Eletrodomésticos'
            },{
                id: Math.random(),
                image: require('../../assets/imgs/icon.png'),
                title: 'Higiene Pessoal'
            },{
                id: Math.random(),
                image: require('../../assets/imgs/icon.png'),
                title: 'Livros'
            },{
                id: Math.random(),
                image: require('../../assets/imgs/icon.png'),
                title: 'Material de Construção'
            },{
                id: Math.random(),
                image: require('../../assets/imgs/icon.png'),
                title: 'Material de Limpeza'
            },{
                id: Math.random(),
                image: require('../../assets/imgs/icon.png'),
                title: 'Material Escolar'
            },{
                id: Math.random(),
                image: require('../../assets/imgs/icon.png'),
                title: 'Móveis'
            },{
                id: Math.random(),
                image: require('../../assets/imgs/icon.png'),
                title: 'Roupas'
            }],
            arrayholder: []
        }
    }

    onNavigate = () => {
        return
    }

    componentDidMount() {
        // this.makeRemoteRequest()
        makeRemoteRequest(this.state, this.updateState)        
    }    

    updateState = (info) => {
        this.setState({...info})
    }

    // makeRemoteRequest = () => {
    //     this.setState({ loading: false })
    //     this.arrayholder = this.state.data;

    // }

    // makeRemoteRequest = () => {
    //     const url = `https://randomuser.me/api/?&results=20`;
    //     this.setState({ loading: true });

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(res => {
    //             this.setState({
    //                 data: res.results,
    //                 error: res.error || null,
    //                 loading: false,
    //             });
    //             this.arrayholder = res.results;
    //         })
    //         .catch(error => {
    //             this.setState({ error, loading: false });
    //         });
    // };

    renderResultFunction = (text) => {        
        if (this.state.renderResult === false){
            this.setState({ renderResult: true })
            // console.log('depois ', this.state.renderResult)
        } 
        if (text === '') {
            this.setState({ renderResult: false})
            // console.log('fiquei false')
        }
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '86%',
                    // backgroundColor: '#CED0CE',
                    marginLeft: '14%',
                }}
            />
        )
    }
    
    searchFilterFunction = text => {
        this.setState({
            value: text,
        })        
        const newData = this.state.arrayholder.filter(item => {
            const itemData = `${item.title.toUpperCase()}`
            const textData = text.toUpperCase()
            // console.log(itemData.indexOf(textData) > -1)
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
        })
    }

    goHome = () => {    
        this.props.navigation.navigate('Feed')
    }

    renderHeader = () => {
        return (                                   
            <SearchBar
                placeholder="Type Here..."
                placeholderTextColor={'#fff'}
                platform={'android'}
                lightTheme
                round
                onChangeText={text => {
                        this.searchFilterFunction(text)
                        this.renderResultFunction(text)
                        // console.log(this.state.renderResult)
                        // console.log(text)            
                    }                    
                }
                autoCorrect={false}
                value={this.state.value}
                containerStyle={styles.searchStyle}
                inputContainerStyle={styles.searchStyle}
                inputStyle={styles.searchStyle}
                iconColor={'#fff'}                               
            />                   
        )
    }

    render() {
        console.log(this.state)
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator />
                </View>
            )
        }
        // se renderResult verdadeiro renderiza a lista resultante da pesquisa
        // caso contrario nao
        const renderResultCondition = this.state.renderResult ?            
            <FlatList
                data={this.state.data}                
                renderItem={({ item }) => (
                    <ListItem                        
                        leftAvatar={{ source: { uri: item.image } }}
                        title={`${item.title}`}
                        subtitle={item.author}    
                        containerStyle={{ backgroundColor: 'transparent' }}
                        titleStyle={{ color: '#fff'}}
                        subtitleStyle={{ color: '#fff'}}
                        onPress={() => {
                            this.props.navigation.navigate('ScreenPost', { 
                                title: item.title,
                                author: item.author,
                                image: item.image,
                                comments: item.comments,
                                description: item.description,
                                postId: item.id,
                                emailPost: item.emailPost,
                                timePost: item.timePost,
                                userId: item.userId             
                            })
                        }}
                    />                    
                )}
                keyExtractor={item => item.email}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
            /> : 
            <FlatList                                
                renderItem={({ item }) => (
                    <ListItem                        
                        leftAvatar={{ source: { uri: item.image } }}
                        title={`${item.title}`}
                        subtitle={item.author}                        
                    />
                )}
                keyExtractor={item => item.email}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
            />
        const renderCategoria = this.state.renderResult ?
            null :
            // <View style={styles.teste}>
            // <TouchableOpacity style={styles.buttonCategory}>
            //          <Text style={styles.textCategory}>Teste</Text>
            //          <Text style={styles.textCategory}>></Text>
            // </TouchableOpacity> 
            <FlatList numColumns={2}
                data={this.state.posts}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) =>  {
                    return (
                        <View style={styles.categoryContainer}>                                    
                            <PostCategory key={item.id} {...item}  
                                navigation={this.props.navigation}
                                onNavigate={(this.onNavigate)}
                                tamanho={{
                                    width: Dimensions.get('window').width / (5/2),
                                    height: Dimensions.get('window').width / (5/2),
                                    resizeMode: "stretch",
                                    margin: 10,
                                    borderRadius: 15,
                                    // backgroundColor: '#fff',
                                }}/>                                                            
                            <Text style={styles.textCategory}>{item.title}</Text>
                        </View>                            
                    )   
                }}
            /> 
            // </View>

        return (
            <ScrollView>               
                <View style={styles.containerBack}>
                    { renderResultCondition }
                    { renderCategoria}
                </View>                
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    containerBack:{
        // flex: 1,
        backgroundColor: 'transparent',
    },
    categoryContainer:{
        // backgroundColor: 'red',
        // borderColor: 'white',
        // borderWidth: 2,
        paddingTop: 10,
        paddingBottom: 10,        
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width / 2
    },
    // buttonCategory:{
    //     backgroundColor: 'green',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between', 
    //     padding: 10,        
    // },
    textCategory: {
        color: 'rgba(255, 255, 255, 0.95)',
        textShadowColor: 'rgba(225, 22, 94, 1)', 
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 15,
        fontSize: 20,
		marginRight: 4,
		fontWeight: 'bold',
		// fontStyle: "italic",
		textAlignVertical: "center",
		textAlign: "center",
    },
    searchStyle: {
        backgroundColor: 'transparent', 
        color: '#fff',        
    },
    // teste: {
    //     backgroundColor: 'transparent',
    //     alignItems: 'center'
    // }
})

export default SearchList