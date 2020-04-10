import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'
import Logo from '../componentes/Logo'
import { Left } from 'native-base'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = { 
            // name: 'Temporario',
            email: '',
            password: '',
            showPass: true,
            press: false
        }
    }

    showPassFuntion = () => {        
        if(this.state.press === false){
            this.setState({ showPass: false, press: true})
        } else {
            this.setState({ showPass: true, press: false})
        }
    }

    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading){
            this.props.navigation.navigate('Profile')
        }
    }

    login = () => {
        this.props.onLogin({...this.state})
        // this.props.navigation.navigate('Profile')
    }

    render(){
        return(
            // <LinearGradient colors={[
            //     'rgb(146, 135, 211)',
            //     'rgb(124, 147, 225)',
            //     'rgba(124, 147, 225, 0.8)',
            //     'rgb(155, 156, 213)',
            //     'rgb(162, 163, 217)',            
            //     'rgba(162, 163, 217, 0.85)',
            //     'rgb(162, 163, 217)',
            //     'rgb(162, 163, 217)',
            //     'rgba(124, 147, 225, 0.8)',
            //     'rgb(124, 147, 225)',
            //     'rgb(146, 135, 211)',
            //     ]}
            //     style={styles.container}>
                
            <ImageBackground
                source={require("../../assets/imgs/imgRegister.jpg")}
                imageStyle={{ opacity: 0.55, backgroundColor: 'rgb(124, 147, 225)' }}
                style={styles.container}>                

                    {/* <Logo logo={'Helpfy'}/> */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Helpfy</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name='at-sign' size={26} color='rgba(255, 255, 255, 0.7)' 
                        style={styles.inputIcon} />
                        <TextInput style={styles.input}
                            placeholder='E-mail'
                            placeholderTextColor='#fff'                        
                            autoFocus={true} 
                            keyboardType='email-address'
                            value={this.state.email}
                            underlineColorAndroid='transparent'
                            onChangeText={email => this.setState({ email })} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name='lock' size={26} color='rgba(255, 255, 255, 0.7)' 
                            style={styles.inputIcon} />
                        <TextInput style={styles.input}
                            placeholder='Senha' 
                            placeholderTextColor='#fff'
                            secureTextEntry={this.state.showPass}
                            value={this.state.password}
                            underlineColorAndroid='transparent'
                            onChangeText={password => this.setState({ password })} />
                        <TouchableOpacity style={styles.btnEye}
                            onPress={this.showPassFuntion}>
                            <Icon name={this.state.press === false ? 'eye' : 'eye-off'} 
                            size={26} color='rgba(255, 255, 255, 0.7)' />
                        </TouchableOpacity>                        
                    </View>
                    <LinearGradient colors={[
                        'rgba(225, 22, 94, 0.6)',
                        'rgba(225, 22, 94, 0.4)',
                        'rgba(225, 22, 94, 0.6)',
                        'rgba(225, 22, 94, 0.9)'
                    ]} style={styles.buttom}>
                        <TouchableOpacity onPress={this.login}>
                            <Text style={styles.buttomText}>Entrar</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={[
                        'rgba(225, 22, 94, 0.6)',
                        'rgba(225, 22, 94, 0.4)',
                        'rgba(225, 22, 94, 0.6)',
                        'rgba(225, 22, 94, 0.9)'
                    ]} style={styles.buttom}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={styles.buttomText}>Registrar</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <View style={styles.forgot}>
                        <TouchableOpacity style={styles.forgot}>
                            <Text style={styles.forgotPasswd}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>

            </ImageBackground>
            // </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 80
    },
    title: {        
        fontFamily: 'shelter',        
        fontSize: 50,
        color: 'rgba(225, 22, 94, 0.7)',
        textShadowColor: '#fff', 
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,        
    },
    buttom: {
        height: 45,
        marginBottom: 20,
        width: '90%',
        borderRadius: 25,                
        justifyContent: 'center',
        alignContent: 'center'
    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    input: {                
        // backgroundColor: 'rgba(162, 163, 217, 0.65)',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        height: 45,
        borderRadius: 25,
        color: '#fff',
        fontSize: 16,
        paddingLeft: 45,
        marginHorizontal: 25,        
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',    
        justifyContent: 'center',        
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 37
    },
    forgot: {
        alignItems: 'flex-start',        
    },
    forgotPasswd: {
        color: 'rgba(225, 22, 94, 0.7)',
        fontWeight: 'bold',
        fontSize: 15
    }
})

const mapStateToProps = ({ user }) => {
    return{
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
