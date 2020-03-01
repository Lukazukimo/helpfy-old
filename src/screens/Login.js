import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import Header from '../componentes/Header'
import Logo from '../componentes/Logo'
import { Left } from 'native-base'
class Login extends Component{
    state = { 
        name: 'Temporario',
        email: '',
        password: ''
    }


    render(){
        return(
            <View style={styles.container}>
                <Logo logo={'Helpfy'}/>
                <TextInput placeholder='Email' style={styles.input}
                    autoFocus={true} keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={this.login} style={styles.buttom}>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={styles.buttom}>
                    <Text style={styles.buttomText}>Criar nova conta...</Text>
                </TouchableOpacity>
                <View style={styles.forgot}>
                    <TouchableOpacity style={styles.forgot}>
                        <Text style={styles.forgotPasswd}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
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
    forgot: {
        alignItems: 'flex-start',
        marginTop: 30
    },
    forgotPasswd: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 15
    }
})


export default Login
