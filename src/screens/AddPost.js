import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import Logo from '../componentes/Logo'
import Header from '../componentes/Header'
class AddPost extends Component{
    state = {
        name: '',
        email: '',
        password: ''
    }

    render(){
        return(
            <View style={styles.container}>
                <Logo logo={'Insira as informações'} />

                <View style={styles.textInputs}>
                    <TextInput placeholder='Nome' style={styles.input}
                        autoFocus={true} value={this.state.name}
                        onChangeText={name => this.setState({ name })} />
                </View>
                <Text style={styles.information}>
                    Título do item
                </Text>
                <View style={styles.textInputs}>
                    <TextInput placeholder='Email' style={styles.input}
                        keyboardType='email-address' value={this.state.email}
                        onChangeText={email => this.setState({ email })} />
                </View>
                <Text style={styles.information}>
                    Descrição do item
                </Text>
                <View style={styles.textInputs}>
                    <TextInput placeholder='Senha' style={styles.input}
                        secureTextEntry={true} value={this.state.password}
                        onChangeText={password => this.setState({ password })} />
                </View>
                <Text style={styles.information}>
                    Título do item
                </Text>
                <View style={styles.textInputs}>
                    <TouchableOpacity 
                        onPress={() => { this.props.onCreateUser(this.state) }} 
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        width: 220,
        borderRadius: 40,

    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 7
    },
    textInputs: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    information: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        marginLeft: 30

    }
})


export default AddPost
