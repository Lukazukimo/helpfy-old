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
import LinearGradient from 'react-native-linear-gradient'

class Login extends Component{
    state = { 
        name: 'Temporario',
        email: '',
        password: ''
    }


    render(){
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
                ]}
                style={styles.container} >     
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
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
