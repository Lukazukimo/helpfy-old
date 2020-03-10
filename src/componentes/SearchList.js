import React, { Component } from 'react';
import { View, 
    Text, 
    FlatList, 
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

class SearchList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            renderResult: false,            
            data: [{
                // picture: require('../../assets/imgs/boat.jpg'),
                name: {
                    first: 'Fabio',
                    last: 'Huang',            
                },
                email: 'fabio@teste',
            },{
                // picture: require('../../assets/imgs/boat.jpg'),
                name: {
                    first: 'Gabriel',
                    last: 'Ciccotti',            
                },
                email: 'gabriel@teste',
            }, {
                // picture: require('../../assets/imgs/boat.jpg'),
                name: {
                    first: 'Teste',
                    last: 'TesteLastname',            
                },
                email: 'teste@teste',
            }],
            error: null,            
        }

        this.arrayholder = []
    }

    componentDidMount() {
        this.makeRemoteRequest()        
    }

    makeRemoteRequest = () => {
        this.setState({ loading: false })
        this.arrayholder = this.state.data;

    };

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
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`
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
            />                   
        )
    }

    render() {
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
                        // leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                        title={`${item.name.first} ${item.name.last}`}
                        subtitle={item.email}                            
                    />
                )}
                keyExtractor={item => item.email}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
            /> : 
            <FlatList                                
                renderItem={({ item }) => (
                    <ListItem
                        // leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                        title={`${item.name.first} ${item.name.last}`}
                        subtitle={item.email}                            
                    />
                )}
                keyExtractor={item => item.email}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
            />
        const renderCategoria = this.state.renderResult ?
            null :
            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.buttonCategory}>
                    <Text style={styles.textCategory}>Teste</Text>
                    <Text style={styles.textCategory}>></Text>
                </TouchableOpacity>          
                <TouchableOpacity style={styles.buttonCategory}>
                    <Text style={styles.textCategory}>Teste</Text>
                    <Text style={styles.textCategory}>></Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonCategory}>
                    <Text style={styles.textCategory}>Teste</Text>
                    <Text style={styles.textCategory}>></Text>
                </TouchableOpacity>          
                <TouchableOpacity style={styles.buttonCategory}>
                    <Text style={styles.textCategory}>Teste</Text>
                    <Text style={styles.textCategory}>></Text>
                </TouchableOpacity> 
            </View>


        return (
            <View style={styles.containerBack}>               
                { renderResultCondition }
                { renderCategoria}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerBack:{
        // flex: 1,
        backgroundColor: 'blue'
    },
    categoryContainer:{
        backgroundColor: 'red',
        // flex: 1
    },
    buttonCategory:{
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: 10
    },
    textCategory: {
        color: 'rgba(255, 255, 255, 0.8)',        
        fontSize: 20,
		marginRight: 4,
		fontWeight: 'bold',
		// fontStyle: "italic",
		textAlignVertical: "center",
		textAlign: "center",
    }
})

export default SearchList