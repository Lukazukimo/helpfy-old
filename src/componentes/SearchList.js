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
            }],
            error: null,
        }

        this.arrayholder = []
    }

    componentDidMount() {
        this.makeRemoteRequest();
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

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '86%',
                    backgroundColor: '#CED0CE',
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
            console.log(itemData.indexOf(textData) > -1)
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
                onChangeText={text => this.searchFilterFunction(text)}
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
        return (
            <View style={styles.containerBack}>
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
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerBack:{
        flex: 1
    }
})

export default SearchList